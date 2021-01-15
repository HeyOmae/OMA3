import { ReactElement } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { Gear } from "@/types/Resources"
import { Columns } from "../../util"

export interface Props<G> {
  listOfGear: G[]
  cols: Columns<G>[]
}

export function GearTable<G extends Gear>({
  listOfGear,
  cols,
}: Props<G>): ReactElement {
  return (
    <TableContainer className="table-container">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {cols.map(({ label }) => (
              <TableCell key={label}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {listOfGear.map((gear, index) => (
            <TableRow key={gear.name}>
              {cols.map(({ display, label }) => (
                <TableCell key={label}>{display(gear, index)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
