import { mods } from "@/data/firearms"
import { Gear } from "@/types/Resources"
import { defined } from "@/components/util"
import { GearModPageTemplate } from "../../GearPageTemplate/GearModPageTemplate"
import { Columns, gearTableConfigOptions } from "../../util"

const slotColumn: Columns<Gear> = {
  display: (gear) =>
    defined(gear.useAs, "useAs")
      .map(({ slot }) => slot || "INTEGRAL")
      .join(", "),
  label: "Slot",
}

const buyModCol: Columns<Gear>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  slotColumn,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]
const sellModCol: Columns<Gear>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  slotColumn,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const FirearmMods = () => (
  <GearModPageTemplate
    previousPath={{ label: "Firearms", categoryPath: "firearms" }}
    resourceKey="firearms"
    listOfGear={mods}
    addGearTableConfig={buyModCol}
    removeGearTableConfig={sellModCol}
    CapacityDisplay={false}
  />
)

export default FirearmMods
