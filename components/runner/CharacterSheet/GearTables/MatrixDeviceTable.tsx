import { Resources } from "@/types/Resources"
import { FC } from "react"

type MatrixDevice = Resources["cyberdeck"] | Resources["commlink"]

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
      {gearRow.map((gearItem, index) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
          <td>{gearItem.deviceRating}</td>
          <td>{gearItem.matrixAttributes?.attack}</td>
          <td>{gearItem.matrixAttributes?.sleaze}</td>
          <td>{gearItem.matrixAttributes?.dataProcessing}</td>
          <td>{gearItem.matrixAttributes?.firewall}</td>
        </tr>
      ))}
    </tbody>
  </>
)
