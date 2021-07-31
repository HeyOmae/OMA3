import { FC } from "react"
import { Payload, REMOVE_COMPLEX_FORM } from "../.."
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { ComplexForm } from "../../../../../types/MagRes"
import { RemoveButton } from "../../../../common"

interface Props {
  dispatch: DispatchAction<Payload>
  complexForm: ComplexForm
  index: number
}

export const RemoveComplexFormButton: FC<Props> = ({
  complexForm: { name },
  dispatch,
  index,
}) => (
  <RemoveButton
    aria-label={`Remove ${name}`}
    onClick={() =>
      dispatch({
        type: REMOVE_COMPLEX_FORM,
        payload: { removeComplexForm: index },
      })
    }
  />
)
