import { sensorMods } from "@/data/mods"
import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"
import SensorModPage from "@/pages/[id]/resources/sensor/[gearIndex]"

describe("Sensor Mod Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell sensor devices",
    testBuyAndSellGear(SensorModPage, sensorMods),
  )
})
