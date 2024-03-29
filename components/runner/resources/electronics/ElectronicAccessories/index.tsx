import { electronicAccessoriesData } from "@/data/electronics"
import { GearElectronicAccessory } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buyElectronicCol, sellElectronicCol } from "../utils"

const ElectronicAccessories = () => (
  <GearPageTemplate<GearElectronicAccessory>
    gearLabel="Electronic Accessories"
    resourceKey="electronicAccessories"
    listOfGear={electronicAccessoriesData}
    addGearTableConfig={buyElectronicCol}
    removeGearTableConfig={sellElectronicCol}
  />
)
export default ElectronicAccessories
