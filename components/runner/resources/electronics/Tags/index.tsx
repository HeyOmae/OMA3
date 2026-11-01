import { tagsData } from "@/data/electronics"

import { GearPageTemplate } from "../../GearPageTemplate"
import { buyElectronicCol, sellElectronicCol } from "../utils"

const Tags = () => (
  <GearPageTemplate
    gearLabel="RFID Tags"
    resourceKey="tags"
    listOfGear={tagsData}
    addGearTableConfig={buyElectronicCol}
    removeGearTableConfig={sellElectronicCol}
  />
)

export default Tags
