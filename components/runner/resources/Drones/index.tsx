import { drones } from "@/data/drones"

import { GearPageTemplate } from "../GearPageTemplate"
import { buyGearDronesCols, sellGearDronesCols } from "../util"

const Drones = () => (
  <GearPageTemplate
    gearLabel="Drones"
    resourceKey="drones"
    listOfGear={drones}
    addGearTableConfig={buyGearDronesCols}
    removeGearTableConfig={sellGearDronesCols}
  />
)
export default Drones
