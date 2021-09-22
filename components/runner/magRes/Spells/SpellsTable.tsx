import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { FC } from "react"
import { AddSpellButtonProps } from "."
import { Payload } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { GeneralSpell } from "../../../../types/MagRes"
import { RemoveSpellButtonProps } from "./RunnerSpells"

interface Props {
  spells: GeneralSpell[]
  dispatch: DispatchAction<Payload>
  actionLabel: "Learn" | "Remove"
  ActionButton: FC<AddSpellButtonProps | RemoveSpellButtonProps>
}

export const SpellsTable: FC<Props> = ({
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
          </TableRow>
        </TableHead>
        <TableBody>
          {spells.map((spell, spellIndex) => {
            const { name, range, type, duration, drain } = spell
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
                <TableCell>{name}</TableCell>
                <TableCell>{range}</TableCell>
                <TableCell>{type}</TableCell>
                <TableCell>{duration}</TableCell>
                <TableCell>{drain}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
