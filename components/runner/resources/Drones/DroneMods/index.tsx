import { mods } from "@/data/vehicles"
import { Gear } from "@/types/Resources"
import { GearModPageTemplate } from "../../GearPageTemplate/GearModPageTemplate"
import { buyDroneModCols, sellDroneModCols } from "../../util"

const previousPath = { categoryPath: "drones", label: "Drones" }

const DroneMods = () => (
  <GearModPageTemplate<Gear>
    resourceKey="drones"
    previousPath={previousPath}
    listOfGear={mods}
    addGearTableConfig={buyDroneModCols}
    removeGearTableConfig={sellDroneModCols}
    CapacityDisplay={false}
  />
)

export default DroneMods
