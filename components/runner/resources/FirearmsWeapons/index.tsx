import FirearmsData from "@/data/firearms"
import { GearWeaponFireArms } from "@/types/Resources"
import {
  addFirearmsTableConfig,
  removeFirearmsTableConfig,
} from "./FirearmsTable"
import { GearPageTemplate } from "../GearPageTemplate"

export default () => (
  <GearPageTemplate<GearWeaponFireArms>
    gearLabel="Firearms Weapons"
    resourceKey="firearms"
    addGearTableConfig={addFirearmsTableConfig}
    listOfGear={FirearmsData}
    removeGearTableConfig={removeFirearmsTableConfig}
  />
)
