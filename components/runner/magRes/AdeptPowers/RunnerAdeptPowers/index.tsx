import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { FC } from "react"
import { AdeptPower } from "../../../../../types/MagRes"

export interface Props {
  powers: AdeptPower[]
}

export const RunnerAdeptPowers: FC<Props> = ({ powers }) => {
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Remove</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Level</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Activation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {powers.map((power: AdeptPower) => {
            const { name, activation, cost } = power
            return (
              <TableRow key={name}>
                <TableCell>-</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>{cost}</TableCell>
                <TableCell>{activation}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
