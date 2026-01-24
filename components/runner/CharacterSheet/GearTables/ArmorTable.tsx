import { GearArmor } from "@/types/Resources"
import { FC } from "react"

interface ArmorTableProps {
  gearRow: GearArmor[]
}

export const ArmorTable: FC<ArmorTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>Rating</th>
        <th>Capacity</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem, index: number) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
          <td>{gearItem?.armor?.rating}</td>
          <td>{gearItem?.modifications?.itemhookmod?.capacity}</td>
        </tr>
      ))}
    </tbody>
  </>
)
