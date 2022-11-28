import {
  setupIndexedDB,
  withTestRouter,
  getByText as getTextInContainer,
  waitFor,
  render,
  SliderHelper,
  runnerFromDB,
  userEvent,
} from "@/test/testUtils"
import OtherElectronics from "./"

describe("<OtherElectronics/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<OtherElectronics />, { query: { id: "10" } }))
  it("should display all the other electronics", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = getByText("Buy").closest("tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Category")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Rating")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    // Gear with no rating
    const buyScannerRow = getByLabelText("Add Bug Scanner").closest("tr")

    expect(getTextInContainer(buyScannerRow, "Bug Scanner")).toBeInTheDocument()
    expect(
      getTextInContainer(buyScannerRow, "Communication"),
    ).toBeInTheDocument()
    expect(getTextInContainer(buyScannerRow, "N/A")).toBeInTheDocument()
    expect(getTextInContainer(buyScannerRow, "3")).toBeInTheDocument()
    expect(getTextInContainer(buyScannerRow, "200¥")).toBeInTheDocument()

    // Gear with rating
    const jammerRow = getByLabelText("Add Jammer Direct").closest("tr")

    expect(getTextInContainer(jammerRow, "Jammer Direct")).toBeInTheDocument()
    expect(getTextInContainer(jammerRow, "Communication")).toBeInTheDocument()
    expect(getTextInContainer(jammerRow, "1")).toBeInTheDocument()
    expect(getTextInContainer(jammerRow, "4L")).toBeInTheDocument()
    expect(getTextInContainer(jammerRow, "200¥")).toBeInTheDocument()
  })

  it("should save rated gear", async () => {
    const { getByTestId, getByLabelText, getByText } = setup()
    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    SliderHelper.change(getByTestId("White Noise Generator-rating"), 4, 1, 6)

    await userEvent.click(getByLabelText("Add White Noise Generator"))

    await waitFor(() => {
      expect(runnerFromDB(9).resources?.otherElectronics[0].name).toEqual(
        "White Noise Generator",
      )
    })
    expect(runnerFromDB(9).resources.otherElectronics[0].currentRating).toEqual(
      4,
    )
    const purchasedRow = getByLabelText("Remove White Noise Generator").closest(
      "tr",
    )
    expect(
      getTextInContainer(purchasedRow, "White Noise Generator"),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(purchasedRow, "Communication"),
    ).toBeInTheDocument()
    expect(getTextInContainer(purchasedRow, "4")).toBeInTheDocument()
    expect(getTextInContainer(purchasedRow, "3")).toBeInTheDocument()
    expect(getTextInContainer(purchasedRow, "200¥")).toBeInTheDocument()
  })
})
