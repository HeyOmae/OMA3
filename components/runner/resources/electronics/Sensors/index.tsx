import { sensors } from "@/data/sensors"

import { GearPageTemplate } from "../../GearPageTemplate"
import { buySensorCols, sellSensorCols } from "../utils"

const Sensors = () => (
  <GearPageTemplate
    gearLabel="Sensors"
    resourceKey="sensor"
    listOfGear={sensors}
    addGearTableConfig={buySensorCols}
    removeGearTableConfig={sellSensorCols}
  />
)

export default Sensors
