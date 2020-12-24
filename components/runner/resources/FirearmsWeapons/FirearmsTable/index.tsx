import { FC } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { GearWeaponFireArms } from "../../../../../types/Resources"

export interface Props {
  weapons: GearWeaponFireArms[]
}

export const FirearmsTable: FC<Props> = ({ weapons }) => (
  <TableContainer>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Buy</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>DV</TableCell>
          <TableCell>Mode</TableCell>
          <TableCell>AR</TableCell>
          <TableCell>Ammo</TableCell>
          <TableCell>Avail</TableCell>
          <TableCell>Cost</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {weapons.map((weapon) => (
          <FirearmsRow key={weapon.name} weapon={weapon} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

interface RowProps {
  weapon: GearWeaponFireArms
}

export const FirearmsRow: FC<RowProps> = ({ weapon }) => (
  <TableRow>
    <TableCell>+</TableCell>
    <TableCell>{weapon.name}</TableCell>
    <TableCell>{weapon.weapon.dv}</TableCell>
    <TableCell>{weapon.weapon.mode}</TableCell>
    <TableCell>{weapon.weapon.ar.join("/")}</TableCell>
    <TableCell>{weapon.weapon.ammo}</TableCell>
    <TableCell>{weapon.availability}</TableCell>
    <TableCell>{weapon.cost}&yen;</TableCell>
  </TableRow>
)
