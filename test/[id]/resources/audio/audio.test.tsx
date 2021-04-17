import AudioPage from "@/pages/[id]/resources/audio"
import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"
import { audio as audioData } from "@/data/audio"

describe("audio page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell audio devices",
    testBuyAndSellGear(AudioPage, audioData),
  )
})
