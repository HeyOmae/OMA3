import FirearmsData from "@/data/firearms"

import {
  addFirearmsTableConfig,
  removeFirearmsTableConfig,
} from "./firearmTableConfig"
import { GearPageTemplate } from "../GearPageTemplate"

const FireArmsWeapons = () => (
  <GearPageTemplate
    gearLabel="Firearms Weapons"
    resourceKey="firearms"
    addGearTableConfig={addFirearmsTableConfig}
    listOfGear={FirearmsData}
    removeGearTableConfig={removeFirearmsTableConfig}
  />
)
export default FireArmsWeapons
