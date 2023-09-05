import MagResPage from "@/pages/[id]/magres"
import { render, withTestRouter, setupIndexedDB, screen } from "../../testUtils"

describe("Magic & Resonance Page", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<MagResPage />, { query: { id: "2" } }))
  it("should exist", async () => {
    setup()

    expect(screen.getByText("Magic & Resonance")).toBeInTheDocument()
    expect(await screen.findByText("Awakened")).toBeInTheDocument()
    expect(screen.getByText("Emergent")).toBeInTheDocument()
  })
})
