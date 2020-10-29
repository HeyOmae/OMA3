import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { Detection } from "../../../../data/spells.json"

export const DetectionSpells = () => (
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
      {Detection.map(({ name, range, type, duration, drain }) => (
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
