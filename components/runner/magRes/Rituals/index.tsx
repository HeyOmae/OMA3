import { FC } from "react"
import { Payload } from ".."
import ritualData from "../../../../data/rituals.json"
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { AddRitualButton } from "./AddRitualButton"
import { RitualTable } from "./RitualTable"

export interface Props {
  dispatch: DispatchAction<Payload>
}

export const Rituals: FC<Props> = ({ dispatch }) => (
  <RitualTable
    rituals={ritualData}
    ActionButton={AddRitualButton}
    dispatch={dispatch}
  />
)
