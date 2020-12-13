import meleeData from "../../../../data/melee"
import { useRunnerAccess } from "../../../../hooks/useRunnerAccess"
import { GearWeaponMelee } from "../../../../types/Resources"
import { MeleeWeaponTable } from "./MeleeWeaponTable"
import { AddMeleeWeaponButton } from "./MeleeWeaponTable/AddMeleeWeaponButton"
import { CircularProgress } from "@material-ui/core"
import { RemainingNuyen } from "../RemainingNuyen"

export const BUY_MELEE_WEAPON = Symbol("BUY_MELEE_WEAPON")

export type Payload = GearWeaponMelee

export const MeleeWeapons = () => {
  const [runner, dispatch] = useRunnerAccess<symbol, Payload>(
    (runner, { payload }) => {
      return {
        ...runner,
        resources: {
          ...runner.resources,
          melee: [...(runner.resources?.melee ?? []), payload],
        },
      }
    },
  )
  return runner ? (
    <>
      <RemainingNuyen runner={runner} />
      <MeleeWeaponTable
        weapons={meleeData}
        dispatch={dispatch}
        ActionButton={AddMeleeWeaponButton}
      />
    </>
  ) : (
    <CircularProgress />
  )
}

export default MeleeWeapons
