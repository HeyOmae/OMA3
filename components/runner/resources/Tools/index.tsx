import { tools } from "@/data/tools"
import { GearTools } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import { Columns, gearTableConfigOptions } from "../util"

const buyCols: Columns<GearTools>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const sellCols: Columns<GearTools>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export default () => (
  <GearPageTemplate
    gearLabel="Tools"
    resourceKey="tools"
    listOfGear={tools}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)
