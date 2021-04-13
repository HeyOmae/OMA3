import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { GearMod, GearModRated } from "@/types/Resources"
import { CircularProgress, Grid } from "@material-ui/core"
import React from "react"
import { DispatchContext } from "../util"
import { Props as GearPageProps } from "./"
import { GearTable } from "./GearTable"
import { RemainingCapacity } from "./RemainingCapacity"
import { RemainingNuyen } from "./RemainingNuyen"
import { BreadCrumpOption, ResourceBreadCrumbs } from "./ResourceBreadCrumbs"

interface GearModPageProps<G> extends GearPageProps<G> {
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
    const gearBeingModded: GearModRated =
      runner.resources[resourceKey][gearIndex]
    const gearName = `${gearBeingModded.name} (${gearIndex})`
    const modsOnGear = gearBeingModded.mods
    return (
      <>
        <ResourceBreadCrumbs
          activePage={gearName}
          previousPage={previousPath}
        />
        <RemainingNuyen runner={runner} />
        <RemainingCapacity gear={gearBeingModded} />
        <DispatchContext.Provider value={dispatch}>
          <Grid item md={6}>
            <GearTable listOfGear={listOfGear} cols={addGearTableConfig} />
          </Grid>

          {modsOnGear && (
            <Grid item md={6}>
              <h2>Mods on {gearName}</h2>
              <GearTable<GearMod>
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
