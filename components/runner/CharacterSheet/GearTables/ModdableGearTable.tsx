import { Resources } from "@/types/Resources"
import { FC } from "react"
import { formatModWithRating } from "./utils"

type ModdableGear =
  | Resources["imaging"]
  | Resources["audio"]
  | Resources["sensor"]

interface ModdableGearTableProps {
  gearRow: ModdableGear
}

export const ModdableGearTable: FC<ModdableGearTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>Rating</th>
        <th>Mods</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem, index) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
          <td>{gearItem.currentRating}</td>
          <td>{gearItem.mods?.map(formatModWithRating).join(", ")}</td>
        </tr>
      ))}
    </tbody>
  </>
)
