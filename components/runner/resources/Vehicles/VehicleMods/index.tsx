import { mods } from "@/data/vehicles"
import { Gear } from "@/types/Resources"
import { GearModPageTemplate } from "../../GearPageTemplate/GearModPageTemplate"
import { buyDroneModCols, sellDroneModCols } from "../../util"

const previousPath = { categoryPath: "vehicles", label: "Vehicles" }

const VehicleMods = () => (
  <GearModPageTemplate<Gear>
    gearLabel="Vehicle Mods"
    resourceKey="vehicles"
    previousPath={previousPath}
    listOfGear={mods}
    addGearTableConfig={buyDroneModCols}
    removeGearTableConfig={sellDroneModCols}
    CapacityDisplay={false}
  />
)

export default VehicleMods
