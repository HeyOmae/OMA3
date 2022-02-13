import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getTextIn,
  runnerFromDB,
} from "@/test/testUtils"
import { FirearmMods } from "./index"
import { mods } from "@/data/firearms"

describe("<FirearmMods />", () => {
  beforeAll(setupIndexedDB)
  const setup = ({ id = "10", gearIndex = "5" } = {}) =>
    render(withTestRouter(<FirearmMods />, { query: { id, gearIndex } }))
  it("should render firearm mods", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })

    const buyTable = getByText("Buy").closest("table")

    mods.forEach(({ name, useAs }) => {
      expect(getTextIn(buyTable, name)).toBeInTheDocument()
      const row = getTextIn(buyTable, name).closest("tr")
      const slots = useAs.map(({ slot }) => slot ?? "INTEGRAL")
      expect(getTextIn(row, slots.join(", "))).toBeInTheDocument()
    })
  })

  it("should render bread crumbs", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Resources")).toBeInTheDocument()
    })
    expect(getByText("Resources")).toHaveAttribute("href", "/10/resources")
    expect(getByText("Firearms")).toHaveAttribute(
      "href",
      "/10/resources/firearms",
    )
    expect(getByText("FN Har (5)")).toBeInTheDocument()
  })

  it("should add purchased mods to the gun", async () => {
    const { getByText, getByLabelText, debug } = setup()

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })

    getByLabelText("Add Laser Sight").click()

    await waitFor(() => {
      expect(runnerFromDB(9).resources.firearms[5].mods).toHaveLength(1)
    })

    expect(runnerFromDB(9).resources.firearms[5].mods[0].name).toEqual(
      "Laser Sight",
    )
    debug(getByText("Sell").closest("table"))
    expect(getByLabelText("Remove Laser Sight")).toBeInTheDocument()
  })
})
