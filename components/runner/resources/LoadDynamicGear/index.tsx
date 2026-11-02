import { Gear, Resources } from "@/types/Resources"
import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import { CircularProgress } from "@mui/material"
import { defined, keyOf } from "@/components/util"
import { GearPageTemplate } from "../GearPageTemplate"
import { buyGearWithRatingCol, Columns, sellGearWithRatingCol } from "../util"

// a data module with a list of gear for each category in it
type GearData = Partial<Record<keyof Resources, Gear[]>>

export interface Props {
  importedGear: Promise<GearData>
  addGearTableConfig?: Columns<Gear>[]
  removeGearTableConfig?: Columns<Gear>[]
}

interface LoadedGear {
  gearKey: keyof Resources
  listOfGear: Gear[]
}

const LoadDynamicGear: FC<Props> = ({
  importedGear,
  addGearTableConfig = buyGearWithRatingCol,
  removeGearTableConfig = sellGearWithRatingCol,
}) => {
  const router = useRouter()
  const [loaded, setLoaded] = useState<LoadedGear>()

  // the route is /[gearType], so there is only ever one
  const [gearType] = [router.query.gearType].flat()

  useEffect(() => {
    void importedGear.then((gear) => {
      const gearKey = keyOf(String(gearType), gear)
      setLoaded({ gearKey, listOfGear: defined(gear[gearKey], gearKey) })
    })
  }, [gearType, importedGear])

  return (
    <>
      <h1>{gearType}</h1>
      {loaded ?
        <GearPageTemplate
          gearLabel={loaded.gearKey}
          resourceKey={loaded.gearKey}
          listOfGear={loaded.listOfGear}
          addGearTableConfig={addGearTableConfig}
          removeGearTableConfig={removeGearTableConfig}
        />
      : <CircularProgress />}
    </>
  )
}

export default LoadDynamicGear
