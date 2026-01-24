import { GearWeaponMelee, GearWeaponsProjectile } from "@/types/Resources"
import { FC } from "react"

interface WeaponTableProps {
  gearRow: (GearWeaponMelee | GearWeaponsProjectile)[]
}

export const WeaponTable: FC<WeaponTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>DV</th>
        <th>AR</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem, index: number) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
          <td>{gearItem?.weapon?.dv}</td>
          <td>
            {gearItem?.weapon?.ar.map((n) => (n === 0 ? "-" : n)).join("/")}
          </td>
        </tr>
      ))}
    </tbody>
  </>
)
