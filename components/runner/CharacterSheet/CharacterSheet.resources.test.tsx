import {
  renderWithTestRouter,
  screen,
  setupIndexedDB,
  within,
} from "@/test/testUtils"
import CharSheet from "./index"
import { mockedRunners } from "@/test/mocks"

const cayman = mockedRunners[9]

const setup = (id = "10") => {
  renderWithTestRouter(<CharSheet />, { query: { id } })
}

describe("Resources", () => {
  beforeAll(setupIndexedDB)

  test("renders a table for each type of gear", async () => {
    setup()

    const gearSection = await (
      await screen.findByRole("heading", { name: "Gear" })
    ).closest("section")

    expect(gearSection).toBeInTheDocument()

    // should display a name column for each piece of gear
    expect(
      within(gearSection).getAllByRole("columnheader", { name: "Name" }),
    ).toHaveLength(Object.keys(cayman.resources).length)

    Object.keys(cayman.resources).forEach((category) => {
      expect(
        screen.getByRole("heading", { name: category }),
      ).toBeInTheDocument()
      expect(screen.getByRole("table", { name: category })).toBeInTheDocument()
    })
  })

  test("render weapons", async () => {
    setup()

    const meleeTable = await screen.findByRole("table", { name: "melee" })

    expect(meleeTable).toBeInTheDocument()

    expect(
      within(meleeTable).getByRole("columnheader", { name: "DV" }),
    ).toBeInTheDocument()
    expect(
      within(meleeTable).getByRole("columnheader", { name: "AR" }),
    ).toBeInTheDocument()

    const katanaRow = screen.getByRole("row", { name: /Katana/ })
    expect(katanaRow).toBeInTheDocument()
    expect(katanaRow).toHaveTextContent("4P")
    expect(katanaRow).toHaveTextContent("10/-/-/-/-")
    // expect(katanaRow).toHaveTextContent("4DP")

    const knifeRow = screen.getByRole("row", { name: /Combat Knife/ })
    expect(knifeRow).toBeInTheDocument()
    expect(knifeRow).toHaveTextContent("3P")
    expect(knifeRow).toHaveTextContent("8/2/-/-/-")
    // expect(knifeRow).toHaveTextContent("4DP")
  })
})
