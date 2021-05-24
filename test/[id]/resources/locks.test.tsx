import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"
import LocksPage from "@/pages/[id]/resources/locks"
import { locks } from "@/data/security"

describe("Locks page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell locks",
    testBuyAndSellGear(LocksPage, locks),
  )
})
