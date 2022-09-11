import { mods } from "@/data/cyberware"
import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import CyberwareModPage from "@/pages/[id]/resources/cyberware/[gearIndex]"

describe("Cyberware Mod Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell cyberware mods",
    expectToBuyAndSellGear(CyberwareModPage, mods),
  )
})
