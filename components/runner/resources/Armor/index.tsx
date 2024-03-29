import armorData from "@/data/armor"
import { GearArmor } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import {
  gearTableConfigOptions,
  Columns,
  gearModableTableConfigOptions,
} from "../util"

const baseCols: Columns<GearArmor>[] = [
  gearTableConfigOptions.name,
  { label: "DR", display: ({ armor }) => armor.rating },
  {
    label: "Cap",
    display: ({ modifications }) => modifications.itemhookmod.capacity,
  },
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

const buyArmorCols: Columns<GearArmor>[] = [
  gearTableConfigOptions.buy,
  ...baseCols,
]

const sellArmorCols: Columns<GearArmor>[] = [
  gearTableConfigOptions.sell,
  ...baseCols,
  gearModableTableConfigOptions.mod as any, // TODO: fix this hacky crap
]

export const Armor = () => (
  <GearPageTemplate<GearArmor>
    gearLabel="Armor"
    resourceKey="armor"
    listOfGear={armorData}
    addGearTableConfig={buyArmorCols}
    removeGearTableConfig={sellArmorCols}
  />
)

export default Armor
