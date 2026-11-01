import { cyberware } from "@/data/cyberware"

import { GearPageTemplate } from "../GearPageTemplate"
import { buyAugmentationCols, sellAugmentationCols } from "../util"

const Cyberware = () => (
  <GearPageTemplate
    gearLabel="Cyberware"
    resourceKey="cyberware"
    listOfGear={cyberware}
    addGearTableConfig={buyAugmentationCols}
    removeGearTableConfig={sellAugmentationCols}
    displayEssence
  />
)

export default Cyberware
