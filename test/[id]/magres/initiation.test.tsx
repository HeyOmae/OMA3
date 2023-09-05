import InitiationPage from "@/pages/[id]/magres/initiation"
import { render, withTestRouter, setupIndexedDB, screen } from "../../testUtils"

describe("Initiation Page", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "7") =>
    render(
      withTestRouter(<InitiationPage />, {
        query: { id },
        asPath: `${id}/magres/initiation`,
      }),
    )
  it("should exist", async () => {
    setup()

    expect(
      screen.getByRole("heading", { name: "Initiation" }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole("heading", { name: "Metamagics" }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Magic & Resonance" }),
    ).toHaveAttribute("href", "/7/magres")
  })
})
