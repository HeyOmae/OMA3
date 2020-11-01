import { FC, useContext } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { DispatchProvider, SET_SPELL } from ".."
import { AddButton } from "../../../common"
import { CombatSpell } from "../../../../types/MagRes"

interface Props {
  spells: CombatSpell[]
}

export const CombatSpells: FC<Props> = ({ spells }) => {
  const dispatch = useContext(DispatchProvider)
  return (
    <TableContainer className="table-container">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Learn</TableCell>
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
                    aria-label={name}
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
