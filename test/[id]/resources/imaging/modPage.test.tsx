import { imagingMods } from "@/data/mods"
import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"
import ImagingModPage from "@/pages/[id]/resources/imaging/[gearIndex]"

describe("Imaging Mod Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell imaging devices",
    testBuyAndSellGear(ImagingModPage, imagingMods),
  )
})
