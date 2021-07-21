import { riggerConsoleData } from "@/data/electronics"
import { setupIndexedDB } from "@/test/testUtils"
import { expectGearToDisplayMatrixDeviceTable } from "../utils"
import { RiggerConsoles } from "./index"

describe("<RiggerConsoles/>", () => {
  beforeAll(setupIndexedDB)
  it(
    "should display stats for rigger consoles",
    expectGearToDisplayMatrixDeviceTable(RiggerConsoles, riggerConsoleData),
  )
})
