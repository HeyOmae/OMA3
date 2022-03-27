import { mods } from "@/data/armor"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { ArmorMod } from "@/types/Resources"
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
} from "../../util"
import { RemainingArmorCapacity } from "./RemainingArmorCapacity"

const buyModCol: Columns<ArmorMod>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.setRating,
  gearCapacityConfigOption,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]
const sellModCol: Columns<ArmorMod>[] = [
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
    [runner, dispatch] = useRunnerAccess<ArmorMod>((runner, { payload }) => ({
      ...runner,
      resources: {
        ...runner.resources,
        armor: [
          ...runner.resources.armor.slice(0, gearIndex),
          {
            ...runner.resources.armor[gearIndex],
            mods:
              typeof payload === "number"
                ? [
                    ...runner.resources.armor[gearIndex].mods.slice(0, payload),
                    ...runner.resources.armor[gearIndex].mods.slice(
                      payload + 1,
                    ),
                  ]
                : [...(runner.resources.armor[gearIndex]?.mods ?? []), payload],
          },
          ...runner.resources.armor.slice(gearIndex + 1),
        ],
      },
    }))

  const modsWithMaxRating = useMemo(() => {
    const armor = runner?.resources.armor[gearIndex]

    if (armor) {
      return mods.map((mod) => ({
        ...mod,
        maxRating: armor.modifications.itemhookmod.capacity,
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
          <Grid item md={6}>
            <GearTable<ArmorMod>
              listOfGear={modsWithMaxRating}
              cols={buyModCol}
            />
          </Grid>

          {armor.mods && (
            <Grid item md={6}>
              <h2>Mods on {gearName}</h2>
              <GearTable<ArmorMod> cols={sellModCol} listOfGear={armor.mods} />
            </Grid>
          )}
        </DispatchContext.Provider>
      </>
    )
  }
  return <CircularProgress />
}

export default ArmorMods
