import { sensors } from "@/data/sensors"
import { GearModdableRated } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buySensorCols, sellSensorCols } from "../utils"

const Sensors = () => (
  <GearPageTemplate<GearModdableRated>
    gearLabel="Sensors"
    resourceKey="sensor"
    listOfGear={sensors}
    addGearTableConfig={buySensorCols}
    removeGearTableConfig={sellSensorCols}
  />
)

export default Sensors
