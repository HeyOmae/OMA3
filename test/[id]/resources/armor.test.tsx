import armorData from "@/data/armor"
import ArmorPage from "@/pages/[id]/resources/armor"
import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"

describe("Armor Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell armor",
    testBuyAndSellGear(ArmorPage, armorData),
  )
})
