import { mods } from "@/data/armor"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { Gear } from "@/types/Resources"
import { CircularProgress, Grid } from "@mui/material"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { GearTable } from "../../GearPageTemplate/GearTable"
import { RemainingNuyen } from "../../GearPageTemplate/RemainingNuyen"
import { ResourceBreadCrumbs } from "../../GearPageTemplate/ResourceBreadCrumbs"
import {
  Columns,
  DispatchContext,
  gearCapacityConfigOption,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
  getModCapacity,
} from "../../util"
import { RemainingArmorCapacity } from "./RemainingArmorCapacity"

const buyModCol: Columns<Gear>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.setRating,
  gearCapacityConfigOption,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]
const sellModCol: Columns<Gear>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  gearCapacityConfigOption,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const ArmorMods = () => {
  const { query } = useRouter(),
    gearIndex = +query.gearIndex,
    [runner, dispatch] = useRunnerAccess<Gear>((runner, { payload }) => ({
      ...runner,
      resources: {
        ...runner.resources,
        armor: runner.resources.armor.toSpliced(gearIndex, 1, {
          ...runner.resources.armor[gearIndex],
          mods:
            typeof payload === "number" ?
              runner.resources.armor[gearIndex].mods.toSpliced(payload, 1)
            : [...(runner.resources.armor[gearIndex]?.mods ?? []), payload],
        }),
      },
    }))

  const modsWithMaxRating = useMemo(() => {
    const armor = runner?.resources.armor[gearIndex]

    if (armor) {
      return mods.map((mod) => ({
        ...mod,
        maxRating: getModCapacity(armor),
      }))
    }

    return mods
  }, [gearIndex, runner?.resources.armor])

  if (runner) {
    const armor = runner.resources.armor[gearIndex]
    const gearName = `${armor.name} (${gearIndex})`
    return (
      <>
        <ResourceBreadCrumbs
          activePage={gearName}
          previousPage={{
            label: "Armor",
            categoryPath: "armor",
          }}
        />
        <RemainingArmorCapacity armor={armor} />
        <RemainingNuyen runner={runner} />
        <DispatchContext.Provider value={dispatch}>
          <Grid size={{ md: 6 }}>
            <GearTable<Gear> listOfGear={modsWithMaxRating} cols={buyModCol} />
          </Grid>

          {armor.mods && (
            <Grid size={{ md: 6 }}>
              <h2>Mods on {gearName}</h2>
              <GearTable<Gear> cols={sellModCol} listOfGear={armor.mods} />
            </Grid>
          )}
        </DispatchContext.Provider>
      </>
    )
  }
  return <CircularProgress />
}

export default ArmorMods
