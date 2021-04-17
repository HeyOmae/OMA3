import { audioMods } from "@/data/mods"
import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"
import AudioModPage from "@/pages/[id]/resources/audio/[gearIndex]"

describe("Audio Mod Page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell audio devices",
    testBuyAndSellGear(AudioModPage, audioMods),
  )
})
