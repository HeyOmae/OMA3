import { Resources, GearWithRating } from "@/types/Resources"
import { FC } from "react"

type ResourceValue = Resources[keyof Resources]
type GearItem = (ResourceValue extends (infer T)[] ? T : never) | GearWithRating

interface GeneralGearTableProps {
  gearRow: ResourceValue
}

export const GeneralGearTable: FC<GeneralGearTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem: GearItem, index: number) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
          <td>{"currentRating" in gearItem ? gearItem.currentRating : ""}</td>
        </tr>
      ))}
    </tbody>
  </>
)
