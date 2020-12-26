import { FirearmsTable } from "./FirearmsTable"
import FirearmsData from "../../../../data/firearms"
import { GearWeaponFireArms } from "../../../../types/Resources"
import {
  DispatchAction,
  useRunnerAccess,
} from "../../../../hooks/useRunnerAccess"
import { AddFirearmsButton } from "./FirearmsTable/AddFirearmsButton"
import { CircularProgress } from "@material-ui/core"
import { RemainingNuyen } from "../RemainingNuyen"
import { RemoveFirearmsButton } from "./FirearmsTable/RemoveFirearmsButton"

export type Payload = GearWeaponFireArms | number

export type FirearmDispatch = DispatchAction<undefined, Payload>

const FirearmsWeapons = () => {
  const [runner, dispatch] = useRunnerAccess<undefined, Payload>(
    (runner, { payload }) => {
      if (typeof payload === "number") {
        return {
          ...runner,
          resources: {
            ...runner.resources,
            firearms: [
              ...runner.resources.firearms.slice(0, payload),
              ...runner.resources.firearms.slice(payload + 1),
            ],
          },
        }
      }
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
      <RemainingNuyen runner={runner} />
      <FirearmsTable
        weapons={FirearmsData}
        ActionButton={AddFirearmsButton}
        dispatch={dispatch}
      />
      {runner.resources?.firearms && (
        <>
          <h2>Purchased Firearms</h2>
          <FirearmsTable
            weapons={runner.resources.firearms}
            ActionButton={RemoveFirearmsButton}
            actionLabel="Sell"
            dispatch={dispatch}
          />
        </>
      )}
    </>
  ) : (
    <CircularProgress />
  )
}

export default FirearmsWeapons
