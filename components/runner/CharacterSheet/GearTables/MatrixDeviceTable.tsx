import { Resources } from "@/types/Resources"
import { FC } from "react"

type MatrixDevice = Resources["cyberdeck"] | Resources["commlink"]

// cyberdecks have attack and sleaze, commlinks data processing and firewall
type MatrixAttributes = Partial<
  Record<"attack" | "sleaze" | "dataProcessing" | "firewall", number>
>

interface MatrixDeviceTableProps {
  gearRow: MatrixDevice
}

export const MatrixDeviceTable: FC<MatrixDeviceTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>Device Rating</th>
        <th>Attack</th>
        <th>Sleaze</th>
        <th>Data Processing</th>
        <th>Firewall</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem, index) => {
        const matrixAttributes: MatrixAttributes = gearItem.matrixAttributes
        return (
          <tr key={index}>
            <td>{gearItem.name}</td>
            <td>{gearItem.deviceRating}</td>
            <td>{matrixAttributes.attack}</td>
            <td>{matrixAttributes.sleaze}</td>
            <td>{matrixAttributes.dataProcessing}</td>
            <td>{matrixAttributes.firewall}</td>
          </tr>
        )
      })}
    </tbody>
  </>
)
