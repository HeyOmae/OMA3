import { riggerConsoleData } from "@/data/electronics"

import { GearPageTemplate } from "../../GearPageTemplate"
import { buyCommlinkCols, sellCommlinkCols } from "../utils"

export const RiggerConsoles = () => (
  <GearPageTemplate
    gearLabel="Rigger Consoles"
    resourceKey="riggerConsole"
    listOfGear={riggerConsoleData}
    addGearTableConfig={buyCommlinkCols}
    removeGearTableConfig={sellCommlinkCols}
  />
)

export default RiggerConsoles
