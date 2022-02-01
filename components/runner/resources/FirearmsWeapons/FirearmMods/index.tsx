import { mods } from "@/data/firearms"
import { FirearmMod } from "@/types/Resources"
import { Grid } from "@mui/material"
import { GearTable } from "../../GearPageTemplate/GearTable"
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

export const FirearmMods = () => (
  <>
    <Grid item md={6}>
      <GearTable listOfGear={mods} cols={buyModCol} />
    </Grid>
  </>
)
