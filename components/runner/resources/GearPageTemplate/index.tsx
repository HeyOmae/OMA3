import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { CircularProgress, Grid } from "@material-ui/core"
import { ReactElement } from "react"
import { Gear } from "types/Resources"
import { GearTable } from "./GearTable"
import { RemainingNuyen } from "./RemainingNuyen"
import { ResourceBreadCrumbs } from "./ResourceBreadCrumbs"
import { DispatchContext, gearPageReducerGenerator, Columns } from "../util"

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
      <Grid container spacing={3}>
        <DispatchContext.Provider value={dispatch}>
          <Grid item md={6}>
            <GearTable<G> cols={addGearTableConfig} listOfGear={listOfGear} />
          </Grid>
          {runner.resources?.[resourceKey] && (
            <Grid item md={6}>
              <h2>Purchased {gearLabel}</h2>
              <GearTable<G>
                cols={removeGearTableConfig}
                listOfGear={runner.resources[resourceKey]}
              />
            </Grid>
          )}
        </DispatchContext.Provider>
      </Grid>
    </>
  ) : (
    <CircularProgress />
  )
}
