import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import OtherElectronicsPage from "@/pages/[id]/resources/other-electronics"
import { otherElectronics } from "@/data/electronics"

describe("Other Electronics page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell other electronic gear",
    expectToBuyAndSellGear(OtherElectronicsPage, otherElectronics),
  )
})
