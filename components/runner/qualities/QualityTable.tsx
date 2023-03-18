import { Quality } from "@/types/Qualities"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { FC } from "react"

interface Props {
  qualities: Quality[]
}

export const QualityTable: FC<Props> = ({ qualities }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Add</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Karma</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {qualities.map(({ name, karma }) => (
        <TableRow key={name}>
          <TableCell>+</TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>{karma}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
