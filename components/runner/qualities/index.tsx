import { positive } from "@/data/qualities"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

const Qualities = () => (
  <div>
    <h2>Positive Qualities</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Add</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Karma</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {positive.map(({ name, karma }) => (
          <TableRow key={name}>
            <TableCell>+</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{karma}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
)

export default Qualities
