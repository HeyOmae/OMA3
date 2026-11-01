import { biotech } from "@/data/biotech"
import { Gear } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyGearWithRatingCol, sellGearWithRatingCol } from "../util"

const Biotech = () => (
  <GearPageTemplate<Gear>
    gearLabel="Biotech"
    resourceKey="biotech"
    listOfGear={biotech}
    addGearTableConfig={buyGearWithRatingCol}
    removeGearTableConfig={sellGearWithRatingCol}
  />
)

export default Biotech
