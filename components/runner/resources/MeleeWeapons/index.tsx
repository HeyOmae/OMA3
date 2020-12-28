import meleeData from "../../../../data/melee"
import { useRunnerAccess } from "../../../../hooks/useRunnerAccess"
import { GearWeaponMelee } from "../../../../types/Resources"
import { MeleeWeaponTable } from "./MeleeWeaponTable"
import { CircularProgress } from "@material-ui/core"
import { RemainingNuyen } from "../RemainingNuyen"
import { ResourceBreadCrumbs } from "../ResourceBreadCrumbs"
import { gearPageReducerGenerator, DispatchContext } from "../ulti"

export type Payload = GearWeaponMelee | number

export const MeleeWeapons = () => {
  const [runner, dispatch] = useRunnerAccess<undefined, Payload>(
    gearPageReducerGenerator("melee"),
  )
  return runner ? (
    <>
      <ResourceBreadCrumbs activePage="Melee Weapons" />
      <RemainingNuyen runner={runner} />
      <DispatchContext.Provider value={dispatch}>
        <MeleeWeaponTable listOfGear={meleeData} />
        {runner.resources?.melee && (
          <>
            <h2>Purchased Melee Weapons</h2>
            <MeleeWeaponTable
              listOfGear={runner.resources.melee}
              isForSelling
            />
          </>
        )}
      </DispatchContext.Provider>
    </>
  ) : (
    <CircularProgress />
  )
}

export default MeleeWeapons
