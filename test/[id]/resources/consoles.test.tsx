import { riggerConsoleData } from "@/data/electronics"
import RiggerConsolePage from "@/pages/[id]/resources/consoles"
import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"

describe("Rigger Console Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should by able to buy and sell rigger consoles",
    expectToBuyAndSellGear(RiggerConsolePage, riggerConsoleData),
  )
})
