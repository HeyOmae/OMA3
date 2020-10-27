import MagResPage from "../../pages/[id]/magres"
import { render, waitFor, withTestRouter, setupIndexedDB } from "../testUtils"

describe("Magic & Resonance Page", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<MagResPage />, { query: { id: "2" } }))
  it("should exist", async () => {
    const { getByText } = setup()
    await waitFor(() => {
      expect(getByText("Magic & Resonance")).toBeInTheDocument()
      expect(getByText("Awakened")).toBeInTheDocument()
      expect(getByText("Emergent")).toBeInTheDocument()
    })
  })
})
