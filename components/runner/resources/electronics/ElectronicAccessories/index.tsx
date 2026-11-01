import { electronicAccessoriesData } from "@/data/electronics"

import { GearPageTemplate } from "../../GearPageTemplate"
import { buyElectronicCol, sellElectronicCol } from "../utils"

const ElectronicAccessories = () => (
  <GearPageTemplate
    gearLabel="Electronic Accessories"
    resourceKey="electronicAccessories"
    listOfGear={electronicAccessoriesData}
    addGearTableConfig={buyElectronicCol}
    removeGearTableConfig={sellElectronicCol}
  />
)
export default ElectronicAccessories
