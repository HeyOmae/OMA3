import { FC } from "react"
import { Payload, SET_RITUAL } from ".."
import { DispatchAction } from "@/hooks/useRunnerAccess"
import { Ritual } from "@/types/MagRes"
import { AddButton } from "@/components/common"

interface Props {
  dispatch: DispatchAction<Payload>
  ritual: Ritual
}

export const AddRitualButton: FC<Props> = ({ dispatch, ritual }) => (
  <AddButton
    aria-label={`Add ${ritual.name}`}
    onClick={() => dispatch({ type: SET_RITUAL, payload: { ritual } })}
  />
)
