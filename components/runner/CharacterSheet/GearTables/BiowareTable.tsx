import { Resources } from "@/types/Resources"
import { FC } from "react"

interface BiowareTableProps {
  gearRow: Resources["bioware"]
}

export const BiowareTable: FC<BiowareTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>Essence</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem, index) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
          <td>{gearItem.useAs.essence}</td>
        </tr>
      ))}
    </tbody>
  </>
)
