import {
  render,
  screen,
  setupIndexedDB,
  userEvent,
  withTestRouter,
} from "@/test/testUtils"
import KnowledgeSkills from "."

describe("language section", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "7") => {
    const user = userEvent.setup()
    render(withTestRouter(<KnowledgeSkills />, { query: { id } }))
    return user
  }
  it("should add a language skill", async () => {
    const user = setup()

    await screen.findByText("Enter Language Skill")

    const pointsElement = screen
      .getAllByText("Knowledge Points")[0]
      .closest("dl")
    expect(pointsElement).toHaveTextContent("4")

    await user.click(screen.getByLabelText("input language skill"))
    await user.keyboard("Sperethiel{enter}")

    expect(screen.getByText("Sperethiel")).toBeInTheDocument()
    expect(pointsElement).toHaveTextContent("3")
  })

  it("should add language skills for runner's that already have some", async () => {
    const user = setup("8")

    await screen.findByText("Enter Language Skill")

    const pointsElement = screen
      .getAllByText("Knowledge Points")[0]
      .closest("dl")
    expect(pointsElement).toHaveTextContent("3")

    await user.click(screen.getByLabelText("input language skill"))
    await user.keyboard("English")
    await user.click(screen.getByLabelText("submit language skill"))

    expect(screen.getByText("English")).toBeInTheDocument()
    expect(pointsElement).toHaveTextContent("2")
  })

  it("should remove a lanuage skill", async () => {
    const user = setup("8")

    await screen.findByText("Japanese")

    const pointsElement = screen
      .getAllByText("Knowledge Points")[0]
      .closest("dl")
    expect(pointsElement).toHaveTextContent("2")

    await user.click(screen.getByLabelText("Remove Japanese"))

    expect(screen.queryByText("Japanese")).not.toBeInTheDocument()
    expect(pointsElement).toHaveTextContent("4")
  })

  it("should be able to change the rating of a language", async () => {
    const user = setup("8")

    await screen.findByText("Mandarin")

    const pointsElement = screen
      .getAllByText("Knowledge Points")[0]
      .closest("dl")
    expect(pointsElement).toHaveTextContent("4")

    await user.click(screen.getByLabelText("Mandarin Rating"))
    await user.click(screen.getByRole("option", { name: /4/i }))

    expect(pointsElement).toHaveTextContent("0")

    await user.click(screen.getByLabelText("Mandarin Rating"))
    await user.click(screen.getByRole("option", { name: /Native/i }))

    expect(pointsElement).toHaveTextContent("4")
  })
})
