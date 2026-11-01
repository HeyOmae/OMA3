import meleeData from "@/data/melee"

import { addMeleeTableConfig, removeMeleeTableConfig } from "./meleeTableConfig"
import { GearPageTemplate } from "../GearPageTemplate"

const MeleeWeapons = () => (
  <GearPageTemplate
    gearLabel="Melee Weapons"
    resourceKey="melee"
    addGearTableConfig={addMeleeTableConfig}
    listOfGear={meleeData}
    removeGearTableConfig={removeMeleeTableConfig}
  />
)

export default MeleeWeapons
