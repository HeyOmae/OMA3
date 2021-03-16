import ImagingPage from "@/pages/[id]/resources/imaging"
import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"
import { imaging as imagingData } from "@/data/imaging"

describe("imaging page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell imaging devices",
    testBuyAndSellGear(ImagingPage, imagingData),
  )
})
