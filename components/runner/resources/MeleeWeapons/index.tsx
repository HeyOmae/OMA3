import meleeData from "@/data/melee"
import { GearWeapon } from "@/types/Resources"
import { addMeleeTableConfig, removeMeleeTableConfig } from "./meleeTableConfig"
import { GearPageTemplate } from "../GearPageTemplate"

const MeleeWeapons = () => (
  <GearPageTemplate<GearWeapon>
    gearLabel="Melee Weapons"
    resourceKey="melee"
    addGearTableConfig={addMeleeTableConfig}
    listOfGear={meleeData}
    removeGearTableConfig={removeMeleeTableConfig}
  />
)

export default MeleeWeapons
