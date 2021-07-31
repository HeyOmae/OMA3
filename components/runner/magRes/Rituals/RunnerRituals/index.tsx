import { FC } from "react"
import { Payload } from "../.."
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { Ritual } from "../../../../../types/MagRes"
import { RitualTable } from "../RitualTable"
import { RemoveRitualButton } from "./RemoveRitualButton"

export interface Props {
  rituals: Ritual[]
  dispatch: DispatchAction<Payload>
}

export const RunnerRituals: FC<Props> = ({ dispatch, rituals }) => (
  <RitualTable
    dispatch={dispatch}
    rituals={rituals}
    ActionButton={RemoveRitualButton}
  />
)
