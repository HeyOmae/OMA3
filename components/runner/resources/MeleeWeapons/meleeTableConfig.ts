import { GearWeaponMelee } from "@/types/Resources"
import {
  Columns,
  gearTableConfigOptions,
  gearMeleeTableConfigOption,
} from "../GearTable"

export const baseMeleeTableConfig: Columns<GearWeaponMelee>[] = [
  gearTableConfigOptions.name,
  gearMeleeTableConfigOption.dv,
  gearMeleeTableConfigOption.ar,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export const addMeleeTableConfig: Columns<GearWeaponMelee>[] = [
  gearTableConfigOptions.buy,
  ...baseMeleeTableConfig,
]
export const removeMeleeTableConfig: Columns<GearWeaponMelee>[] = [
  gearTableConfigOptions.sell,
  ...baseMeleeTableConfig,
]
