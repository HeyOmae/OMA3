import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import electronicAccessoriesPage from "@/pages/[id]/resources/eaccessories"
import { electronicAccessoriesData } from "@/data/electronics"

describe("electronicAccessories page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell electronic accessories",
    expectToBuyAndSellGear(
      electronicAccessoriesPage,
      electronicAccessoriesData,
    ),
  )
})
