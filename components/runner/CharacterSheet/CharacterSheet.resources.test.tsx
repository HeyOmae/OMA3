import { renderWithTestRouter, screen, setupIndexedDB } from "@/test/testUtils"
import CharSheet from "./index"

const setup = (id = "10") => {
  renderWithTestRouter(<CharSheet />, { query: { id } })
}

describe("Resources", () => {
  beforeAll(setupIndexedDB)

  test("render weapons", async () => {
    setup()

    expect(
      await screen.findByRole("heading", { name: "Gear" }),
    ).toBeInTheDocument()

    expect(screen.getByRole("heading", { name: "melee" })).toBeInTheDocument()
    expect(screen.getByText("Katana")).toBeInTheDocument()
  })
})
