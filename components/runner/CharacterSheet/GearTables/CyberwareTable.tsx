import { Resources } from "@/types/Resources"
import { FC } from "react"

interface CyberwareTableProps {
  gearRow: Resources["cyberware"]
}

export const CyberwareTable: FC<CyberwareTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>Essence</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem, index) => {
        // Extract essence from the useAs array
        const essence = gearItem.useAs?.[0]?.essence

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
