import { mods } from "@/data/vehicles"
import { GearDroneMod } from "@/types/Resources"
import { GearModPageTemplate } from "../../GearPageTemplate/GearModPageTemplate"
import { buyDroneModCols, sellDroneModCols } from "../../util"

const previousPath = { categoryPath: "drones", label: "Drones" }

const DroneMods = () => (
  <GearModPageTemplate<GearDroneMod>
    gearLabel="Drone Mods"
    resourceKey="drones"
    previousPath={previousPath}
    listOfGear={mods}
    addGearTableConfig={buyDroneModCols}
    removeGearTableConfig={sellDroneModCols}
    hasCapacity={false}
  />
)

export default DroneMods
