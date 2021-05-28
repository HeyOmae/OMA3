import { restraints } from "@/data/security"
import { setupIndexedDB } from "@/test/testUtils"
import { TestGeneralGearWithoutRating } from "../../util"
import Restraints from "./index"

describe("<Restraints/>", () => {
  beforeAll(setupIndexedDB)
  it(
    "should display Restraints Gear stats",
    TestGeneralGearWithoutRating(Restraints, restraints),
  )
})
