import { cyberdeckData } from "@/data/electronics"
import {
  render,
  withTestRouter,
  waitFor,
  getByText as getTextInContainer,
  setupIndexedDB,
} from "@/test/testUtils"
import { Cyberdecks } from "."

describe("<Cyberdecks/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<Cyberdecks />, { query: { id: "10" } }))
  it("should display stats for cyberdecks", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = getByText("Buy").closest("tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "DR")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "A/S")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Slots")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    // Stats of a commlink
    const cyberdeck = cyberdeckData[0],
      cyberdeckRow = getByLabelText(`Add ${cyberdeck.name}`).closest("tr")

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
