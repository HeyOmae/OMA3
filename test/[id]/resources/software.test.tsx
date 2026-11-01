import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import SoftwarePage from "@/pages/[id]/resources/software"
import { softwareData } from "@/data/electronics"

describe("Software page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell software",
    expectToBuyAndSellGear(SoftwarePage, softwareData),
  )
})
