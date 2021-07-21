import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import MagicGearPage from "@/pages/[id]/resources/magic/[gearType]"
import * as magicGear from "@/data/magicGear"

describe("security gear pages", () => {
  beforeAll(setupIndexedDB)
  Object.entries(magicGear).forEach(([magicGearName, gear]) => {
    describe(`${magicGearName} page`, () => {
      it(
        `should be able to buy and sell ${magicGearName}`,
        expectToBuyAndSellGear(MagicGearPage, gear, {
          gearType: magicGearName,
        }),
      )
    })
  })
})
