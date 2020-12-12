import { FC } from "react"
import { BUY_MELEE_WEAPON, Payload } from ".."
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { GearWeaponMelee } from "../../../../../types/Resources"
import { AddButton } from "../../../../common"

interface Props {
  meleeWeapon: GearWeaponMelee
  dispatch: DispatchAction<symbol, Payload>
}

export const AddMeleeWeaponButton: FC<Props> = ({ meleeWeapon, dispatch }) => (
  <AddButton
    aria-label={`Add ${meleeWeapon.name}`}
    onClick={() =>
      dispatch({
        type: BUY_MELEE_WEAPON,
        payload: meleeWeapon,
      })
    }
  />
)
