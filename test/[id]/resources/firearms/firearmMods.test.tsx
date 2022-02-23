import { mods } from "@/data/firearms"
import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import FirearmModPage from "@/pages/[id]/resources/firearms/[gearIndex]"

describe("Firearm Mod Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell firearm mods",
    expectToBuyAndSellGear(FirearmModPage, mods),
  )
})
