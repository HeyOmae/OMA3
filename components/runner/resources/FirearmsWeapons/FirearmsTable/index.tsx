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
import { RemoveFirearmsButton } from "./RemoveFirearmsButton"
import { LabelActionButtonType } from "../../../../../types/generalTypes"

export interface Props {
  weapons: GearWeaponFireArms[]
  dispatch: FirearmDispatch
  ActionButton: typeof AddFirearmsButton | typeof RemoveFirearmsButton
  actionLabel?: LabelActionButtonType
}

export const FirearmsTable: FC<Props> = ({
  weapons,
  ActionButton,
  dispatch,
  actionLabel = "Buy",
}) => (
  <TableContainer>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>{actionLabel}</TableCell>
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
        {weapons.map((weapon, index) => (
          <FirearmsRow key={weapon.name} weapon={weapon}>
            <ActionButton dispatch={dispatch} weapon={weapon} index={index} />
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
