import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { FC, ReactNode } from "react"
import { ActionLabel } from "."
import { GeneralSpell } from "../../../../types/MagRes"
import { BookReference } from "@/components/common/BookReference"

interface Props {
  spells: GeneralSpell[]
  actionLabel: ActionLabel
  // the button to learn or forget the spell in this row
  renderAction: (spell: GeneralSpell, spellIndex: number) => ReactNode
}

export const SpellsTable: FC<Props> = ({
  spells,
  actionLabel,
  renderAction,
}) => {
  return (
    <TableContainer className="table-container">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>{actionLabel}</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Range</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Drain</TableCell>
            <TableCell>Reference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spells.map((spell, spellIndex) => {
            const { name, range, type, duration, drain, reference } = spell
            return (
              <TableRow key={name}>
                <TableCell>{renderAction(spell, spellIndex)}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{range}</TableCell>
                <TableCell>{type}</TableCell>
                <TableCell>{duration}</TableCell>
                <TableCell>{drain}</TableCell>
                <TableCell>
                  <BookReference reference={reference} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
