import { FC, useContext } from "react"
import { GearWeaponMelee } from "../../../../../types/Resources"
import { AddButton } from "../../../../common"
import { DispatchContext } from "../../ulti"

interface Props {
  meleeWeapon: GearWeaponMelee
}

export const AddMeleeWeaponButton: FC<Props> = ({ meleeWeapon }) => {
  const dispatch = useContext(DispatchContext)
  return (
    <AddButton
      aria-label={`Add ${meleeWeapon.name}`}
      onClick={() =>
        dispatch({
          type: undefined,
          payload: meleeWeapon,
        })
      }
    />
  )
}
