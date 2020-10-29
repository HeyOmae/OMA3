import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { FC } from "react"

interface Spell {
  name: string
  range: string
  type: string
  duration: string
  drain: number
}

interface Props {
  spells: Spell[]
}

export const SpellsTable: FC<Props> = ({ spells }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Range</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Duration</TableCell>
        <TableCell>Drain</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {spells.map(({ name, range, type, duration, drain }) => (
        <TableRow key={name}>
          <TableCell>{name}</TableCell>
          <TableCell>{range}</TableCell>
          <TableCell>{type}</TableCell>
          <TableCell>{duration}</TableCell>
          <TableCell>{drain}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
