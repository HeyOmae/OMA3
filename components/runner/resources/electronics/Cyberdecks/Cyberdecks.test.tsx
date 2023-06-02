import { cyberdeckData } from "@/data/electronics"
import {
  render,
  withTestRouter,
  getByText as getTextInContainer,
  setupIndexedDB,
  screen,
} from "@/test/testUtils"
import { Cyberdecks } from "."

describe("<Cyberdecks/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<Cyberdecks />, { query: { id: "10" } }))
  it("should display stats for cyberdecks", async () => {
    setup()

    expect(await screen.findByText("Buy")).toBeInTheDocument()

    const buyHeader = screen.getByText("Buy").closest("tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "DR")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "A/S")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Slots")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    // Stats of a cyberdeck
    const cyberdeck = cyberdeckData[0],
      cyberdeckRow = screen
        .getByLabelText(`Add ${cyberdeck.name}`)
        .closest("tr")

    expect(getTextInContainer(cyberdeckRow, cyberdeck.name)).toBeInTheDocument()
    expect(
      getTextInContainer(cyberdeckRow, cyberdeck.deviceRating),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(
        cyberdeckRow,
        `${cyberdeck.matrixAttributes.attack}/${cyberdeck.matrixAttributes.sleaze}`,
      ),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(cyberdeckRow, cyberdeck.matrixAttributes.programs),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(cyberdeckRow, cyberdeck.availability),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(cyberdeckRow, `${cyberdeck.cost}¥`),
    ).toBeInTheDocument()
  })
})
