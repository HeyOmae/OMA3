import QualityPage from "@/pages/[id]/qualities"
import { setupIndexedDB, withTestRouter, render, screen } from "../testUtils"

describe("Quality Page", () => {
  beforeAll(setupIndexedDB)

  const setup = () =>
    render(withTestRouter(<QualityPage />, { query: { id: "10" } }))

  test("should exist", async () => {
    setup()

    expect(
      await screen.findByText("Cayman's Positive Qualities"),
    ).toBeInTheDocument()
    expect(screen.getByRole("definition")).toHaveTextContent(13)
  })
})
