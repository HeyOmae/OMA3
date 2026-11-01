import { FC, ReactElement } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { Gear } from "@/types/Resources"
import { Columns, isGearAmmo } from "../../util"
import {
  StandardDisplayRow,
  RatingRow,
  SelectSkillRow,
  Props as RowProps,
} from "./Row"
import { ChoiceRatingRow } from "./Row/ChoiceRatingRow"
import { NamedRow } from "./Row/NamedRow"
import { AmmoRow } from "./Row/AmmoRow"

export interface Props<G> {
  listOfGear: G[]
  cols: Columns<G>[]
}

function displayRow(gear: Gear, isPurchasing: boolean): FC<RowProps> {
  if (isPurchasing) {
    if (isGearAmmo(gear)) {
      return AmmoRow
    }
    const hasRating = "rating" in gear,
      hasChoice = "choice" in gear
    if ("choice" in gear && gear.choice === "NAME") {
      return NamedRow
    } else if (hasRating && hasChoice) {
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
