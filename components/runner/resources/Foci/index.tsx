import { foci } from "@/data/focus"

import { FC } from "react"
import { GearPageTemplate } from "../GearPageTemplate"
import {
  gearMagicConfigOptions,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
} from "../util"

const buyCol = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearMagicConfigOptions.choice,
  gearMagicConfigOptions.setRating,
  gearMagicConfigOptions.karmaCost,
  gearMagicConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const sellCol = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  gearMagicConfigOptions.karmaCost,
  gearMagicConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const Foci: FC = () => (
  <GearPageTemplate
    gearLabel="Foci"
    resourceKey="foci"
    listOfGear={foci}
    addGearTableConfig={buyCol}
    removeGearTableConfig={sellCol}
  />
)
export default Foci
