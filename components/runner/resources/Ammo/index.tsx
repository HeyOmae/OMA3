import ammo from "@/data/ammo"

import { GearPageTemplate } from "../GearPageTemplate"
import { buyAmmoCols, sellAmmoCols } from "./ammoTableConfig"

const Ammo = () => (
  <GearPageTemplate
    gearLabel="Ammo"
    resourceKey="ammo"
    listOfGear={ammo}
    addGearTableConfig={buyAmmoCols}
    removeGearTableConfig={sellAmmoCols}
  />
)

export default Ammo
