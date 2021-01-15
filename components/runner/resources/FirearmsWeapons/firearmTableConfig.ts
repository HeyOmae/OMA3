import { GearWeaponFireArms } from "@/types/Resources"
import {
  gearMeleeTableConfigOption,
  gearTableConfigOptions,
  Columns,
} from "../util"

const baseFirearmsTableConfig: Columns<GearWeaponFireArms>[] = [
  gearTableConfigOptions.name,
  gearMeleeTableConfigOption.dv,
  {
    label: "Modes",
    display: ({ weapon }) => weapon.mode,
  },
  gearMeleeTableConfigOption.ar,
  {
    label: "Ammo",
    display: ({ weapon }) => weapon.ammo,
  },
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export const addFirearmsTableConfig: Columns<GearWeaponFireArms>[] = [
  gearTableConfigOptions.buy,
  ...baseFirearmsTableConfig,
]

export const removeFirearmsTableConfig: Columns<GearWeaponFireArms>[] = [
  gearTableConfigOptions.sell,
  ...baseFirearmsTableConfig,
]
