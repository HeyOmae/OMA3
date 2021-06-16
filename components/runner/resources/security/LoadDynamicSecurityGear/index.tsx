import { GearTyped } from "@/types/Resources"
import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import { GearPageTemplate } from "../../GearPageTemplate"
import { buyGearWithRatingCol, sellGearWithRatingCol } from "../../util"

const BreakingAndEntering: FC = () => {
  const router = useRouter()
  const [listOfGear, setListOfGear] = useState<GearTyped[]>()

  // I hate typecasting but I also hate writing pointless defensive code
  const securityType = router.query.securityType as string

  useEffect(() => {
    import("@/data/security").then((securityGear) =>
      setListOfGear(securityGear[securityType]),
    )
  }, [securityType])

  return (
    <GearPageTemplate<GearTyped>
      gearLabel={securityType}
      resourceKey={securityType}
      listOfGear={listOfGear}
      addGearTableConfig={buyGearWithRatingCol}
      removeGearTableConfig={sellGearWithRatingCol}
    />
  )
}

export default BreakingAndEntering
