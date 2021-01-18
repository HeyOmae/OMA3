import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"
import electronicAccessoriesPage from "@/pages/[id]/resources/eaccessories"
import { electronicAccessoriesData } from "@/data/electronics"

describe("electronicAccessories page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should by able to buy and sell electronic accessories",
    testBuyAndSellGear(electronicAccessoriesPage, electronicAccessoriesData),
  )
})
