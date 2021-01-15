import { GearWeaponsProjectile } from "@/types/Resources"
import { gearTableConfigOptions, Columns } from "../util"
import { baseMeleeTableConfig } from "../MeleeWeapons/meleeTableConfig"

const baseProjectileTableConfig = baseMeleeTableConfig

export const addProjectileTableConfig: Columns<GearWeaponsProjectile>[] = [
  gearTableConfigOptions.buy,
  ...baseProjectileTableConfig,
]

export const removeProjectileTableConfig: Columns<GearWeaponsProjectile>[] = [
  gearTableConfigOptions.sell,
  ...baseProjectileTableConfig,
]
