import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import dronePage from "@/pages/[id]/resources/drones"
import { drones } from "@/data/drones"

describe("drones page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell electronic accessories",
    expectToBuyAndSellGear(dronePage, drones),
  )
})
