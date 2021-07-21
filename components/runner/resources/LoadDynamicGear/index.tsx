import { Gear } from "@/types/Resources"
import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyGearWithRatingCol, Columns, sellGearWithRatingCol } from "../util"

export interface Props {
  importedGear: Promise<Record<string, Gear[]>>
  addGearTableConfig?: Columns<Gear>[]
  removeGearTableConfig?: Columns<Gear>[]
}

const LoadDynamicGear: FC<Props> = ({
  importedGear,
  addGearTableConfig = buyGearWithRatingCol,
  removeGearTableConfig = sellGearWithRatingCol,
}) => {
  const router = useRouter()
  const [listOfGear, setListOfGear] = useState<Gear[]>()

  // I hate typecasting but I also hate writing pointless defensive code
  const gearType = router.query.gearType as string

  useEffect(() => {
    importedGear.then((gear) => setListOfGear(gear[gearType]))
  }, [gearType])

  return (
    <>
      <h1>{gearType}</h1>
      <GearPageTemplate<Gear>
        gearLabel={gearType}
        resourceKey={gearType}
        listOfGear={listOfGear}
        addGearTableConfig={addGearTableConfig}
        removeGearTableConfig={removeGearTableConfig}
      />
    </>
  )
}

export default LoadDynamicGear
