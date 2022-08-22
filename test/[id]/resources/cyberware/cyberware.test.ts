import CyberwarePage from "@/pages/[id]/resources/cyberware"
import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import { cyberware as cyberwareData } from "@/data/cyberware"

describe("cyberware page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell cyberware",
    expectToBuyAndSellGear(CyberwarePage, cyberwareData),
  )
})
