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

    await user.click(screen.getByLabelText("input language skill"))
    await user.keyboard("Sperethiel{enter}")

    expect(screen.getByText("Sperethiel")).toBeInTheDocument()
  })

  it("should add language skills for runner's that already have some", async () => {
    const user = setup("8")

    await screen.findByText("Enter Language Skill")

    await user.click(screen.getByLabelText("input language skill"))
    await user.keyboard("English")
    await user.click(screen.getByLabelText("submit language skill"))

    expect(screen.getByText("English")).toBeInTheDocument()
  })

  it("should remove a lanuage skill", async () => {
    const user = setup("8")

    await screen.findByText("Japanese")

    await user.click(screen.getByLabelText("Remove Japanese"))

    expect(screen.queryByText("Japanese")).not.toBeInTheDocument()
  })
})
