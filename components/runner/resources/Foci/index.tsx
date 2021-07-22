import { foci } from "@/data/focus"
import { GearFocus } from "@/types/Resources"
import React, { FC } from "react"
import { GearPageTemplate } from "../GearPageTemplate"
import { gearMagicConfigOptions, gearTableConfigOptions } from "../util"

const buyCol = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearMagicConfigOptions.choice,
  gearMagicConfigOptions.setRating,
  gearMagicConfigOptions.karmaCost,
  gearMagicConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const Foci: FC = () => (
  <GearPageTemplate<GearFocus>
    gearLabel="Foci"
    resourceKey="foci"
    listOfGear={foci}
    addGearTableConfig={buyCol}
    removeGearTableConfig={[]}
  />
)
export default Foci
