import { FC, useContext } from "react"
import { AddButton } from "../../../../common"
import { AddGearButtonProps, DispatchContext } from "../../ulti"

export const AddMeleeWeaponButton: FC<AddGearButtonProps> = ({
  gear: meleeWeapon,
}) => {
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
