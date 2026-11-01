import { vehicles } from "@/data/vehicles"
import { GearVehicle } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyGearVehiclesCols, sellGearVehiclesCols } from "../util"

const Vehicles = () => (
  <GearPageTemplate<GearVehicle>
    gearLabel="Vehicles"
    resourceKey="vehicles"
    listOfGear={vehicles}
    addGearTableConfig={buyGearVehiclesCols}
    removeGearTableConfig={sellGearVehiclesCols}
  />
)
export default Vehicles
