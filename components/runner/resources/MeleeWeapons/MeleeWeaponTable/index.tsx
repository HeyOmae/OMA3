import { GearWeaponMelee } from "../../../../../types/Resources"
import { AddMeleeWeaponButton } from "./AddMeleeWeaponButton"
import { RemoveMeleeWeaponButton } from "./RemoveMeleeWeaponButton"
import { Columns } from "../../GearTable"

const baseMeleeTableConfig: Columns<GearWeaponMelee>[] = [
  {
    display: (weapon) => weapon.name,
    label: "Name",
  },
  {
    display: (weapon) => weapon.weapon.dv,
    label: "DV",
  },
  {
    display: (weapon) => weapon.weapon.ar.join("/"),
    label: "AR",
  },
  {
    display: (weapon) => weapon.availability,
    label: "Avail",
  },
  {
    display: (weapon) => `${weapon.cost}¥`,
    label: "Cost",
  },
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
