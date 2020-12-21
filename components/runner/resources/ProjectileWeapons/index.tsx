import { CircularProgress } from "@material-ui/core"
import ProjectileData from "../../../../data/projectiles"
import {
  DispatchAction,
  useRunnerAccess,
} from "../../../../hooks/useRunnerAccess"
import { GearWeaponsProjectile } from "../../../../types/Resources"
import { ProjectileTable } from "./ProjectileTable"
import { AddProjectileButton } from "./ProjectileTable/AddProjectileButton"
import { RemoveProjectileButton } from "./ProjectileTable/RemoveProjectileButton"

export type Payload = GearWeaponsProjectile | number
export type ProjectileDispatch = DispatchAction<undefined, Payload>

export default () => {
  const [runner, dispatch] = useRunnerAccess<undefined, Payload>(
    (runner, { payload }) => {
      if (typeof payload === "number") {
        return {
          ...runner,
          resources: {
            ...runner.resources,
            projectile: [
              ...runner.resources.projectile.slice(0, payload),
              ...runner.resources.projectile.slice(payload + 1),
            ],
          },
        }
      }
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
        labelActionButton="Sell"
      />
      {runner.resources?.projectile && (
        <>
          <h2>Purchased Projectile Weapons</h2>
          <ProjectileTable
            ActionButton={RemoveProjectileButton}
            dispatch={dispatch}
            weapons={runner.resources.projectile}
          />
        </>
      )}
    </>
  ) : (
    <CircularProgress />
  )
}
