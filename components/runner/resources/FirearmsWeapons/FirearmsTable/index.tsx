import { GearWeaponFireArms } from "../../../../../types/Resources"
import { AddFirearmsButton } from "./AddFirearmsButton"
import { RemoveFirearmsButton } from "./RemoveFirearmsButton"
import {
  Columns,
  gearMeleeTableConfigOption,
  gearTableConfigOptions,
} from "../../GearTable"

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
  {
    label: "Buy",
    display: (weapon) => <AddFirearmsButton gear={weapon} />,
  },
  ...baseFirearmsTableConfig,
]

export const removeFirearmsTableConfig: Columns<GearWeaponFireArms>[] = [
  {
    label: "Sell",
    display: (weapon, index) => (
      <RemoveFirearmsButton gear={weapon} index={index} />
    ),
  },
  ...baseFirearmsTableConfig,
]
