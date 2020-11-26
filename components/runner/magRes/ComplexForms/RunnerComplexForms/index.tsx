import { FC } from "react"
import { Payload } from "../.."
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { ComplexForm } from "../../../../../types/MagRes"
import { ComplexFormTable } from "../ComplexFormTable"
import { RemoveComplexFormButton } from "./RemoveComplexFormButton"

export interface Props {
  dispatch: DispatchAction<symbol, Payload>
  complexForms: ComplexForm[]
}

export const RunnerComplexForms: FC<Props> = (props) => (
  <ComplexFormTable {...props} ActionButton={RemoveComplexFormButton} />
)
