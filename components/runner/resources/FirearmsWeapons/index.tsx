import FirearmsData from "@/data/firearms"
import { GearWeaponFireArms } from "@/types/Resources"
import {
  addFirearmsTableConfig,
  removeFirearmsTableConfig,
} from "./firearmTableConfig"
import { GearPageTemplate } from "../GearPageTemplate"

const FireArmsWeapons = () => (
  <GearPageTemplate<GearWeaponFireArms>
    gearLabel="Firearms Weapons"
    resourceKey="firearms"
    addGearTableConfig={addFirearmsTableConfig}
    listOfGear={FirearmsData}
    removeGearTableConfig={removeFirearmsTableConfig}
  />
)
export default FireArmsWeapons
