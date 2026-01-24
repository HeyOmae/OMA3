import { GearWeaponFireArms } from "@/types/Resources"
import { FC } from "react"

interface FirearmsTableProps {
  gearRow: GearWeaponFireArms[]
}

export const FirearmsTable: FC<FirearmsTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>DV</th>
        <th>AR</th>
        <th>Modes</th>
        <th>Ammo</th>
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
          <td>{gearItem?.weapon?.mode}</td>
          <td>{gearItem?.weapon?.ammo}</td>
        </tr>
      ))}
    </tbody>
  </>
)
