import ToolsPage from "@/pages/[id]/resources/tools"
import { tools } from "@/data/tools"
import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"

describe("Tools page", () => {
  beforeAll(setupIndexedDB)
  it(
    "should be able to buy and sell Tools",
    testBuyAndSellGear(ToolsPage, tools),
  )
})
