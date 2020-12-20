import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
} from "@material-ui/core"
import { FC } from "react"
import { ProjectileDispatch } from ".."
import { GearWeaponsProjectile } from "../../../../../types/Resources"
import { AddProjectileButton } from "./AddProjectileButton"

export interface RowProps {
  projectile: GearWeaponsProjectile
  children: JSX.Element
}

export const ProjectileRow: FC<RowProps> = ({
  projectile: {
    name,
    availability,
    cost,
    weapon: { ar },
  },
  children,
}) => (
  <TableRow>
    <TableCell>{children}</TableCell>
    <TableCell>{name}</TableCell>
    <TableCell>{ar.join("/")}</TableCell>
    <TableCell>{availability}</TableCell>
    <TableCell>{cost}&yen;</TableCell>
  </TableRow>
)

export interface Props {
  weapons: GearWeaponsProjectile[]
  dispatch: ProjectileDispatch
  ActionButton: typeof AddProjectileButton
}

export const ProjectileTable: FC<Props> = ({
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
          <TableCell>Attack Ratings</TableCell>
          <TableCell>Avail</TableCell>
          <TableCell>Cost</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {weapons.map((weapon) => (
          <ProjectileRow key={weapon.name} projectile={weapon}>
            <ActionButton dispatch={dispatch} weapon={weapon} />
          </ProjectileRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
