import { bne } from "@/data/security"
import { GearTyped } from "@/types/Resources"
import { FC } from "react"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buyGearWithRatingCol, sellGearWithRatingCol } from "../../util"

const BreakingAndEntering: FC = () => (
  <GearPageTemplate<GearTyped>
    gearLabel="Breaking And Entering"
    resourceKey="bne"
    listOfGear={bne}
    addGearTableConfig={buyGearWithRatingCol}
    removeGearTableConfig={sellGearWithRatingCol}
  />
)

export default BreakingAndEntering
