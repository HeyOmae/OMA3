import { drones } from "@/data/drones"
import { GearDrones } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import {
  Columns,
  gearDroneTableConfigOptions,
  gearTableConfigOptions,
} from "../util"

const buyCols: Columns<GearDrones>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearDroneTableConfigOptions.type,
  gearDroneTableConfigOptions.handling,
  gearDroneTableConfigOptions.accel,
  gearDroneTableConfigOptions.speedInt,
  gearDroneTableConfigOptions.topSpeed,
  gearDroneTableConfigOptions.body,
  gearDroneTableConfigOptions.armor,
  gearDroneTableConfigOptions.pilot,
  gearDroneTableConfigOptions.sensor,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const sellCols: Columns<GearDrones>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearDroneTableConfigOptions.type,
  gearDroneTableConfigOptions.handling,
  gearDroneTableConfigOptions.accel,
  gearDroneTableConfigOptions.speedInt,
  gearDroneTableConfigOptions.topSpeed,
  gearDroneTableConfigOptions.body,
  gearDroneTableConfigOptions.armor,
  gearDroneTableConfigOptions.pilot,
  gearDroneTableConfigOptions.sensor,
  gearTableConfigOptions.cost,
]

const Drones = () => (
  <GearPageTemplate
    gearLabel="Drones"
    resourceKey="drones"
    listOfGear={drones}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)
export default Drones
