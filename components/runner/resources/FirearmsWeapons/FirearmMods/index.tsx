import { mods } from "@/data/firearms"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { FirearmMod } from "@/types/Resources"
import { CircularProgress, Grid } from "@mui/material"
import { useRouter } from "next/router"
import { GearTable } from "../../GearPageTemplate/GearTable"
import { RemainingNuyen } from "../../GearPageTemplate/RemainingNuyen"
import { ResourceBreadCrumbs } from "../../GearPageTemplate/ResourceBreadCrumbs"
import { Columns, DispatchContext, gearTableConfigOptions } from "../../util"

const slotColumn: Columns<FirearmMod> = {
  display: (gear) =>
    gear.useAs.map(({ slot }) => slot || "INTEGRAL").join(", "),
  label: "Slot",
}

const buyModCol: Columns<FirearmMod>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  slotColumn,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]
const sellModCol: Columns<FirearmMod>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  slotColumn,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const FirearmMods = () => {
  const { query } = useRouter(),
    gearIndex = +query.gearIndex,
    [runner, dispatch] = useRunnerAccess<FirearmMod>((runner, { payload }) => ({
      ...runner,
      resources: {
        ...runner.resources,
        firearms: [
          ...runner.resources.firearms.slice(0, gearIndex),
          {
            ...runner.resources.firearms[gearIndex],
            mods:
              typeof payload === "number"
                ? [
                    ...runner.resources.firearms[gearIndex].mods.slice(
                      0,
                      payload,
                    ),
                    ...runner.resources.firearms[gearIndex].mods.slice(
                      payload + 1,
                    ),
                  ]
                : [
                    ...(runner.resources.firearms[gearIndex]?.mods ?? []),
                    payload,
                  ],
          },
          ...runner.resources.firearms.slice(gearIndex + 1),
        ],
      },
    }))

  if (runner) {
    const firearm = runner.resources.firearms[gearIndex]
    const gearName = `${firearm.name} (${gearIndex})`
    return (
      <>
        <ResourceBreadCrumbs
          activePage={gearName}
          previousPage={{
            label: "Firearms",
            categoryPath: "firearms",
          }}
        />
        <RemainingNuyen runner={runner} />
        <DispatchContext.Provider value={dispatch}>
          <Grid item md={6}>
            <GearTable<FirearmMod> listOfGear={mods} cols={buyModCol} />
          </Grid>

          {firearm.mods && (
            <Grid item md={6}>
              <h2>Mods on {gearName}</h2>
              <GearTable<FirearmMod>
                cols={sellModCol}
                listOfGear={firearm.mods}
              />
            </Grid>
          )}
        </DispatchContext.Provider>
      </>
    )
  }
  return <CircularProgress />
}

export default FirearmMods
