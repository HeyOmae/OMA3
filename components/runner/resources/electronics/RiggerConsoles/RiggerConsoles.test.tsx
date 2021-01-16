import { riggerConsoleData } from "@/data/electronics"
import { setupIndexedDB } from "@/test/testUtils"
import { TestMatrixDeviceTable } from "../utils"
import { RiggerConsoles } from "./index"

describe("<RiggerConsoles/>", () => {
  beforeAll(setupIndexedDB)
  it(
    "should display stats for rigger consoles",
    TestMatrixDeviceTable(RiggerConsoles, riggerConsoleData),
  )
})
