import { FC } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { Payload, SET_SPELL } from ".."
import { AddButton } from "../../../common"
import { CombatSpell } from "../../../../types/MagRes"
import { DispatchAction } from "../../../../hooks/useRunnerAccess"

interface Props {
  spells: CombatSpell[]
  dispatch: DispatchAction<symbol, Payload>
  actionLabel: "Learn" | "Remove"
}

export const CombatSpells: FC<Props> = ({
  spells,
  dispatch,
  actionLabel = "Learn",
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
          {spells.map((spell: CombatSpell) => {
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
                  <AddButton
                    aria-label={`${actionLabel} ${name}`}
                    onClick={() => {
                      dispatch({ type: SET_SPELL, payload: { spell } })
                    }}
                  />
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
