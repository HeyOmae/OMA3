import KnowledgeSkillPage from "@/pages/[id]/knowledge"
import { mockedRunners } from "../mocks"
import { render, withTestRouter, setupIndexedDB, waitFor } from "../testUtils"

describe("Knowledge Skill Page", () => {
  beforeAll(setupIndexedDB)

  const setup = () =>
    render(withTestRouter(<KnowledgeSkillPage />, { query: { id: "10" } }))

  it("display knowledge skills", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Cayman's Knowledge Skills")).toBeInTheDocument()
    })

    mockedRunners[9].knowledge.forEach((skillName) =>
      expect(getByText(skillName)).toBeInTheDocument(),
    )
  })
})
