import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { FC, useContext } from "react"
import { DispatchProvider, SET_SPELL } from ".."
import { GeneralSpell } from "../../../../types/MagRes"
import { AddButton } from "../../../common"

interface Props {
  spells: GeneralSpell[]
}

export const SpellsTable: FC<Props> = ({ spells }) => {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {spells.map((spell) => {
            const { name, range, type, duration, drain } = spell
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
