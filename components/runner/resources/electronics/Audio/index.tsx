import { audio } from "@/data/audio"

import { FC } from "react"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buySensorCols as buyCols, sellSensorCols as sellCols } from "../utils"

const Audio: FC = () => (
  <GearPageTemplate
    gearLabel="Audio Devices"
    resourceKey="audio"
    listOfGear={audio}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)

export default Audio
