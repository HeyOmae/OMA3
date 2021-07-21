import { setupIndexedDB } from "@/test/testUtils"
import { Commlinks } from "."
import { commlinkData } from "@/data/electronics"
import { expectGearToDisplayMatrixDeviceTable } from "../utils"

describe("<Commlinks/>", () => {
  beforeAll(setupIndexedDB)

  it(
    "should display stats for commlink",
    expectGearToDisplayMatrixDeviceTable(Commlinks, commlinkData),
  )
})
