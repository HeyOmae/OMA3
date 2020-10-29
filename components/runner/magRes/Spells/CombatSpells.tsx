import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { Combat } from "../../../../data/spells.json"

export const CombatSpells = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Range</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Duration</TableCell>
        <TableCell>Drain</TableCell>
        <TableCell>Damage</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {Combat.map(
        ({
          name,
          range,
          category,
          type,
          duration,
          drain,
          damage,
          spellfeature: [{ ref }, area],
        }) => (
          <TableRow key={name}>
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
        ),
      )}
    </TableBody>
  </Table>
)
