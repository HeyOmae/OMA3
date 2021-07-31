import { FC } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { Payload } from ".."
import { CombatSpell } from "../../../../types/MagRes"
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { ActionLabel, AddSpellButtonProps } from "."
import { RemoveSpellButtonProps } from "./RunnerSpells"

interface Props {
  spells: CombatSpell[]
  dispatch: DispatchAction<Payload>
  actionLabel: ActionLabel
  ActionButton: FC<AddSpellButtonProps | RemoveSpellButtonProps>
}

export const CombatSpells: FC<Props> = ({
  spells,
  dispatch,
  actionLabel,
  ActionButton,
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
              spellfeature: [{ ref }, area],
            } = spell
            return (
              <TableRow key={name}>
                <TableCell>
                  {actionLabel === "Learn" ? (
                    <ActionButton
                      dispatch={dispatch}
                      actionLabel={actionLabel}
                      spell={spell}
                    />
                  ) : (
                    <ActionButton
                      dispatch={dispatch}
                      actionLabel={actionLabel}
                      spellCategory={spell.category}
                      spellName={spell.name}
                      spellIndex={spellIndex}
                    />
                  )}
                </TableCell>
                <TableCell>
                  {name} ({ref} {category}
                  {area ? `, ${area.ref}` : ""})
                </TableCell>
                <TableCell>{range}</TableCell>
                <TableCell>{type}</TableCell>
                <TableCell>{duration}</TableCell>
                <TableCell>{drain}</TableCell>
                <TableCell>{damage}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
