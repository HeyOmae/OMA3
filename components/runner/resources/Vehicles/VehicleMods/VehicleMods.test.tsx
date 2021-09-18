import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import { mods } from "@/data/vehicles"
import VehicleMods from "./index"

describe("VehicleMods", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(
      withTestRouter(<VehicleMods />, { query: { id: "10", gearIndex: "0" } }),
    )
  }
  it("should render vehicle mods", async () => {
    const { getByText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())
    mods.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
