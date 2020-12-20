import { ProjectileDispatch } from ".."
import { GearWeaponsProjectile } from "../../../../../types/Resources"
import { AddButton } from "../../../../common"

export interface Props {
  dispatch: ProjectileDispatch
  weapon: GearWeaponsProjectile
}

export const AddProjectileButton = ({ dispatch, weapon }) => (
  <AddButton
    aria-label={`Add ${weapon.name}`}
    onClick={() => dispatch({ type: undefined, payload: weapon })}
  />
)
