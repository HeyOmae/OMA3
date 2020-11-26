import { FC } from "react"
import { Payload } from "../.."
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { ComplexForm } from "../../../../../types/MagRes"
import { RemoveButton } from "../../../../common"

interface Props {
  dispatch: DispatchAction<symbol, Payload>
  complexForm: ComplexForm
  index: number
}

export const RemoveComplexFormButton: FC<Props> = ({
  complexForm: { name },
}) => <RemoveButton aria-label={`Remove ${name}`} onClick={() => null} />
