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
import { ChoiceRatingRow } from "./Row/ChoiceRatingRow"

export interface Props<G> {
  listOfGear: G[]
  cols: Columns<G>[]
}

function displayRow(gear: Gear, isPurchasing: boolean) {
  if (isPurchasing) {
    const hasRating = "rating" in gear,
      hasChoice = "choice" in gear
    if (hasRating && hasChoice) {
      return ChoiceRatingRow
    } else if (hasRating) {
      return RatingRow
    } else if (hasChoice) {
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
            const isPurchasing = cols[0].label === "Buy"
            const Row = displayRow(gear, isPurchasing)
            return (
              <Row
                key={isPurchasing ? gear.name : index}
                cols={cols}
                gear={gear}
                index={index}
              />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
