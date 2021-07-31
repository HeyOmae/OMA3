import { FC } from "react"
import { Payload } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import complexFormData from "../../../../data/complexForm.json"
import { ComplexForm } from "../../../../types/MagRes"
import { ComplexFormTable } from "./ComplexFormTable"
import { AddComplexFormButton } from "./AddComplexFormButton"

export interface Props {
  dispatch: DispatchAction<Payload>
}

export const ComplexForms: FC<Props> = ({ dispatch }) => (
  <ComplexFormTable
    complexForms={complexFormData as ComplexForm[]}
    dispatch={dispatch}
    ActionButton={AddComplexFormButton}
  />
)
