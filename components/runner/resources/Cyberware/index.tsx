import { cyberware } from "@/data/cyberware"
import { GearCyberware } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyAugmentationCols, sellAugmentationCols } from "../util"

const Cyberware = () => (
  <GearPageTemplate<GearCyberware>
    gearLabel="Cyberware"
    resourceKey="cyberware"
    listOfGear={cyberware}
    addGearTableConfig={buyAugmentationCols}
    removeGearTableConfig={sellAugmentationCols}
    displayEssence
  />
)

export default Cyberware
