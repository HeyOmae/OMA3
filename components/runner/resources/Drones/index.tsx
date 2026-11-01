import { drones } from "@/data/drones"
import { GearVehicle } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyGearDronesCols, sellGearDronesCols } from "../util"

const Drones = () => (
  <GearPageTemplate<GearVehicle>
    gearLabel="Drones"
    resourceKey="drones"
    listOfGear={drones}
    addGearTableConfig={buyGearDronesCols}
    removeGearTableConfig={sellGearDronesCols}
  />
)
export default Drones
