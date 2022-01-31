import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getTextIn,
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

    mods.forEach(({ name }) => {
      expect(getTextIn(buyTable, name)).toBeInTheDocument()
    })
  })
})
