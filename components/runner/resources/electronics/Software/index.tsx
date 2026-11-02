import { defined } from "@/components/util"
import { softwareData } from "@/data/electronics"
import { Gear } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { ChoiceSelect } from "../../GearPageTemplate/GearTable/ResourceButtons/ChoiceSelect"
import { NameInput } from "../../GearPageTemplate/GearTable/ResourceButtons/NameInput"
import {
  Columns,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
} from "../../util"

type SoftwareCols = Columns<Gear>[]

const softwareCols: Record<string, Columns<Gear>> = {
  choice: {
    display: ({ choice }) => {
      switch (choice) {
        case "NAME":
          return <NameInput />
        case "WEAPON":
        case "PHYSICAL SKILL":
          return <ChoiceSelect />
        default:
          return "N/A"
      }
    },
    label: "Choice",
  },
  category: {
    display: ({ useAs }) => defined(useAs, "useAs")[0].subtype,
    label: "Category",
  },
  avail: {
    display: ({ availability, currentRating = 1, rateMultiplier = "" }) => {
      const [, baseAvail, restriction] = defined(
        availability.match(/(\d+)(\D*)/),
        "availability",
      )

      if (/avail3/.test(rateMultiplier)) {
        return `${Math.ceil(currentRating / 3)}${restriction}`
      } else if (/avail/.test(rateMultiplier)) {
        return `${+baseAvail * currentRating}${restriction}`
      }
      return availability
    },
    label: "Avail",
  },
}

const buyCols: SoftwareCols = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  softwareCols.choice,
  softwareCols.category,
  gearRatingTableConfigOption.setRating,
  softwareCols.avail,
  gearTableConfigOptions.cost,
]

const sellCols: SoftwareCols = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  softwareCols.category,
  gearRatingTableConfigOption.displayRating,
  softwareCols.avail,
  gearTableConfigOptions.cost,
]

const Software = () => (
  <GearPageTemplate
    gearLabel="Software"
    resourceKey="software"
    listOfGear={softwareData}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)

export default Software
