import { tools } from "@/data/tools"
import { Gear } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import {
  Columns,
  gearTableConfigOptions,
  gearToolsConfigOptionSetSkill,
} from "../util"

const buyCols: Columns<Gear>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearToolsConfigOptionSetSkill,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

const sellCols: Columns<Gear>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

const Tools = () => (
  <GearPageTemplate
    gearLabel="Tools"
    resourceKey="tools"
    listOfGear={tools}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)
export default Tools
