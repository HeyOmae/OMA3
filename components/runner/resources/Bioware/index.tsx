import { bioware } from "@/data/bioware"
import { GearBioware } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyAugmentationCols, sellAugmentationCols } from "../util"

const Bioware = () => (
  <GearPageTemplate<GearBioware>
    gearLabel="Bioware"
    resourceKey="bioware"
    listOfGear={bioware}
    addGearTableConfig={buyAugmentationCols}
    removeGearTableConfig={sellAugmentationCols}
    displayEssence
  />
)

export default Bioware
