import { electronicAccessoriesData } from "@/data/electronics"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getTextInContainer,
  closest,
} from "@/test/testUtils"
import ElectronicAccessories from "./index"

describe("<ElectronicAccessories/>", () => {
  beforeAll(setupIndexedDB)
  it("should display Electronic Accessories' stats", async () => {
    const { getByText, getByLabelText } = render(
      withTestRouter(<ElectronicAccessories />, { query: { id: "10" } }),
    )

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = closest(getByText("Buy"), "tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "DR")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    //stats
    const eA = electronicAccessoriesData[0],
      eARow = closest(getByLabelText(`Add ${eA.name}`), "tr")

    expect(getTextInContainer(eARow, eA.name)).toBeInTheDocument()
    expect(getTextInContainer(eARow, eA.deviceRating)).toBeInTheDocument()
    expect(getTextInContainer(eARow, eA.availability)).toBeInTheDocument()
    expect(getTextInContainer(eARow, `${eA.cost}¥`)).toBeInTheDocument()
  })
})
