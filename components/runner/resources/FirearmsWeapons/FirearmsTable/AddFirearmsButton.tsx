import { FC } from "react"
import { FirearmDispatch } from ".."
import { GearWeaponFireArms } from "../../../../../types/Resources"
import { AddButton } from "../../../../common"

interface Props {
  dispatch: FirearmDispatch
  weapon: GearWeaponFireArms
}

export const AddFirearmsButton: FC<Props> = ({ dispatch, weapon }) => (
  <AddButton
    aria-label={`Add ${weapon.name}`}
    onClick={() => dispatch({ type: undefined, payload: weapon })}
  />
)
