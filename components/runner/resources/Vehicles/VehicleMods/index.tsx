import { mods } from "@/data/vehicles"
import { GearDroneMod } from "@/types/Resources"
import React from "react"
import { GearModPageTemplate } from "../../GearPageTemplate/GearModPageTemplate"
import { Columns, gearTableConfigOptions } from "../../util"

type VehicleModCols = Columns<GearDroneMod>
const baseCols: VehicleModCols[] = [
  gearTableConfigOptions.name,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]
const buyCols: VehicleModCols[] = [gearTableConfigOptions.buy, ...baseCols],
  sellCols: VehicleModCols[] = [gearTableConfigOptions.sell, ...baseCols]

const previousPath = { categoryPath: "vehicles", label: "Vehicles" }

const VehicleMods = () => (
  <GearModPageTemplate<GearDroneMod>
    gearLabel="Vehicle Mods"
    resourceKey="vehicles"
    previousPath={previousPath}
    listOfGear={mods}
    addGearTableConfig={buyCols}
    removeGearTableConfig={sellCols}
    hasCapacity={false}
  />
)

export default VehicleMods
