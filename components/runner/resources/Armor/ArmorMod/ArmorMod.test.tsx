import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getTextIn,
  runnerFromDB,
  SliderHelper,
  userEvent,
} from "@/test/testUtils"
import ArmorMod from "./index"
import { mods } from "@/data/armor"

describe("<ArmorMod />", () => {
  beforeAll(setupIndexedDB)
  const setup = ({ id = "10", gearIndex = "0" } = {}) =>
    render(withTestRouter(<ArmorMod />, { query: { id, gearIndex } }))
  it("should render armor mods", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })

    const buyTable = getByText("Buy").closest("table")

    mods.forEach(({ name }) => {
      expect(getTextIn(buyTable, name)).toBeInTheDocument()
    })
  })

  it("should render bread crumbs", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Resources")).toBeInTheDocument()
    })
    expect(getByText("Resources")).toHaveAttribute("href", "/10/resources")
    expect(getByText("Armor")).toHaveAttribute("href", "/10/resources/armor")
    expect(getByText("Full Body Armor (0)")).toBeInTheDocument()
  })

  it("should render capacity", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("0/10")).toBeInTheDocument()
    })
  })

  it("should add purchased mods to armor", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })

    await userEvent.click(getByLabelText("Add Chemical Seal"))

    await waitFor(() => {
      expect(runnerFromDB(9).resources.armor[0].mods).toHaveLength(1)
    })

    expect(runnerFromDB(9).resources.armor[0].mods[0].name).toEqual(
      "Chemical Seal",
    )
    expect(getByLabelText("Remove Chemical Seal")).toBeInTheDocument()
    expect(getByText("6/10")).toBeInTheDocument()
  })

  it("should have a rating slider to set the rating of the mod", async () => {
    const { getByText, getByLabelText, getByTestId } = setup()

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })

    SliderHelper.change(getByTestId("Fire Resistance-rating"), 4, 1, 10)
    await userEvent.click(getByLabelText("Add Fire Resistance"))

    await waitFor(() => {
      expect(runnerFromDB(9).resources.armor[0].mods).toHaveLength(2)
    })

    expect(runnerFromDB(9).resources.armor[0].mods[1].name).toEqual(
      "Fire Resistance",
    )
    expect(getByLabelText("Remove Fire Resistance")).toBeInTheDocument()
    expect(getByText("10/10")).toBeInTheDocument()
  })
})
