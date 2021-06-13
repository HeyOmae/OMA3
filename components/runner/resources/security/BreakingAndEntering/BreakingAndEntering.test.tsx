import { bne } from "@/data/security"
import { setupIndexedDB } from "@/test/testUtils"
import { TestGeneralGearWithRating } from "../../util"
import BreakingAndEntering from "./index"

describe("<BreakingAndEntering/>", () => {
  beforeAll(setupIndexedDB)
  it(
    "should display Breaking And Entering Gear stats",
    TestGeneralGearWithRating(BreakingAndEntering, bne),
  )
})
