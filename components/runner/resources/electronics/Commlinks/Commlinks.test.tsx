import { setupIndexedDB } from "@/test/testUtils"
import { Commlinks } from "."
import { commlinkData } from "@/data/electronics"
import { TestMatrixDeviceTable } from "../utils"

describe("<Commlinks/>", () => {
  beforeAll(setupIndexedDB)

  it(
    "should display stats for commlink",
    TestMatrixDeviceTable(Commlinks, commlinkData),
  )
})
