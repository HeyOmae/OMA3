import { locks } from "@/data/security"
import { GearTyped } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buyGearWithRatingCol, sellGearWithRatingCol } from "../utils"

const Locks = () => (
  <GearPageTemplate<GearTyped>
    gearLabel="Locks"
    resourceKey="locks"
    listOfGear={locks}
    addGearTableConfig={buyGearWithRatingCol}
    removeGearTableConfig={sellGearWithRatingCol}
  />
)

export default Locks
