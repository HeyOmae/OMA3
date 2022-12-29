import {
  withTestRouter,
  render,
  userEvent,
  waitFor,
  setupIndexedDB,
} from "@/test/testUtils"
import KnowledgeSkills from "./index"

describe("knowledge", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<KnowledgeSkills />, { query: { id: "7" } }))
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
  })
})
