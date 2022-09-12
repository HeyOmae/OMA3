import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { GearDroneMod, GearMod, GearModdableRated } from "@/types/Resources"
import { CircularProgress, Grid } from "@mui/material"
import { useRouter } from "next/router"
import { DispatchContext } from "../util"
import { Props as GearPageProps } from "./"
import { GearTable } from "./GearTable"
import { RemainingCapacity } from "./RemainingCapacity"
import { RemainingCapacityCyberware } from "./RemainingCapacity/RemainingCapacityCyberware"
import { RemainingNuyen } from "./RemainingNuyen"
import { BreadCrumpOption, ResourceBreadCrumbs } from "./ResourceBreadCrumbs"

type DisplayCapacity =
  | typeof RemainingCapacity
  | typeof RemainingCapacityCyberware

interface GearModPageProps<G> extends GearPageProps<G> {
  previousPath: BreadCrumpOption
  CapacityDisplay?: false | DisplayCapacity
}

type ModsType = GearMod | GearDroneMod

export function GearModPageTemplate<G extends ModsType>({
  previousPath,
  resourceKey,
  listOfGear,
  addGearTableConfig,
  removeGearTableConfig,
  CapacityDisplay = RemainingCapacity,
}: GearModPageProps<G>) {
  const {
    query: { gearIndex },
  } = useRouter()
  const [runner, dispatch] = useRunnerAccess<ModsType>(
    (runner, { payload }) => {
      return {
        ...runner,
        resources: {
          ...runner.resources,
          [resourceKey]: [
            ...runner.resources[resourceKey].slice(0, gearIndex),
            {
              ...runner.resources[resourceKey][gearIndex],
              mods:
                typeof payload === "number"
                  ? [
                      ...runner.resources[resourceKey][gearIndex].mods.slice(
                        0,
                        payload,
                      ),
                      ...runner.resources[resourceKey][gearIndex].mods.slice(
                        payload + 1,
                      ),
                    ]
                  : [
                      ...(runner.resources[resourceKey][gearIndex]?.mods ?? []),
                      payload,
                    ],
            },
            ...runner.resources[resourceKey].slice(+gearIndex + 1),
          ],
        },
      }
    },
  )
  if (runner) {
    const gearBeingModded: GearModdableRated =
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
        {CapacityDisplay && <CapacityDisplay gear={gearBeingModded} />}
        <DispatchContext.Provider value={dispatch}>
          <Grid item md={6}>
            <GearTable listOfGear={listOfGear} cols={addGearTableConfig} />
          </Grid>

          {modsOnGear && (
            <Grid item md={6}>
              <h2>Mods on {gearName}</h2>
              <GearTable<ModsType>
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
