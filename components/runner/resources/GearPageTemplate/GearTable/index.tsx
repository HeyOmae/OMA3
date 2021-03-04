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
import { StandardDisplayRow, RatingRow, SelectSkillRow } from "./Row"

export interface Props<G> {
  listOfGear: G[]
  cols: Columns<G>[]
}

function displayRow(gear: Gear, colLabel: string) {
  if (colLabel === "Buy") {
    if ("rating" in gear) {
      return RatingRow
    } else if ("choice" in gear) {
      return SelectSkillRow
    }
  }

  return StandardDisplayRow
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
            const Row = displayRow(gear, cols[0].label)
            return <Row key={gear.name} cols={cols} gear={gear} index={index} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
