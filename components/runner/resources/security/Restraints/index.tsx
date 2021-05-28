import { restraints } from "@/data/security"
import { GearTyped } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buyGearWithoutRatingCol, sellGearWithoutRatingCol } from "../../util"

const Restraints = () => (
  <GearPageTemplate<GearTyped>
    gearLabel="Restraints"
    resourceKey="restraints"
    listOfGear={restraints}
    addGearTableConfig={buyGearWithoutRatingCol}
    removeGearTableConfig={sellGearWithoutRatingCol}
  />
)

export default Restraints
