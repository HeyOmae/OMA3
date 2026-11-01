import { GearAmmo } from "@/types/Resources"
import { roundsPerBundle } from "@/data/ammo"
import { FC } from "react"

interface AmmoTableProps {
  gearRow: GearAmmo[]
}

export const AmmoTable: FC<AmmoTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Caseless</th>
        <th>Rounds</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map(({ name, ammo, currentRating }, index: number) => (
        <tr key={index}>
          <td>{name}</td>
          <td>{ammo.type}</td>
          <td>{ammo.caseless ? "Yes" : "No"}</td>
          <td>{currentRating * roundsPerBundle}</td>
        </tr>
      ))}
    </tbody>
  </>
)
