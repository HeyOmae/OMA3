import { riggerConsoleData } from "@/data/electronics"
import { GearMatrixCommlink } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buyCommlinkCols, sellCommlinkCols } from "../utils"

export const RiggerConsoles = () => (
  <GearPageTemplate<GearMatrixCommlink>
    gearLabel="Rigger Consoles"
    resourceKey="riggerConsole"
    listOfGear={riggerConsoleData}
    addGearTableConfig={buyCommlinkCols}
    removeGearTableConfig={sellCommlinkCols}
  />
)

export default RiggerConsoles
