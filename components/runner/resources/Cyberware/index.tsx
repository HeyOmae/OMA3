import { cyberware } from "@/data/cyberware"
import { GearCyberware } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import {
  Columns,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
} from "../util"

const buyCyberwareCol: Columns<GearCyberware>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.setRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const sellCyberwareCol: Columns<GearCyberware>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  gearTableConfigOptions.cost,
]

const Cyberware = () => (
  <GearPageTemplate<GearCyberware>
    gearLabel="Cyberware"
    resourceKey="cyberware"
    listOfGear={cyberware}
    addGearTableConfig={buyCyberwareCol}
    removeGearTableConfig={sellCyberwareCol}
    displayEssence
  />
)

export default Cyberware
