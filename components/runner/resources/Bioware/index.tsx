import { bioware } from "@/data/bioware"

import { GearPageTemplate } from "../GearPageTemplate"
import { buyAugmentationCols, sellAugmentationCols } from "../util"

const Bioware = () => (
  <GearPageTemplate
    gearLabel="Bioware"
    resourceKey="bioware"
    listOfGear={bioware}
    addGearTableConfig={buyAugmentationCols}
    removeGearTableConfig={sellAugmentationCols}
    displayEssence
  />
)

export default Bioware
