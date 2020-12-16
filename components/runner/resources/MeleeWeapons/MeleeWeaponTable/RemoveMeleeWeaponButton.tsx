import { FC } from "react"
import { Payload } from ".."
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { GearWeaponMelee } from "../../../../../types/Resources"
import { RemoveButton } from "../../../../common"

interface Props {
  meleeWeapon: GearWeaponMelee
  index: number
  dispatch: DispatchAction<undefined, Payload>
}

export const RemoveMeleeWeaponButton: FC<Props> = ({
  dispatch,
  meleeWeapon: { name },
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
