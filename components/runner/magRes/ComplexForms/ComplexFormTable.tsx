import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { FC } from "react"
import { Payload } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { ComplexForm } from "../../../../types/MagRes"
import { AddComplexFormButton } from "./AddComplexFormButton"
import { RemoveComplexFormButton } from "./RunnerComplexForms/RemoveComplexFormButton"

export interface Props {
  dispatch: DispatchAction<Payload>
  complexForms: ComplexForm[]
  ActionButton: typeof AddComplexFormButton | typeof RemoveComplexFormButton
}

export const ComplexFormTable: FC<Props> = ({
  dispatch,
  complexForms,
  ActionButton,
}) => (
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
        {complexForms.map((complexForm, index) => {
          const { name, fade, duration } = complexForm
          return (
            <TableRow key={name}>
              <TableCell>
                <ActionButton
                  dispatch={dispatch}
                  complexForm={complexForm}
                  index={index}
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
