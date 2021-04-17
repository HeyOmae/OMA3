import { audioMods } from "@/data/mods"
import { GearMod, GearModRated } from "@/types/Resources"
import { GearModPageTemplate } from "../../../GearPageTemplate/GearModPageTemplate"
import {
  Columns,
  gearTableConfigOptions,
  gearCapacityConfigOption,
  gearRatingTableConfigOption,
} from "../../../util"

type AudioModCols = Columns<GearModRated>
const baseCols: AudioModCols[] = [
  gearTableConfigOptions.name,
  gearCapacityConfigOption,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]
const buyCols: AudioModCols[] = [
    gearTableConfigOptions.buy,
    gearRatingTableConfigOption.setRating,
    ...baseCols,
  ],
  sellCols: AudioModCols[] = [
    gearTableConfigOptions.sell,
    gearRatingTableConfigOption.displayRating,
    ...baseCols,
  ]

const previousPath = { categoryPath: "audio", label: "Audio" }

const AudioMods = () => (
  <GearModPageTemplate<GearMod>
    gearLabel="Audio Mods"
    resourceKey="audio"
    previousPath={previousPath}
    listOfGear={audioMods}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)

export default AudioMods
