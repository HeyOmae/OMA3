import { drones } from "@/data/drones"
import { GearDrones } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyGearDronesCols, sellGearDronesCols } from "../util"

const Drones = () => (
  <GearPageTemplate<GearDrones>
    gearLabel="Drones"
    resourceKey="drones"
    listOfGear={drones}
    addGearTableConfig={buyGearDronesCols}
    removeGearTableConfig={sellGearDronesCols}
  />
)
export default Drones
