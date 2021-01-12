import meleeData from "@/data/melee"
import { GearWeaponMelee } from "@/types/Resources"
import { addMeleeTableConfig, removeMeleeTableConfig } from "./meleeTableConfig"
import { GearPageTemplate } from "../GearPageTemplate"

export default () => (
  <GearPageTemplate<GearWeaponMelee>
    gearLabel="Melee Weapons"
    resourceKey="melee"
    addGearTableConfig={addMeleeTableConfig}
    listOfGear={meleeData}
    removeGearTableConfig={removeMeleeTableConfig}
  />
)
