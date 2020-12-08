import { FC } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import {
  GearWeaponFireArms,
  GearWeaponMelee,
  GearWeaponsBows,
} from "../../../../types/Resources"

export interface Props {
  weapons: (GearWeaponMelee | GearWeaponFireArms | GearWeaponsBows)[]
}

export const WeaponTable: FC<Props> = ({ weapons }) => {
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
          {weapons.map(({ name, availability, cost, weapon: { dv, ar } }) => (
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
