import ammo from "@/data/ammo"
import { GearAmmo } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyAmmoCols, sellAmmoCols } from "./ammoTableConfig"

const Ammo = () => (
  <GearPageTemplate<GearAmmo>
    gearLabel="Ammo"
    resourceKey="ammo"
    listOfGear={ammo}
    addGearTableConfig={buyAmmoCols}
    removeGearTableConfig={sellAmmoCols}
  />
)

export default Ammo
