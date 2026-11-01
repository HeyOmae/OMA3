import { commlinkData } from "@/data/electronics"

import { GearPageTemplate } from "../../GearPageTemplate"
import { buyCommlinkCols, sellCommlinkCols } from "../utils"

export const Commlinks = () => (
  <GearPageTemplate
    gearLabel="Commlinks"
    resourceKey="commlink"
    listOfGear={commlinkData}
    addGearTableConfig={buyCommlinkCols}
    removeGearTableConfig={sellCommlinkCols}
  />
)

export default Commlinks
