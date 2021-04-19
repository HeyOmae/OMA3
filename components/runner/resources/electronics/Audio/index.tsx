import { audio } from "@/data/audio"
import { GearModdableRated } from "@/types/Resources"
import { FC } from "react"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buySensorCols as buyCols, sellSensorCols as sellCols } from "../utils"

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
