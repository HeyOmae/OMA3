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
import { FirearmDispatch } from ".."
import { AddFirearmsButton } from "./AddFirearmsButton"

export interface Props {
  weapons: GearWeaponFireArms[]
  dispatch: FirearmDispatch
  ActionButton: typeof AddFirearmsButton
}

export const FirearmsTable: FC<Props> = ({
  weapons,
  ActionButton,
  dispatch,
}) => (
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
          <FirearmsRow key={weapon.name} weapon={weapon}>
            <ActionButton dispatch={dispatch} weapon={weapon} />
          </FirearmsRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

interface RowProps {
  weapon: GearWeaponFireArms
  children: JSX.Element
}

export const FirearmsRow: FC<RowProps> = ({ weapon, children }) => (
  <TableRow>
    <TableCell>{children}</TableCell>
    <TableCell>{weapon.name}</TableCell>
    <TableCell>{weapon.weapon.dv}</TableCell>
    <TableCell>{weapon.weapon.mode}</TableCell>
    <TableCell>{weapon.weapon.ar.join("/")}</TableCell>
    <TableCell>{weapon.weapon.ammo}</TableCell>
    <TableCell>{weapon.availability}</TableCell>
    <TableCell>{weapon.cost}&yen;</TableCell>
  </TableRow>
)
