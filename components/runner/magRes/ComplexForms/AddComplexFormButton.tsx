import { FC } from "react"
import { Payload, SET_COMPLEX_FORM } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { ComplexForm } from "../../../../types/MagRes"
import { AddButton } from "../../../common"

interface Props {
  dispatch: DispatchAction<symbol, Payload>
  complexForm: ComplexForm
}

export const AddComplexFormButton: FC<Props> = ({ dispatch, complexForm }) => (
  <AddButton
    aria-label={`Add ${complexForm.name}`}
    onClick={() =>
      dispatch({ type: SET_COMPLEX_FORM, payload: { complexForm } })
    }
  />
)
