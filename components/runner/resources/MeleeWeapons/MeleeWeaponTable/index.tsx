import { GearWeaponMelee } from "../../../../../types/Resources"
import { AddMeleeWeaponButton } from "./AddMeleeWeaponButton"
import { RemoveMeleeWeaponButton } from "./RemoveMeleeWeaponButton"
import {
  Columns,
  gearTableConfigOptions,
  gearMeleeTableConfigOption,
} from "../../GearTable"

export const baseMeleeTableConfig: Columns<GearWeaponMelee>[] = [
  gearTableConfigOptions.name,
  gearMeleeTableConfigOption.dv,
  gearMeleeTableConfigOption.ar,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export const addMeleeTableConfig: Columns<GearWeaponMelee>[] = [
  {
    display: (weapon) => <AddMeleeWeaponButton gear={weapon} />,
    label: "Buy",
  },
  ...baseMeleeTableConfig,
]
export const removeMeleeTableConfig: Columns<GearWeaponMelee>[] = [
  {
    display: (weapon, index) => (
      <RemoveMeleeWeaponButton gear={weapon} index={index} />
    ),
    label: "Sell",
  },
  ...baseMeleeTableConfig,
]
