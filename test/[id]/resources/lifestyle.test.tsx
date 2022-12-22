import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import LifestylePage from "@/pages/[id]/resources/lifestyle"
import { lifestyles } from "@/data/lifestyle"

describe("lifestyle page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell electronic accessories",
    expectToBuyAndSellGear(LifestylePage, lifestyles),
  )
})
