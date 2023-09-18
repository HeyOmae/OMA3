import { riggerConsoleData } from "@/data/electronics"
import {
  expectGearToDisplayMatrixDeviceTable,
  setupIndexedDB,
} from "@/test/testUtils"
import { RiggerConsoles } from "./index"

describe("<RiggerConsoles/>", () => {
  beforeAll(setupIndexedDB)
  it(
    "should display stats for rigger consoles",
    expectGearToDisplayMatrixDeviceTable(RiggerConsoles, riggerConsoleData),
  )
})
