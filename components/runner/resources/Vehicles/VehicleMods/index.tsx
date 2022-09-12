import { mods } from "@/data/vehicles"
import { GearDroneMod } from "@/types/Resources"
import { GearModPageTemplate } from "../../GearPageTemplate/GearModPageTemplate"
import { buyDroneModCols, sellDroneModCols } from "../../util"

const previousPath = { categoryPath: "vehicles", label: "Vehicles" }

const VehicleMods = () => (
  <GearModPageTemplate<GearDroneMod>
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
