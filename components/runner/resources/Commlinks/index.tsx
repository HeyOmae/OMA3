import { commlinkData } from "@/data/electronics"
import { GearMatrixCommlink } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import { Columns, gearTableConfigOptions } from "../util"

type CommlinkCols = Columns<GearMatrixCommlink>[]

const baseCols: CommlinkCols = [
  gearTableConfigOptions.name,
  { label: "DR", display: ({ deviceRating }) => deviceRating },
  {
    label: "D/F",
    display: ({ matrixAttributes: { dataProcessing, firewall } }) =>
      `${dataProcessing}/${firewall}`,
  },
  {
    label: "Slots",
    display: ({ matrixAttributes }) => matrixAttributes.programs,
  },
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const buyCommlinkCols: CommlinkCols = [gearTableConfigOptions.buy, ...baseCols]

const sellCommlinkCols: CommlinkCols = [
  gearTableConfigOptions.sell,
  ...baseCols,
]

export const Commlinks = () => (
  <GearPageTemplate<GearMatrixCommlink>
    gearLabel="Commlinks"
    resourceKey="commlink"
    listOfGear={commlinkData}
    addGearTableConfig={buyCommlinkCols}
    removeGearTableConfig={sellCommlinkCols}
  />
)

export default Commlinks
