import { imagingMods } from "@/data/mods"
import { GearMod } from "@/types/Resources"
import { GearPageTemplate } from "../../../GearPageTemplate"
import {
  Columns,
  gearTableConfigOptions,
  gearCapacityConfigOption,
} from "../../../util"

type ImagingModCols = Columns<GearMod>
const baseCols: ImagingModCols[] = [
  gearTableConfigOptions.name,
  gearCapacityConfigOption,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]
export const buyCols: ImagingModCols[] = [
    gearTableConfigOptions.buy,
    ...baseCols,
  ],
  sellCols: ImagingModCols[] = [gearTableConfigOptions.sell, ...baseCols]

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
