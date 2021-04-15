import { imaging } from "@/data/imaging"
import { GearModdableRated } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import {
  Columns,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
} from "../../util"

type ImagingCols = Columns<GearModdableRated>[]

const buyCols: ImagingCols = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.setRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const sellCols: ImagingCols = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.mod,
]

const Imaging = () => (
  <GearPageTemplate<GearModdableRated>
    gearLabel="Imaging"
    resourceKey="imaging"
    listOfGear={imaging}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)

export default Imaging
