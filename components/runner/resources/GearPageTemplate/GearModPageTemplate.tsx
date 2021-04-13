import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { Gear, GearMod } from "@/types/Resources"
import { CircularProgress, Grid } from "@material-ui/core"
import React from "react"
import { DispatchContext } from "../util"
import { Props } from "./"
import { GearTable } from "./GearTable"
import { BreadCrumpOption, ResourceBreadCrumbs } from "./ResourceBreadCrumbs"

interface GearModPageProps<G> extends Props<G> {
  previousPath: BreadCrumpOption
  gearIndex: number
}

export function GearModPageTemplate<G extends GearMod>({
  previousPath,
  gearIndex,
  resourceKey,
  listOfGear,
  addGearTableConfig,
  removeGearTableConfig,
}: GearModPageProps<G>) {
  const [runner, dispatch] = useRunnerAccess<undefined, undefined>(
    (runner) => runner,
  )
  if (runner) {
    const gearBeingModded: Gear = runner.resources[resourceKey][gearIndex]
    const gearName = `${gearBeingModded.name} (${gearIndex})`
    const modsOnGear: G[] = runner.resources?.[resourceKey]?.[gearIndex].mods
    return (
      <>
        <ResourceBreadCrumbs
          activePage={gearName}
          previousPage={previousPath}
        />
        <DispatchContext.Provider value={dispatch}>
          <GearTable listOfGear={listOfGear} cols={addGearTableConfig} />

          {modsOnGear && (
            <Grid item md={6}>
              <h2>Mods on {gearName}</h2>
              <GearTable<G>
                cols={removeGearTableConfig}
                listOfGear={modsOnGear}
              />
            </Grid>
          )}
        </DispatchContext.Provider>
      </>
    )
  }
  return <CircularProgress />
}
