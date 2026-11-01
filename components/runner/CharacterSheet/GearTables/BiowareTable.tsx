import { Resources } from "@/types/Resources"
import { FC } from "react"
import { getEssenceFromGear } from "@/components/runner/resources/util"

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
          <td>{getEssenceFromGear(gearItem)}</td>
        </tr>
      ))}
    </tbody>
  </>
)
