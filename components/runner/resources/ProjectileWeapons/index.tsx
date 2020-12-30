import { CircularProgress } from "@material-ui/core"
import ProjectileData from "../../../../data/projectiles"
import {
  DispatchAction,
  useRunnerAccess,
} from "../../../../hooks/useRunnerAccess"
import { GearWeaponsProjectile } from "../../../../types/Resources"
import { ResourceBreadCrumbs } from "../ResourceBreadCrumbs"
import {
  addProjectileTableConfig,
  removeProjectileTableConfig,
} from "./ProjectileTable"
import { RemainingNuyen } from "../RemainingNuyen"
import { DispatchContext, gearPageReducerGenerator } from "../ulti"
import { GearTable } from "../GearTable"

export type Payload = GearWeaponsProjectile | number
export type ProjectileDispatch = DispatchAction<undefined, Payload>

export default () => {
  const [runner, dispatch] = useRunnerAccess<undefined, Payload>(
    gearPageReducerGenerator("projectile"),
  )
  return runner ? (
    <>
      <ResourceBreadCrumbs activePage="Projectiles" />
      <RemainingNuyen runner={runner} />
      <DispatchContext.Provider value={dispatch}>
        <GearTable
          listOfGear={ProjectileData}
          cols={addProjectileTableConfig}
        />
        {runner.resources?.projectile && (
          <>
            <h2>Purchased Projectile Weapons</h2>
            <GearTable
              cols={removeProjectileTableConfig}
              listOfGear={runner.resources.projectile}
            />
          </>
        )}
      </DispatchContext.Provider>
    </>
  ) : (
    <CircularProgress />
  )
}
