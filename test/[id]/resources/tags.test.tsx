import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import TagPage from "@/pages/[id]/resources/tags"
import { tagsData } from "@/data/electronics"

describe("RFID Tags page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell RFIDs",
    expectToBuyAndSellGear(TagPage, tagsData),
  )
})
