import { GearTyped } from "@/types/Resources"
import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyGearWithRatingCol, sellGearWithRatingCol } from "../util"

interface Props {
  importedGear: Promise<Record<string, GearTyped[]>>
}

const LoadDynamicSecurityGear: FC<Props> = ({ importedGear }) => {
  const router = useRouter()
  const [listOfGear, setListOfGear] = useState<GearTyped[]>()

  // I hate typecasting but I also hate writing pointless defensive code
  const gearType = router.query.gearType as string

  useEffect(() => {
    importedGear.then((securityGear) => setListOfGear(securityGear[gearType]))
  }, [gearType])

  return (
    <>
      <h1>{gearType}</h1>
      <GearPageTemplate<GearTyped>
        gearLabel={gearType}
        resourceKey={gearType}
        listOfGear={listOfGear}
        addGearTableConfig={buyGearWithRatingCol}
        removeGearTableConfig={sellGearWithRatingCol}
      />
    </>
  )
}

export default LoadDynamicSecurityGear
