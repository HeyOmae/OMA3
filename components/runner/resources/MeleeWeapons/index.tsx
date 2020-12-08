import meleeData from "../../../../data/melee"
import { WeaponTable } from "../WeaponTable"

export const MeleeWeapons = () => {
  return <WeaponTable weapons={meleeData} />
}
