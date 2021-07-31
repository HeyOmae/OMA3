import { FC } from "react"
import { Payload, SET_POWER } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { AdeptPower } from "../../../../types/MagRes"
import { AddButton } from "../../../common"

interface Props {
  dispatch: DispatchAction<Payload>
  power: AdeptPower
}

export const AddAdeptPowerButton: FC<Props> = ({ dispatch, power }) => (
  <AddButton
    aria-label={`Add ${power.name}`}
    onClick={() => dispatch({ type: SET_POWER, payload: { power } })}
  />
)
