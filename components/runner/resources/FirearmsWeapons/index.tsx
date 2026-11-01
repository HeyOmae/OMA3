import FirearmsData from "@/data/firearms"
import { GearFirearm } from "@/types/Resources"
import {
  addFirearmsTableConfig,
  removeFirearmsTableConfig,
} from "./firearmTableConfig"
import { GearPageTemplate } from "../GearPageTemplate"

const FireArmsWeapons = () => (
  <GearPageTemplate<GearFirearm>
    gearLabel="Firearms Weapons"
    resourceKey="firearms"
    addGearTableConfig={addFirearmsTableConfig}
    listOfGear={FirearmsData}
    removeGearTableConfig={removeFirearmsTableConfig}
  />
)
export default FireArmsWeapons
