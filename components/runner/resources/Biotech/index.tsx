import { biotech } from "@/data/biotech"

import { GearPageTemplate } from "../GearPageTemplate"
import { buyGearWithRatingCol, sellGearWithRatingCol } from "../util"

const Biotech = () => (
  <GearPageTemplate
    gearLabel="Biotech"
    resourceKey="biotech"
    listOfGear={biotech}
    addGearTableConfig={buyGearWithRatingCol}
    removeGearTableConfig={sellGearWithRatingCol}
  />
)

export default Biotech
