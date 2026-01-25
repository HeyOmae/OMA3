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
      {gearRow.map((gearItem, index) => {
        // Extract essence from the useAs object or array
        const essence =
          Array.isArray(gearItem.useAs) ?
            gearItem.useAs[0]?.essence
          : gearItem.useAs?.essence

        return (
          <tr key={index}>
            <td>{gearItem.name}</td>
            <td>{essence}</td>
          </tr>
        )
      })}
    </tbody>
  </>
)
