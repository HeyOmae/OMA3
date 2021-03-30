import { imagingMods } from "@/data/mods"
import { GearMod } from "@/types/Resources"
import { GearPageTemplate } from "../../../GearPageTemplate"
import { Columns, gearTableConfigOptions } from "../../../util"

type ImagingModCols = Columns<GearMod>

const buyCols: ImagingModCols[] = [gearTableConfigOptions.name]
const sellCols = buyCols

const ImagingMods = () => (
  <GearPageTemplate<GearMod>
    gearLabel="Imaging Mods"
    resourceKey="imagingMods"
    listOfGear={imagingMods}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)

export default ImagingMods
