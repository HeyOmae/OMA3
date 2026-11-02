import { riggerConsoleData } from "@/data/electronics"
import {
  expectGearToDisplayMatrixDeviceTable,
  setupIndexedDB,
  findGearReference,
  render,
  withTestRouter,
} from "@/test/testUtils"
import { RiggerConsoles } from "./index"

describe("<RiggerConsoles/>", () => {
  beforeAll(setupIndexedDB)
  it(
    "should display stats for rigger consoles",
    expectGearToDisplayMatrixDeviceTable(RiggerConsoles, riggerConsoleData),
  )

  it("should show the rulebook page for gear", async () => {
    render(withTestRouter(<RiggerConsoles />, { query: { id: "10" } }))
    expect(await findGearReference("Maersk Spider", 197)).toBeInTheDocument()
  })
})
