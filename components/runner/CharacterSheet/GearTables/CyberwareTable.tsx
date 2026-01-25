import { Resources } from "@/types/Resources"
import { FC } from "react"
import { getEssenceFromGear } from "@/components/runner/resources/util"
import { formatModWithRating } from "./utils"

interface CyberwareTableProps {
  gearRow: Resources["cyberware"]
}

export const CyberwareTable: FC<CyberwareTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>Essence</th>
        <th>Mods</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem, index) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
          <td>{getEssenceFromGear(gearItem)}</td>
          <td>{gearItem.mods?.map(formatModWithRating).join(", ")}</td>
        </tr>
      ))}
    </tbody>
  </>
)
