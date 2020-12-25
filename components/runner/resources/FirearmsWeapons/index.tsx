import { FirearmsTable } from "./FirearmsTable"
import FirearmsData from "../../../../data/firearms"
import { GearWeaponFireArms } from "../../../../types/Resources"
import {
  DispatchAction,
  useRunnerAccess,
} from "../../../../hooks/useRunnerAccess"
import { AddFirearmsButton } from "./FirearmsTable/AddFirearmsButton"
import { CircularProgress } from "@material-ui/core"

export type Payload = GearWeaponFireArms

export type FirearmDispatch = DispatchAction<undefined, Payload>

const FirearmsWeapons = () => {
  const [runner, dispatch] = useRunnerAccess<undefined, Payload>(
    (runner, { payload }) => {
      return {
        ...runner,
        resources: {
          ...runner.resources,
          firearms: [...(runner.resources?.firearms ?? []), payload],
        },
      }
    },
  )
  return runner ? (
    <>
      <FirearmsTable
        weapons={FirearmsData}
        ActionButton={AddFirearmsButton}
        dispatch={dispatch}
      />
    </>
  ) : (
    <CircularProgress />
  )
}

export default FirearmsWeapons
