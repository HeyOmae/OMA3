import { FC } from "react"
import { Payload, REMOVE_RITUAL } from "../.."
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { Ritual } from "../../../../../types/MagRes"
import { RemoveButton } from "../../../../common"

interface Props {
  dispatch: DispatchAction<Payload>
  ritual: Ritual
  ritualIndex: number
}

export const RemoveRitualButton: FC<Props> = ({
  dispatch,
  ritual,
  ritualIndex,
}) => (
  <RemoveButton
    aria-label={`Remove ${ritual.name}`}
    onClick={() =>
      dispatch({ type: REMOVE_RITUAL, payload: { removeRitual: ritualIndex } })
    }
  />
)
