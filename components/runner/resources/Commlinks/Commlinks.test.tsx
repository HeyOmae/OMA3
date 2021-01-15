import {
  render,
  waitFor,
  getByText as getTextInContainer,
  withTestRouter,
  setupIndexedDB,
} from "@/test/testUtils"
import { Commlinks } from "."
import { commlinkData } from "@/data/electronics"

describe("<Commlinks/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<Commlinks />, { query: { id: "10" } }))
  it("should display stats for commlink", async () => {
    const { getByText, getByLabelText } = setup()
    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })

    // Header
    const buyHeader = getByText("Buy").closest("thead")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "DR")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "D/F")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Slots")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    // Stats of a commlink

    const commlink = commlinkData[0],
      commlinkRow = getByLabelText(`Add ${commlink.name}`).closest("tr")

    expect(getTextInContainer(commlinkRow, commlink.name)).toBeInTheDocument()
    expect(
      getTextInContainer(commlinkRow, commlink.deviceRating),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(
        commlinkRow,
        `${commlink.matrixAttributes.dataProcessing}/${commlink.matrixAttributes.firewall}`,
      ),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(commlinkRow, commlink.matrixAttributes.programs),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(commlinkRow, commlink.availability),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(commlinkRow, `${commlink.cost}¥`),
    ).toBeInTheDocument()
  })
})
