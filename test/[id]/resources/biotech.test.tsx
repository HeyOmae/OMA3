import { biotech } from "@/data/biotech"
import BiotechPage from "@/pages/[id]/resources/biotech"
import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"

describe("Biotech Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should by able to buy and sell biotech gear",
    testBuyAndSellGear(BiotechPage, biotech),
  )
})
