import { imagingMods } from "@/data/mods"
import { Gear } from "@/types/Resources"
import { GearModPageTemplate } from "../../../GearPageTemplate/GearModPageTemplate"
import {
  Columns,
  gearTableConfigOptions,
  gearCapacityConfigOption,
} from "../../../util"

type ImagingModCols = Columns<Gear>
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

const previousPath = { categoryPath: "imaging", label: "Imaging" }

const ImagingMods = () => (
  <GearModPageTemplate<Gear>
    gearLabel="Imaging Mods"
    resourceKey="imaging"
    previousPath={previousPath}
    listOfGear={imagingMods}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)

export default ImagingMods
