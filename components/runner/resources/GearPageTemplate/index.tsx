import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { CircularProgress } from "@material-ui/core"
import { ReactElement } from "react"
import { Gear } from "types/Resources"
import { Columns, GearTable } from "../GearTable"
import { RemainingNuyen } from "../RemainingNuyen"
import { ResourceBreadCrumbs } from "../ResourceBreadCrumbs"
import { DispatchContext, gearPageReducerGenerator } from "../ulti"

export interface Props<G> {
  gearLabel: string
  resourceKey: string
  listOfGear: G[]
  addGearTableConfig: Columns<G>[]
  removeGearTableConfig: Columns<G>[]
}

type Payload<G> = G | number

export function GearPageTemplate<G extends Gear>({
  gearLabel,
  resourceKey,
  addGearTableConfig,
  removeGearTableConfig,
  listOfGear,
}: Props<G>): ReactElement {
  const [runner, dispatch] = useRunnerAccess<undefined, Payload<G>>(
    gearPageReducerGenerator(resourceKey),
  )
  return runner ? (
    <>
      <ResourceBreadCrumbs activePage={gearLabel} />
      <RemainingNuyen runner={runner} />
      <DispatchContext.Provider value={dispatch}>
        <GearTable<G> cols={addGearTableConfig} listOfGear={listOfGear} />
        {runner.resources?.[resourceKey] && (
          <>
            <h2>Purchased {gearLabel}</h2>
            <GearTable<G>
              cols={removeGearTableConfig}
              listOfGear={runner.resources[resourceKey]}
            />
          </>
        )}
      </DispatchContext.Provider>
    </>
  ) : (
    <CircularProgress />
  )
}
