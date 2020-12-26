import { FC } from "react"
import { FirearmDispatch } from ".."
import { GearWeaponFireArms } from "../../../../../types/Resources"
import { RemoveButton } from "../../../../common"

interface Props {
  weapon: GearWeaponFireArms
  index: number
  dispatch: FirearmDispatch
}

export const RemoveFirearmsButton: FC<Props> = ({
  weapon: { name },
  dispatch,
  index,
}) => (
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
