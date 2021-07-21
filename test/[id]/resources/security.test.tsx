import { setupIndexedDB, expectToBuyAndSellGear } from "@/test/testUtils"
import SecurityPage from "@/pages/[id]/resources/security/[gearType]"
import * as securityGear from "@/data/security"

describe("security gear pages", () => {
  beforeAll(setupIndexedDB)
  Object.entries(securityGear).forEach(([securityGearName, gear]) => {
    describe(`${securityGearName} page`, () => {
      it(
        `should be able to buy and sell ${securityGearName}`,
        expectToBuyAndSellGear(SecurityPage, gear, {
          gearType: securityGearName,
        }),
      )
    })
  })
})
