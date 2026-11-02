import { tagsData } from "@/data/electronics"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getTextInContainer,
  closest,
  findGearReference,
} from "@/test/testUtils"
import Tags from "./index"

describe("<Tags />", () => {
  beforeAll(setupIndexedDB)
  it("should display Electronic Accessories' stats", async () => {
    const { getByText, getByLabelText } = render(
      withTestRouter(<Tags />, { query: { id: "10" } }),
    )

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = closest(getByText("Buy"), "tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "DR")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    // using stealth tags so that it has some unique text to look for
    const tag = tagsData[2],
      tagRow = closest(getByLabelText(`Add ${tag.name}`), "tr")

    expect(getTextInContainer(tagRow, tag.name)).toBeInTheDocument()
    expect(getTextInContainer(tagRow, tag.deviceRating)).toBeInTheDocument()
    expect(getTextInContainer(tagRow, tag.availability)).toBeInTheDocument()
    expect(getTextInContainer(tagRow, `${tag.cost}¥`)).toBeInTheDocument()
  })

  it("should show the rulebook page for gear", async () => {
    render(withTestRouter(<Tags />, { query: { id: "10" } }))
    expect(await findGearReference("Standard Tag", 269)).toBeInTheDocument()
  })
})
