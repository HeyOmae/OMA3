import { mods } from "@/data/firearms"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { FirearmMod } from "@/types/Resources"
import { CircularProgress, Grid } from "@mui/material"
import { useRouter } from "next/router"
import { GearTable } from "../../GearPageTemplate/GearTable"
import { ResourceBreadCrumbs } from "../../GearPageTemplate/ResourceBreadCrumbs"
import { Columns, gearTableConfigOptions } from "../../util"

const buyModCol: Columns<FirearmMod>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  {
    display: (gear) =>
      gear.useAs.map(({ slot }) => slot || "INTEGRAL").join(", "),
    label: "Slot",
  },
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export const FirearmMods = () => {
  const {
    query: { gearIndex },
  } = useRouter()
  const [runner] = useRunnerAccess<FirearmMod>((runner) => runner)
  return runner ? (
    <>
      <ResourceBreadCrumbs
        activePage={`${
          runner.resources.firearms[+gearIndex].name
        } (${gearIndex})`}
        previousPage={{
          label: "Firearms",
          categoryPath: "firearms",
        }}
      />
      <Grid item md={6}>
        <GearTable listOfGear={mods} cols={buyModCol} />
      </Grid>
    </>
  ) : (
    <CircularProgress />
  )
}
