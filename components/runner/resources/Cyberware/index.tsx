import { cyberware } from "@/data/cyberware"
import { GearCyberware } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyAugmentationCols, sellAugmentationCols } from "../util"

const cyberwareThatCanBeInstaled = cyberware.filter(({ useAs }) =>
  useAs.some((useage) => "essence" in useage),
)

const Cyberware = () => (
  <GearPageTemplate<GearCyberware>
    gearLabel="Cyberware"
    resourceKey="cyberware"
    listOfGear={cyberwareThatCanBeInstaled}
    addGearTableConfig={buyAugmentationCols}
    removeGearTableConfig={sellAugmentationCols}
    displayEssence
  />
)

export default Cyberware
