import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import { mods } from "@/data/vehicles"
import DronesMods from "./index"

describe("DronesMods", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(
      withTestRouter(<DronesMods />, { query: { id: "11", gearIndex: "0" } }),
    )
  }
  it("should render drone mods", async () => {
    const { getByText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())
    expect(getByText("MCT-Nissan Roto Drone (0)")).toBeInTheDocument()
    mods.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
