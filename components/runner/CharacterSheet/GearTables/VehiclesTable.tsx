import { Resources } from "@/types/Resources"
import { FC } from "react"

interface VehiclesTableProps {
  gearRow: Resources["vehicles"]
}

export const VehiclesTable: FC<VehiclesTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>Handling</th>
        <th>Speed</th>
        <th>Body</th>
        <th>Armor</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem, index) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
          <td>{gearItem.vehicle?.handling}</td>
          <td>{gearItem.vehicle?.topSpeed}</td>
          <td>{gearItem.vehicle?.body}</td>
          <td>{gearItem.vehicle?.armor}</td>
        </tr>
      ))}
    </tbody>
  </>
)
