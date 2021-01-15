import { FC, useContext } from "react"
import { AddButton, RemoveButton } from "@/components/common/index"
import {
  AddGearButtonProps,
  DispatchContext,
  RemoveGearButtonProps,
} from "../../../util"

export const AddResourceButton: FC<AddGearButtonProps> = ({ gear }) => {
  const dispatch = useContext(DispatchContext)
  return (
    <AddButton
      aria-label={`Add ${gear.name}`}
      onClick={() => dispatch({ type: undefined, payload: gear })}
    />
  )
}

export const RemoveResourceButton: FC<RemoveGearButtonProps> = ({
  gear: { name },
  index,
}) => {
  const dispatch = useContext(DispatchContext)
  return (
    <RemoveButton
      aria-label={`Remove ${name}`}
      onClick={() =>
        dispatch({
          type: undefined,
          payload: index,
        })
      }
    />
  )
}
