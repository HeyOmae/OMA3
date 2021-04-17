import { audio } from "@/data/audio"
import { GearModdableRated } from "@/types/Resources"
import { FC } from "react"
import { GearPageTemplate } from "../../GearPageTemplate"
import {
  Columns,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
} from "../../util"

const buyCols: Columns<GearModdableRated>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.setRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const sellCols: Columns<GearModdableRated>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  // gearTableConfigOptions.mod,
]

const Audio: FC = () => (
  <GearPageTemplate<GearModdableRated>
    gearLabel="Audio Devices"
    resourceKey="audio"
    listOfGear={audio}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)

export default Audio
