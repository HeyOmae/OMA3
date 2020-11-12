import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { FC } from "react"
import { AdeptPower } from "../../../../types/MagRes"

interface Props {
  powers: AdeptPower[]
}

export const PowerTable: FC<Props> = ({ powers }) => (
  <TableContainer>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Add</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Cost</TableCell>
          <TableCell>Activation</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {powers.map(({ name, cost, level, activation }) => (
          <TableRow key={name}>
            <TableCell>+</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>
              {cost}
              {level && " per level"}
            </TableCell>
            <TableCell>{activation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
