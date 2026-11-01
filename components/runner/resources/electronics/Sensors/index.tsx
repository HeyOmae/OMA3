import { sensors } from "@/data/sensors"
import { Gear } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buySensorCols, sellSensorCols } from "../utils"

const Sensors = () => (
  <GearPageTemplate<Gear>
    gearLabel="Sensors"
    resourceKey="sensor"
    listOfGear={sensors}
    addGearTableConfig={buySensorCols}
    removeGearTableConfig={sellSensorCols}
  />
)

export default Sensors
