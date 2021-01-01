import { FC, useContext } from "react"
import { RemoveButton } from "../../../../common"
import { DispatchContext, RemoveGearButtonProps } from "../../ulti"

export const RemoveFirearmsButton: FC<RemoveGearButtonProps> = ({
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
