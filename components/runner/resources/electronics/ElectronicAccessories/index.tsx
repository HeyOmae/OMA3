import { electronicAccessoriesData } from "@/data/electronics"
import { GearElectronicAccessory } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { Columns, gearTableConfigOptions } from "../../util"
import { gearMatrixTableConfigOptions } from "../utils"

type eACols = Columns<GearElectronicAccessory>[]

const baseCols: eACols = [
  gearTableConfigOptions.name,
  gearMatrixTableConfigOptions.deviceRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const buyEACol: eACols = [gearTableConfigOptions.buy, ...baseCols]
const sellEACol: eACols = [gearTableConfigOptions.sell, ...baseCols]

export default () => (
  <GearPageTemplate<GearElectronicAccessory>
    gearLabel="Electronic Accessories"
    resourceKey="electronicAccessories"
    listOfGear={electronicAccessoriesData}
    addGearTableConfig={buyEACol}
    removeGearTableConfig={sellEACol}
  />
)
