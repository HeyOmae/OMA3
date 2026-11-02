import { otherElectronics } from "@/data/electronics"
import { Gear } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import {
  Columns,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
} from "../../util"

type ElectricCols = Columns<Gear>[]

const buyCols: ElectricCols = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.category,
  gearRatingTableConfigOption.setRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

const sellCols: ElectricCols = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.category,
  gearRatingTableConfigOption.displayRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

const OtherElectronics = () => (
  <GearPageTemplate
    gearLabel="Other Electronics"
    resourceKey="otherElectronics"
    listOfGear={otherElectronics}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)

export default OtherElectronics
