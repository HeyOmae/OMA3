import { FC, ReactNode } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { CombatSpell } from "../../../../types/MagRes"
import { ActionLabel } from "."
import { BookReference } from "@/components/common/BookReference"

interface Props {
  spells: CombatSpell[]
  actionLabel: ActionLabel
  // the button to learn or forget the spell in this row
  renderAction: (spell: CombatSpell, spellIndex: number) => ReactNode
}

export const CombatSpells: FC<Props> = ({
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
            <TableCell>Damage</TableCell>
            <TableCell>Reference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spells.map((spell: CombatSpell, spellIndex) => {
            const {
              name,
              range,
              category,
              type,
              duration,
              drain,
              damage,
              reference,
              spellfeature: [{ ref }, area],
            } = spell
            return (
              <TableRow key={name}>
                <TableCell>{renderAction(spell, spellIndex)}</TableCell>
                <TableCell>
                  {name} ({ref} {category}
                  {area ? `, ${area.ref}` : ""})
                </TableCell>
                <TableCell>{range}</TableCell>
                <TableCell>{type}</TableCell>
                <TableCell>{duration}</TableCell>
                <TableCell>{drain}</TableCell>
                <TableCell>{damage}</TableCell>
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
