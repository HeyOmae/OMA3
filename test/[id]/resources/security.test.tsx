import { setupIndexedDB, testBuyAndSellGear } from "@/test/testUtils"
import SecurityPage from "@/pages/[id]/resources/security/[securityType]"
import * as securityGear from "@/data/security"

describe("security gear pages", () => {
  beforeAll(setupIndexedDB)
  Object.entries(securityGear).forEach(([securityGearName, gear]) => {
    describe(`${securityGearName} page`, () => {
      it(
        `should be able to buy and sell ${securityGearName}`,
        testBuyAndSellGear(SecurityPage, gear, {
          securityType: securityGearName,
        }),
      )
    })
  })
})
