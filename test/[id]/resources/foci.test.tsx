import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import fociPage from "@/pages/[id]/resources/foci"
import { foci } from "@/data/focus"

describe("foci page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell foci",
    expectToBuyAndSellGear(fociPage, foci),
  )
})
