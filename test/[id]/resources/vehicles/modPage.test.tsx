import { mods } from "@/data/vehicles"
import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import VehicleModPage from "@/pages/[id]/resources/vehicles/[gearIndex]"

describe("Imaging Mod Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell imaging devices",
    expectToBuyAndSellGear(VehicleModPage, mods),
  )
})
