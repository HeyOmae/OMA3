import { commlinkData } from "@/data/electronics"
import { GearMatrixCommlink } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buyCommlinkCols, sellCommlinkCols } from "../utils"

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
