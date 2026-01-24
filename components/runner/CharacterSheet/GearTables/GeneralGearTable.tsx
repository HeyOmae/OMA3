import { Resources } from "@/types/Resources"
import { FC } from "react"

type ResourceValue = Resources[keyof Resources]
type GearItem = ResourceValue extends (infer T)[] ? T : never

interface GeneralGearTableProps {
  gearRow: ResourceValue
}

export const GeneralGearTable: FC<GeneralGearTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem: GearItem, index: number) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
        </tr>
      ))}
    </tbody>
  </>
)
