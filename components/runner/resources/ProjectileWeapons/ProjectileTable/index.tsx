import { GearWeaponsProjectile } from "../../../../../types/Resources"
import { Columns } from "../../GearTable"
import { baseMeleeTableConfig } from "../../MeleeWeapons/MeleeWeaponTable"
import { AddProjectileButton } from "./AddProjectileButton"
import { RemoveProjectileButton } from "./RemoveProjectileButton"

const baseProjectileTableConfig = baseMeleeTableConfig

export const addProjectileTableConfig: Columns<GearWeaponsProjectile>[] = [
  {
    display: (weapon) => <AddProjectileButton gear={weapon} />,
    label: "Buy",
  },
  ...baseProjectileTableConfig,
]

export const removeProjectileTableConfig: Columns<GearWeaponsProjectile>[] = [
  {
    display: (weapon, index) => (
      <RemoveProjectileButton gear={weapon} index={index} />
    ),
    label: "Sell",
  },
  ...baseProjectileTableConfig,
]
