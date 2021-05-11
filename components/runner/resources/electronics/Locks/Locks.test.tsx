import { locks } from "@/data/security"
import { setupIndexedDB } from "@/test/testUtils"
import { TestGeneralGearWithRating } from "../utils"
import Locks from "./index"

describe("<Locks/>", () => {
  beforeAll(setupIndexedDB)
  it("should display Locks Gear stats", TestGeneralGearWithRating(Locks, locks))
})
