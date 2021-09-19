import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import vehiclePage from "@/pages/[id]/resources/vehicles"
import { vehicles } from "@/data/vehicles"

describe("vehicles page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell electronic accessories",
    expectToBuyAndSellGear(vehiclePage, vehicles),
  )
})
