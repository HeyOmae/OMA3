import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
} from "@material-ui/core"
import { FC } from "react"
import ProjectileData from "../../../../data/projectiles"
import { GearWeaponsProjectile } from "../../../../types/Resources"

export interface RowProps {
  projectile: GearWeaponsProjectile
}

export const ProjectileRow: FC<RowProps> = ({
  projectile: {
    name,
    availability,
    cost,
    weapon: { ar },
  },
}) => (
  <TableRow>
    <TableCell>+</TableCell>
    <TableCell>{name}</TableCell>
    <TableCell>{ar.join("/")}</TableCell>
    <TableCell>{availability}</TableCell>
    <TableCell>{cost}&yen;</TableCell>
  </TableRow>
)

const ProjectileWeapons: FC = () => (
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
        {ProjectileData.map((weapon) => (
          <ProjectileRow key={weapon.name} projectile={weapon} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default ProjectileWeapons
