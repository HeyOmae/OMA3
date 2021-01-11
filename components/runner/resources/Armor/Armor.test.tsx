import armorData from "@/data/armor"
import {
  render,
  withTestRouter,
  getByText as getTextInContainer,
  waitFor,
  setupIndexedDB,
} from "@/test/testUtils"
import { Armor } from "./index"

describe("<Armor />", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(withTestRouter(<Armor />, { query: { id: "10" } }))
  }
  it("should have a label for armor stats", async () => {
    const { getByText } = setup()
    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })
    const buyHeader = getByText("Buy").closest("thead")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "DR")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cap")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()
  })

  it("should display purchase buttons of each type of armor", async () => {
    const { getByLabelText } = setup()

    await waitFor(() => {
      expect(getByLabelText(`Add ${armorData[0].name}`)).toBeInTheDocument()
    })

    armorData.forEach(({ name }) => {
      expect(getByLabelText(`Add ${name}`)).toBeInTheDocument()
    })
  })
})
