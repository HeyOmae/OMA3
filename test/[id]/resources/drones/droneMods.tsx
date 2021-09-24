import { mods } from "@/data/vehicles"
import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import DroneModPage from "@/pages/[id]/resources/drones/[gearIndex]"

describe("Drone Mod Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell imaging devices",
    expectToBuyAndSellGear(DroneModPage, mods),
  )
})
