import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { CircularProgress, Grid } from "@mui/material"
import { ReactElement } from "react"
import { Gear, Resources } from "@/types/Resources"
import { GearTable } from "./GearTable"
import { RemainingNuyen } from "./RemainingNuyen"
import { ResourceBreadCrumbs } from "./ResourceBreadCrumbs"
import { DispatchContext, gearPageReducerGenerator, Columns } from "../util"
import { RemainingEssence } from "./RemainingEssence"

// the gear the runner keeps under this key of their resources
export type GearOf<K extends keyof Resources> = Resources[K][number]

export interface Props<K extends keyof Resources> {
  gearLabel: string
  resourceKey: K
  listOfGear: GearOf<K>[]
  addGearTableConfig: Columns<GearOf<K>>[]
  removeGearTableConfig: Columns<GearOf<K>>[]
  displayEssence?: boolean
}

export function GearPageTemplate<K extends keyof Resources>({
  gearLabel,
  resourceKey,
  addGearTableConfig,
  removeGearTableConfig,
  listOfGear,
  displayEssence,
}: Props<K>): ReactElement {
  const [runner, dispatch] = useRunnerAccess<Gear | number>(
    gearPageReducerGenerator(resourceKey),
  )
  const purchased: GearOf<K>[] | undefined = runner?.resources?.[resourceKey]

  return runner ?
      <>
        <ResourceBreadCrumbs activePage={gearLabel} />
        <RemainingNuyen runner={runner} />
        {displayEssence && <RemainingEssence runner={runner} />}
        <Grid container spacing={3}>
          <DispatchContext.Provider value={dispatch}>
            <Grid size={{ md: 6 }}>
              <GearTable<GearOf<K>>
                cols={addGearTableConfig}
                listOfGear={listOfGear}
              />
            </Grid>
            {purchased && (
              <Grid size={{ md: 6 }}>
                <h2>Purchased {gearLabel}</h2>
                <GearTable<GearOf<K>>
                  cols={removeGearTableConfig}
                  listOfGear={purchased}
                />
              </Grid>
            )}
          </DispatchContext.Provider>
        </Grid>
      </>
    : <CircularProgress />
}
