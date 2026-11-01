import { electronicAccessoriesData } from "@/data/electronics"
import { GearElectronic } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buyElectronicCol, sellElectronicCol } from "../utils"

const ElectronicAccessories = () => (
  <GearPageTemplate<GearElectronic>
    gearLabel="Electronic Accessories"
    resourceKey="electronicAccessories"
    listOfGear={electronicAccessoriesData}
    addGearTableConfig={buyElectronicCol}
    removeGearTableConfig={sellElectronicCol}
  />
)
export default ElectronicAccessories
