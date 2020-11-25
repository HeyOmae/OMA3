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
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { ComplexForm } from "../../../../types/MagRes"
import { AddComplexFormButton } from "./AddComplexFormButton"

export interface Props {
  dispatch: DispatchAction<symbol, Payload>
  complexForms: ComplexForm[]
  ActionButton: typeof AddComplexFormButton
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
        {complexForms.map((complexForm) => {
          const { name, fade, duration } = complexForm
          return (
            <TableRow key={name}>
              <TableCell>
                <ActionButton dispatch={dispatch} complexForm={complexForm} />
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
