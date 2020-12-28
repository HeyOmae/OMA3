import { FC, useContext } from "react"
import { GearWeaponMelee } from "../../../../../types/Resources"
import { RemoveButton } from "../../../../common"
import { DispatchContext } from "../../ulti"

interface Props {
  meleeWeapon: GearWeaponMelee
  index: number
}

export const RemoveMeleeWeaponButton: FC<Props> = ({
  meleeWeapon: { name },
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
