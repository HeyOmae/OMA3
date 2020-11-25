import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { FC } from "react"
import { Payload } from ".."
import complexFormData from "../../../../data/complexForm.json"
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { ComplexForm } from "../../../../types/MagRes"
import { AddComplexFormButton } from "./AddComplexFormButton"

export interface Props {
  dispatch: DispatchAction<symbol, Payload>
}

export const ComplexForms: FC<Props> = ({ dispatch }) => (
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
        {(complexFormData as ComplexForm[]).map((complexForm) => {
          const { name, fade, duration } = complexForm
          return (
            <TableRow key={name}>
              <TableCell>
                <AddComplexFormButton
                  dispatch={dispatch}
                  complexForm={complexForm}
                />
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{fade}</TableCell>
              <TableCell>{duration}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </TableContainer>
)
