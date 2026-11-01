import { imaging } from "@/data/imaging"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buySensorCols as buyCols, sellSensorCols as sellCols } from "../utils"

const Imaging = () => (
  <GearPageTemplate
    gearLabel="Imaging"
    resourceKey="imaging"
    listOfGear={imaging}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
  />
)

export default Imaging
