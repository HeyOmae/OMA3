import { cyberdeckData } from "@/data/electronics"
import { GearMatrixCyberdeck } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { Columns, gearTableConfigOptions } from "../../util"
import { gearMatrixTableConfigOptions } from "../utils"

type CyberdeckCols = Columns<GearMatrixCyberdeck>[]

const baseCols: CyberdeckCols = [
  gearTableConfigOptions.name,
  gearMatrixTableConfigOptions.deviceRating,
  {
    label: "A/S",
    display: ({ matrixAttributes: { attack, sleaze } }) =>
      `${attack}/${sleaze}`,
  },
  gearMatrixTableConfigOptions.slots,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const buyCyberdeckCol: CyberdeckCols = [gearTableConfigOptions.buy, ...baseCols]
const sellCyberdeckCol: CyberdeckCols = [
  gearTableConfigOptions.sell,
  ...baseCols,
]

export const Cyberdecks = () => (
  <GearPageTemplate<GearMatrixCyberdeck>
    gearLabel="Cyberdecks"
    resourceKey="cyberdeck"
    listOfGear={cyberdeckData}
    addGearTableConfig={buyCyberdeckCol}
    removeGearTableConfig={sellCyberdeckCol}
  />
)

export default Cyberdecks
