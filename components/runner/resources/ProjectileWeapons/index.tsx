import { CircularProgress } from "@material-ui/core"
import ProjectileData from "../../../../data/projectiles"
import {
  DispatchAction,
  useRunnerAccess,
} from "../../../../hooks/useRunnerAccess"
import { GearWeaponsProjectile } from "../../../../types/Resources"
import { ProjectileTable } from "./ProjectileTable"
import { AddProjectileButton } from "./ProjectileTable/AddProjectileButton"

export type Payload = GearWeaponsProjectile
export type ProjectileDispatch = DispatchAction<undefined, Payload>

export default () => {
  const [runner, dispatch] = useRunnerAccess<undefined, Payload>(
    (runner, { payload }) => {
      return {
        ...runner,
        resources: {
          ...runner.resources,
          projectile: [...(runner.resources?.projectile ?? []), payload],
        },
      }
    },
  )
  return runner ? (
    <>
      <ProjectileTable
        ActionButton={AddProjectileButton}
        dispatch={dispatch}
        weapons={ProjectileData}
      />
    </>
  ) : (
    <CircularProgress />
  )
}
