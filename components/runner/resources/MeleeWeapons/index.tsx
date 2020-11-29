import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import meleeData from "../../../../data/melee.json"

export const MeleeWeapons = () => {
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Buy</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>DV</TableCell>
            <TableCell>Attack Rating</TableCell>
            <TableCell>Avail</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meleeData.map(({ name, availability, cost, weapon: { dv, ar } }) => (
            <TableRow key={name}>
              <TableCell>+</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{dv}</TableCell>
              <TableCell>{ar.join("/")}</TableCell>
              <TableCell>{availability}</TableCell>
              <TableCell>{cost}&yen;</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
