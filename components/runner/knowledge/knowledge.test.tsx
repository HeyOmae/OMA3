import { mockedRunners } from "@/test/mocks"
import {
  withTestRouter,
  render,
  userEvent,
  waitFor,
  setupIndexedDB,
} from "@/test/testUtils"
import KnowledgeSkills from "./index"

describe("knowledge", () => {
  beforeAll(() =>
    setupIndexedDB({
      payload: [...mockedRunners, { id: 12, name: "", describe: "" }],
    }),
  )
  const setup = (id = "7") =>
    render(withTestRouter(<KnowledgeSkills />, { query: { id } }))
  it("should be able to add a knowledge skills", async () => {
    const { getByLabelText, getByText } = setup()
    const knowledgeSkill = "Gangs of Seattle"

    await waitFor(() =>
      expect(getByLabelText("input knowledge skill")).toBeInTheDocument(),
    )

    const input = getByLabelText("input knowledge skill")

    await userEvent.click(input)
    await userEvent.keyboard(knowledgeSkill + "{enter}")

    expect(getByText(knowledgeSkill)).toBeInTheDocument()

    const knowledgeSkill2 = "Magical Traditions"
    await userEvent.click(input)
    await userEvent.click(getByText(knowledgeSkill2))
    await userEvent.click(getByLabelText("submit"))

    expect(getByText(knowledgeSkill2)).toBeInTheDocument()
  })

  it("should remove a knowledge skill", async () => {
    const { getByLabelText, queryByText } = setup("10")

    await waitFor(() =>
      expect(queryByText("Weapons Manufacturers")).toBeInTheDocument(),
    )

    await userEvent.click(getByLabelText("Remove Weapons Manufacturers"))

    expect(queryByText("Weapons Manufacturers")).not.toBeInTheDocument()
    expect(queryByText("Craft Beers")).toBeInTheDocument()
    expect(queryByText("Law Enforcement Corps")).toBeInTheDocument()
  })

  it("should fall back to say 'Runner' if the name isn't set", async () => {
    const { getByText } = setup("12")

    await waitFor(() => {
      expect(getByText("Runner's Knowledge Skills")).toBeInTheDocument()
    })
  })
})
