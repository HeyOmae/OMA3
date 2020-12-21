import { FC } from "react"
import { ProjectileDispatch } from ".."
import { GearWeaponsProjectile } from "../../../../../types/Resources"
import { RemoveButton } from "../../../../common"

interface Props {
  dispatch: ProjectileDispatch
  index: number
  weapon: GearWeaponsProjectile
}

export const RemoveProjectileButton: FC<Props> = ({
  index,
  weapon: { name },
  dispatch,
}) => (
  <RemoveButton
    aria-label={`Remove ${name}`}
    onClick={() => dispatch({ type: undefined, payload: index })}
  />
)
