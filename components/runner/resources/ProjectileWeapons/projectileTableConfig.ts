import { GearProjectile } from "@/types/Resources"
import { gearTableConfigOptions, Columns } from "../util"
import { baseMeleeTableConfig } from "../MeleeWeapons/meleeTableConfig"

const baseProjectileTableConfig = baseMeleeTableConfig

export const addProjectileTableConfig: Columns<GearProjectile>[] = [
  gearTableConfigOptions.buy,
  ...baseProjectileTableConfig,
]

export const removeProjectileTableConfig: Columns<GearProjectile>[] = [
  gearTableConfigOptions.sell,
  ...baseProjectileTableConfig,
]
