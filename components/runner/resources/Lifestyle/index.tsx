import { GearPageTemplate } from "../GearPageTemplate"
import { lifestyles } from "@/data/lifestyle"
import { Columns, gearTableConfigOptions } from "../util"
import { Gear } from "@/types/Resources"

const buyLifestyleCols: Columns<Gear>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearTableConfigOptions.cost,
]

const sellLifestyleCol: Columns<Gear>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearTableConfigOptions.cost,
]

const LifeStyle = () => (
  <GearPageTemplate
    gearLabel="Life Styles"
    resourceKey="lifestyle"
    listOfGear={lifestyles}
    addGearTableConfig={buyLifestyleCols}
    removeGearTableConfig={sellLifestyleCol}
  />
)

export default LifeStyle
