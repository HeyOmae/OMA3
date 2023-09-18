import {
  expectGearToDisplayMatrixDeviceTable,
  setupIndexedDB,
} from "@/test/testUtils"
import { Commlinks } from "."
import { commlinkData } from "@/data/electronics"

describe("<Commlinks/>", () => {
  beforeAll(setupIndexedDB)

  it(
    "should display stats for commlink",
    expectGearToDisplayMatrixDeviceTable(Commlinks, commlinkData),
  )
})
