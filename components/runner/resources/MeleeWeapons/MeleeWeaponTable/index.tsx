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
import { AddMeleeWeaponButton } from "./AddMeleeWeaponButton"
import { RemoveMeleeWeaponButton } from "./RemoveMeleeWeaponButton"
import { GearTableProps } from "../../ulti"

export type Props = GearTableProps<GearWeaponMelee>

export const MeleeWeaponTable: FC<Props> = ({
  listOfGear: weapons,
  isForSelling,
}) => {
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>{isForSelling ? "Sell" : "Buy"}</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>DV</TableCell>
            <TableCell>Attack Rating</TableCell>
            <TableCell>Avail</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weapons.map((meleeWeapon, index) => {
            const {
              name,
              availability,
              cost,
              weapon: { dv, ar },
            } = meleeWeapon
            return (
              <TableRow key={name}>
                <TableCell>
                  {isForSelling ? (
                    <RemoveMeleeWeaponButton
                      meleeWeapon={meleeWeapon}
                      index={index}
                    />
                  ) : (
                    <AddMeleeWeaponButton meleeWeapon={meleeWeapon} />
                  )}
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
