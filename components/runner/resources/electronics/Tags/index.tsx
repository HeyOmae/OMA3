import { tagsData } from "@/data/electronics"
import { GearElectronic } from "@/types/Resources"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buyElectronicCol, sellElectronicCol } from "../utils"

export default () => (
  <GearPageTemplate<GearElectronic>
    gearLabel="RFID Tags"
    resourceKey="tags"
    listOfGear={tagsData}
    addGearTableConfig={buyElectronicCol}
    removeGearTableConfig={sellElectronicCol}
  />
)
