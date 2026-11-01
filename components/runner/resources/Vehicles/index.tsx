import { vehicles } from "@/data/vehicles"

import { GearPageTemplate } from "../GearPageTemplate"
import { buyGearVehiclesCols, sellGearVehiclesCols } from "../util"

const Vehicles = () => (
  <GearPageTemplate
    gearLabel="Vehicles"
    resourceKey="vehicles"
    listOfGear={vehicles}
    addGearTableConfig={buyGearVehiclesCols}
    removeGearTableConfig={sellGearVehiclesCols}
  />
)
export default Vehicles
