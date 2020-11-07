import { FC } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import ritualData from "../../../../data/rituals.json"

export const Rituals: FC = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Learn</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Keywords</TableCell>
            <TableCell>Threshold</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ritualData.map(({ name, threshold, ritualfeature }) => (
            <TableRow key={name}>
              <TableCell>+</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>({Object.values(ritualfeature).join(", ")})</TableCell>
              <TableCell>{threshold}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
