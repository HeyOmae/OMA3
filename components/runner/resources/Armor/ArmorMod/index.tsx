import { mods } from "@/data/armor"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { defined } from "@/components/util"
import { modGearReducer } from "../../GearPageTemplate/GearModPageTemplate"
import { Gear } from "@/types/Resources"
import { CircularProgress, Grid } from "@mui/material"
import { useRouter } from "next/router"
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
import { PURCHASED_GEAR_ID } from "../../GearPageTemplate/GearTable/ResourceButtons"

const buyModCol: Columns<Gear>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.setRating,
  gearCapacityConfigOption,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]
const sellModCol: Columns<Gear>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  gearCapacityConfigOption,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

const ArmorMods = () => {
  const gearIndex = Number(useRouter().query.gearIndex),
    [runner, dispatch] = useRunnerAccess(modGearReducer("armor", gearIndex))

  if (runner) {
    const armor = defined(runner.resources?.armor, "armor")[gearIndex]
    // a mod can't be rated higher than the armor's capacity
    const modsWithMaxRating = mods.map((mod) => ({
      ...mod,
      maxRating: getModCapacity(armor),
    }))
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
            <Grid id={PURCHASED_GEAR_ID} size={{ md: 6 }}>
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
