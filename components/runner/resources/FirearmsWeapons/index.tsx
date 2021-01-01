import FirearmsData from "../../../../data/firearms"
import { GearWeaponFireArms } from "../../../../types/Resources"
import {
  DispatchAction,
  useRunnerAccess,
} from "../../../../hooks/useRunnerAccess"
import { CircularProgress } from "@material-ui/core"
import { RemainingNuyen } from "../RemainingNuyen"
import { DispatchContext, gearPageReducerGenerator } from "../ulti"
import { GearTable } from "../GearTable"
import {
  addFirearmsTableConfig,
  removeFirearmsTableConfig,
} from "./FirearmsTable"

export type Payload = GearWeaponFireArms | number

export type FirearmDispatch = DispatchAction<undefined, Payload>

const FirearmsWeapons = () => {
  const [runner, dispatch] = useRunnerAccess<undefined, Payload>(
    gearPageReducerGenerator("firearms"),
  )
  return runner ? (
    <>
      <RemainingNuyen runner={runner} />
      <DispatchContext.Provider value={dispatch}>
        <GearTable listOfGear={FirearmsData} cols={addFirearmsTableConfig} />
        {runner.resources?.firearms && (
          <>
            <h2>Purchased Firearms</h2>
            <GearTable
              listOfGear={runner.resources.firearms}
              cols={removeFirearmsTableConfig}
            />
          </>
        )}
      </DispatchContext.Provider>
    </>
  ) : (
    <CircularProgress />
  )
}

export default FirearmsWeapons
