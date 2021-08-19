import { SkillPage } from "@/pages/[id]/skills"
import { render, withTestRouter, setupIndexedDB, waitFor } from "../testUtils"

describe("Skill Page", () => {
  beforeAll(setupIndexedDB)

  const setup = () =>
    render(withTestRouter(<SkillPage />, { query: { id: "2" } }))

  it("should exist", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Skills")).toBeInTheDocument()
      expect(getByText("Skills to learn")).toBeInTheDocument()
      expect(getByText("Known skills")).toBeInTheDocument()
    })
  })
})
