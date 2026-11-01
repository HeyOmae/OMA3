import { GearWeapon } from "@/types/Resources"
import {
  gearTableConfigOptions,
  gearMeleeTableConfigOption,
  Columns,
} from "../util"

export const baseMeleeTableConfig: Columns<GearWeapon>[] = [
  gearTableConfigOptions.name,
  gearMeleeTableConfigOption.dv,
  gearMeleeTableConfigOption.ar,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.reference,
  gearTableConfigOptions.cost,
]

export const addMeleeTableConfig: Columns<GearWeapon>[] = [
  gearTableConfigOptions.buy,
  ...baseMeleeTableConfig,
]
export const removeMeleeTableConfig: Columns<GearWeapon>[] = [
  gearTableConfigOptions.sell,
  ...baseMeleeTableConfig,
]
