import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { Gear, Resources } from "@/types/Resources"
import { CircularProgress, Grid } from "@mui/material"
import { useRouter } from "next/router"
import { defined } from "@/components/util"
import { Columns, DispatchContext } from "../util"
import { GearTable } from "./GearTable"
import { RemainingCapacity } from "./RemainingCapacity"
import { RemainingCapacityCyberware } from "./RemainingCapacity/RemainingCapacityCyberware"
import { RemainingNuyen } from "./RemainingNuyen"
import { BreadCrumpOption, ResourceBreadCrumbs } from "./ResourceBreadCrumbs"

type DisplayCapacity =
  typeof RemainingCapacity | typeof RemainingCapacityCyberware

interface GearModPageProps<M> {
  previousPath: BreadCrumpOption
  // where the gear being modded is kept
  resourceKey: keyof Resources
  // the mods that can be put on the gear
  listOfGear: M[]
  addGearTableConfig: Columns<M>[]
  removeGearTableConfig: Columns<M>[]
  CapacityDisplay?: false | DisplayCapacity
}

export function GearModPageTemplate<M extends Gear>({
  previousPath,
  resourceKey,
  listOfGear,
  addGearTableConfig,
  removeGearTableConfig,
  CapacityDisplay = RemainingCapacity,
}: GearModPageProps<M>) {
  const gearIndex = Number(useRouter().query.gearIndex)
  const [runner, dispatch] = useRunnerAccess<Gear | number>(
    (runner, { payload }) => {
      const gearList: Gear[] = defined(
        runner.resources?.[resourceKey],
        resourceKey,
      )
      const gear = gearList[gearIndex]
      const mods =
        typeof payload === "number" ?
          defined(gear.mods, "mods").toSpliced(payload, 1)
        : [...(gear.mods ?? []), payload]

      return {
        ...runner,
        resources: {
          ...runner.resources,
          [resourceKey]: gearList.toSpliced(gearIndex, 1, { ...gear, mods }),
        },
      }
    },
  )
  if (runner) {
    const gearBeingModded: Gear = defined(
      runner.resources?.[resourceKey],
      resourceKey,
    )[gearIndex]
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
          <Grid size={{ md: 6 }}>
            <GearTable listOfGear={listOfGear} cols={addGearTableConfig} />
          </Grid>

          {modsOnGear && (
            <Grid size={{ md: 6 }}>
              <h2>Mods on {gearName}</h2>
              <GearTable cols={removeGearTableConfig} listOfGear={modsOnGear} />
            </Grid>
          )}
        </DispatchContext.Provider>
      </>
    )
  }
  return <CircularProgress />
}
