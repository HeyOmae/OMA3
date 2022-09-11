import { mods } from "@/data/cyberware"
import { GearCyberware } from "@/types/Resources"
import { GearModPageTemplate } from "../../GearPageTemplate/GearModPageTemplate"
import {
  Columns,
  gearCapacityConfigOption,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
} from "../../util"

const previousPath = { categoryPath: "cyberware", label: "Cyberware" }

const buyCyberwareModCols: Columns<GearCyberware>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.setRating,
  gearCapacityConfigOption,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]
const sellCyberwareModCols: Columns<GearCyberware>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  gearCapacityConfigOption,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const CyberwareMods = () => {
  return (
    <GearModPageTemplate<GearCyberware>
      gearLabel="Cyberware Mods"
      resourceKey="cyberware"
      previousPath={previousPath}
      listOfGear={mods}
      addGearTableConfig={buyCyberwareModCols}
      removeGearTableConfig={sellCyberwareModCols}
    />
  )
}

export default CyberwareMods
