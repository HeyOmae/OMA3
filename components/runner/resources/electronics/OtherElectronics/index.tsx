import { otherElectronics } from "@/data/electronics"
import { GearTyped } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import {
  Columns,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
} from "../../util"

type ElectricCols = Columns<GearTyped>[]

const buyCols: ElectricCols = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.category,
  gearRatingTableConfigOption.setRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const sellCols: ElectricCols = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.category,
  gearRatingTableConfigOption.displayRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const OtherElectronics = () => (
  <GearPageTemplate<GearTyped>
    gearLabel="Other Electronics"
    resourceKey="otherElectronics"
    listOfGear={otherElectronics}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)

export default OtherElectronics
