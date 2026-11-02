import { ReactElement } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { Gear, GearAmmo } from "@/types/Resources"
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

// Buying some gear needs choices made first, like its rating or a name, and
// each kind of choice has its own row
function GearRow<G extends Gear>({
  isPurchasing,
  ...props
}: RowProps<G> & { isPurchasing: boolean }) {
  const { gear } = props
  const hasRating = "rating" in gear,
    hasChoice = "choice" in gear

  if (!isPurchasing) {
    return <StandardDisplayRow {...props} />
  } else if (isGearAmmo(gear)) {
    return <AmmoRow<G & GearAmmo> {...props} gear={gear} />
  } else if (gear.choice === "NAME") {
    return <NamedRow {...props} />
  } else if (hasRating && hasChoice) {
    return <ChoiceRatingRow {...props} />
  } else if (hasRating) {
    return <RatingRow {...props} />
  } else if (hasChoice) {
    return <SelectSkillRow {...props} />
  }
  return <StandardDisplayRow {...props} />
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
            return (
              <GearRow
                key={isPurchasing ? gear.name : index}
                isPurchasing={isPurchasing}
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
