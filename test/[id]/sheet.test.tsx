import { mockedRunners } from "../mocks"
import { renderWithTestRouter, screen, setupIndexedDB } from "../testUtils"
import CharacterSheet from "@/pages/[id]/sheet"

describe("character sheet page", () => {
  beforeAll(setupIndexedDB)

  test("Character Sheet Page", async () => {
    const cayman = mockedRunners[9]
    renderWithTestRouter(<CharacterSheet />, { query: { id: "10" } })

    expect(
      await screen.findByRole("heading", { name: cayman.name }),
    ).toBeInTheDocument()
  })
})
