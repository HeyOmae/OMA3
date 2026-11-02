import armorData from "@/data/armor"
import {
  render,
  withTestRouter,
  getByText as getTextInContainer,
  waitFor,
  setupIndexedDB,
  closest,
  findGearReference,
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
    const buyHeader = closest(getByText("Buy"), "thead")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "DR")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cap")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Reference")).toBeInTheDocument()
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

  it("should display a link to the mod page", async () => {
    const { getByLabelText } = setup()

    await waitFor(() => {
      expect(getByLabelText("Mod Full Body Armor (0)")).toBeInTheDocument()
    })
  })

  it("should show the rulebook page for gear", async () => {
    setup()
    expect(await findGearReference("Armor Vest", 265)).toBeInTheDocument()
  })
})
