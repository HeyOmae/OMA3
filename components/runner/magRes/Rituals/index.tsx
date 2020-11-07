import { FC } from "react"
import { Payload } from ".."
import ritualData from "../../../../data/rituals.json"
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { AddRitualButton } from "./AddRitualButton"
import { RitualTable } from "./RitualTable"

export interface Props {
  dispatch: DispatchAction<symbol, Payload>
}

export const Rituals: FC<Props> = ({ dispatch }) => {
  return (
    <RitualTable
      rituals={ritualData}
      ActionButton={AddRitualButton}
      dispatch={dispatch}
    />
  )
}
