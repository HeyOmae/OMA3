import { FC } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { GearWeaponMelee } from "../../../../../types/Resources"
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { AddMeleeWeaponButton } from "./AddMeleeWeaponButton"

export interface Props {
  ActionButton: typeof AddMeleeWeaponButton
  weapons: GearWeaponMelee[]
  dispatch: DispatchAction<symbol, GearWeaponMelee>
}

export const MeleeWeaponTable: FC<Props> = ({
  weapons,
  ActionButton,
  dispatch,
}) => {
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
          {weapons.map((meleeWeapon) => {
            const {
              name,
              availability,
              cost,
              weapon: { dv, ar },
            } = meleeWeapon
            return (
              <TableRow key={name}>
                <TableCell>
                  <ActionButton dispatch={dispatch} meleeWeapon={meleeWeapon} />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{dv}</TableCell>
                <TableCell>{ar.join("/")}</TableCell>
                <TableCell>{availability}</TableCell>
                <TableCell>{cost}&yen;</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
