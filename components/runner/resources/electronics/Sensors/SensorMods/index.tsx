import { sensorMods } from "@/data/mods"
import { Gear } from "@/types/Resources"
import { GearModPageTemplate } from "../../../GearPageTemplate/GearModPageTemplate"
import {
  Columns,
  gearTableConfigOptions,
  gearCapacityConfigOption,
  gearRatingTableConfigOption,
} from "../../../util"

type SensorModCols = Columns<Gear>
const baseCols: SensorModCols[] = [
  gearTableConfigOptions.name,
  gearCapacityConfigOption,
]
const buyCols: SensorModCols[] = [
    gearTableConfigOptions.buy,
    gearRatingTableConfigOption.setRating,
    ...baseCols,
  ],
  sellCols: SensorModCols[] = [
    gearTableConfigOptions.sell,
    gearRatingTableConfigOption.displayRating,
    ...baseCols,
  ]

const previousPath = { categoryPath: "sensor", label: "Sensor" }

const SensorMods = () => (
  <GearModPageTemplate<Gear>
    gearLabel="Sensor Mods"
    resourceKey="sensor"
    previousPath={previousPath}
    listOfGear={sensorMods}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)

export default SensorMods
