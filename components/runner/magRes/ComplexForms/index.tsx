import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import complexFormData from "../../../../data/complexForm.json"

export const ComplexForms = () => (
  <TableContainer>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Learn</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Fade</TableCell>
          <TableCell>Duration</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {complexFormData.map(({ name, fade, duration }) => (
          <TableRow key={name}>
            <TableCell>+</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{fade}</TableCell>
            <TableCell>{duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
