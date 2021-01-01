import { FC, useContext } from "react"
import { AddButton } from "../../../../common"
import { AddGearButtonProps, DispatchContext } from "../../ulti"

export const AddFirearmsButton: FC<AddGearButtonProps> = ({ gear }) => {
  const dispatch = useContext(DispatchContext)
  return (
    <AddButton
      aria-label={`Add ${gear.name}`}
      onClick={() => dispatch({ type: undefined, payload: gear })}
    />
  )
}
