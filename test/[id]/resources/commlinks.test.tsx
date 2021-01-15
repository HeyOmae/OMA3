import { commlinkData } from "@/data/electronics"
import CommlinkPage from "@/pages/[id]/resources/commlinks"
import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"

describe("Commlink Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should by able to buy and sell commlinks",
    testBuyAndSellGear(CommlinkPage, commlinkData),
  )
})
