import { biotech } from "@/data/biotech"
import { GearTyped } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyGearWithRatingCol, sellGearWithRatingCol } from "../util"

const Biotech = () => (
  <GearPageTemplate<GearTyped>
    gearLabel="Biotech"
    resourceKey="biotech"
    listOfGear={biotech}
    addGearTableConfig={buyGearWithRatingCol}
    removeGearTableConfig={sellGearWithRatingCol}
  />
)

export default Biotech
