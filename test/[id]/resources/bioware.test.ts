import BiowarePage from "@/pages/[id]/resources/bioware"
import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import { bioware as biowareData } from "@/data/bioware"

describe("bioware page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell bioware",
    expectToBuyAndSellGear(BiowarePage, biowareData),
  )
})
