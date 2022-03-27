import { mods } from "@/data/armor"
import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import ArmorModPage from "@/pages/[id]/resources/armor/[gearIndex]"

describe("Armor Mod Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell armor mods",
    expectToBuyAndSellGear(ArmorModPage, mods),
  )
})
