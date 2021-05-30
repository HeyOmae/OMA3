import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"
import RestraintsPage from "@/pages/[id]/resources/restraints"
import { restraints } from "@/data/security"

describe("Restraints page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell restraints",
    testBuyAndSellGear(RestraintsPage, restraints),
  )
})
