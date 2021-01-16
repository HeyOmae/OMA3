import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"
import CyberdeckPage from "@/pages/[id]/resources/cyberdecks"
import { cyberdeckData } from "@/data/electronics"

describe("Cyberdeck page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should by able to buy and sell cyberdecks",
    testBuyAndSellGear(CyberdeckPage, cyberdeckData),
  )
})
