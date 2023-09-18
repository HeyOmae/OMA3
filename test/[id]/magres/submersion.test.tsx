import SubmersionPage from "@/pages/[id]/magres/submersion"
import { render, withTestRouter, setupIndexedDB, screen } from "../../testUtils"

describe("Submersion Page", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "12") =>
    render(
      withTestRouter(<SubmersionPage />, {
        query: { id },
        asPath: `${id}/magres/Submersion`,
      }),
    )
  it("should exist", async () => {
    setup()

    expect(
      screen.getByRole("heading", { name: "Submersion" }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole("heading", { name: "Echoes" }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Magic & Resonance" }),
    ).toHaveAttribute("href", "/12/magres")
  })
})
