import { tagsData } from "@/data/electronics"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getTextInContainer,
} from "@/test/testUtils"
import Tags from "./index"

describe("<Tags />", () => {
  beforeAll(setupIndexedDB)
  it("should display Electronic Accessories' stats", async () => {
    const { getByText, getByLabelText } = render(
      withTestRouter(<Tags />, { query: { id: "10" } }),
    )

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = getByText("Buy").closest("tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "DR")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    // using stealth tags so that it has some unique text to look for
    const tag = tagsData[2],
      tagRow = getByLabelText(`Add ${tag.name}`).closest("tr")

    expect(getTextInContainer(tagRow, tag.name)).toBeInTheDocument()
    expect(getTextInContainer(tagRow, tag.deviceRating)).toBeInTheDocument()
    expect(getTextInContainer(tagRow, tag.availability)).toBeInTheDocument()
    expect(getTextInContainer(tagRow, `${tag.cost}¥`)).toBeInTheDocument()
  })
})
