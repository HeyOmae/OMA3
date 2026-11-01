import { GearFirearm } from "@/types/Resources"
import {
  gearMeleeTableConfigOption,
  gearTableConfigOptions,
  Columns,
  gearModableTableConfigOptions,
} from "../util"

const baseFirearmsTableConfig: Columns<GearFirearm>[] = [
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

export const addFirearmsTableConfig: Columns<GearFirearm>[] = [
  gearTableConfigOptions.buy,
  ...baseFirearmsTableConfig,
]

export const removeFirearmsTableConfig: Columns<GearFirearm>[] = [
  gearTableConfigOptions.sell,
  ...baseFirearmsTableConfig,
  gearModableTableConfigOptions.alwaysMod,
]
