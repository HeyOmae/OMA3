import { mockedRunners } from "@/test/mocks"
import {
  withTestRouter,
  render,
  userEvent,
  waitFor,
  setupIndexedDB,
} from "@/test/testUtils"
import { initRunnerAttributes } from "@/types/runner"
import KnowledgeSkills from "./index"

describe("knowledge", () => {
  beforeAll(() =>
    setupIndexedDB({
      payload: [
        ...mockedRunners,
        { id: 12, name: "", describe: "", attributes: initRunnerAttributes },
        { id: 13, name: "Blanky", describe: "" },
      ],
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

    expect(getByText("Knowledge Points")).toBeInTheDocument()
    expect(getByText("4")).toBeInTheDocument()

    const input = getByLabelText("input knowledge skill")

    await userEvent.click(input)
    await userEvent.keyboard(knowledgeSkill + "{enter}")

    expect(getByText("3")).toBeInTheDocument()
    expect(getByText(knowledgeSkill)).toBeInTheDocument()

    const knowledgeSkill2 = "Magical Traditions"
    await userEvent.click(input)
    await userEvent.click(getByText(knowledgeSkill2))
    await userEvent.click(getByLabelText("submit"))

    expect(getByText("2")).toBeInTheDocument()
    expect(getByText(knowledgeSkill2)).toBeInTheDocument()

    // TODO: figure out how to reset the input without needing to click the clear button
    await userEvent.click(getByLabelText("Clear"))
    await userEvent.click(input)
    await userEvent.keyboard("Pizza")
    await userEvent.click(getByLabelText("submit"))

    expect(getByText("1")).toBeInTheDocument()
    expect(getByText("Pizza")).toBeInTheDocument()
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
    const { getByText, getByLabelText } = setup("12")

    await waitFor(() => {
      expect(getByLabelText("input knowledge skill")).toBeInTheDocument()
    })

    await userEvent.click(getByLabelText("input knowledge skill"))
    await userEvent.keyboard("Tacos{enter}")

    await waitFor(() => {
      expect(getByText("Runner's Knowledge Skills")).toBeInTheDocument()
    })
  })

  it("should show the priority warning if there is no Logic attibute", async () => {
    const { getByText } = setup("13")

    await waitFor(() => {
      expect(
        getByText("You need to set the attributes priority"),
      ).toBeInTheDocument()
    })
  })
})
