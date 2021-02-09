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
import { StandardDisplayRow, RatingRow } from "./Row"

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
          {listOfGear.map((gear, index) => {
            const Row =
              "rating" in gear && cols[0].label === "Buy"
                ? RatingRow
                : StandardDisplayRow
            return <Row key={gear.name} cols={cols} gear={gear} index={index} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
