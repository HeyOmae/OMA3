import armorData from "@/data/armor"
import { GearArmor } from "@/types/Resources"
import { GearPageTemplate } from "../GearPageTemplate"
import {
  gearTableConfigOptions,
  Columns,
  gearModableTableConfigOptions,
  getModCapacity,
} from "../util"

const baseCols: Columns<GearArmor>[] = [
  gearTableConfigOptions.name,
  { label: "DR", display: ({ armor }) => armor.rating },
  {
    label: "Cap",
    display: (armor) => getModCapacity(armor),
  },
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

const buyArmorCols: Columns<GearArmor>[] = [
  gearTableConfigOptions.buy,
  ...baseCols,
]

const sellArmorCols: Columns<GearArmor>[] = [
  gearTableConfigOptions.sell,
  ...baseCols,
  gearModableTableConfigOptions.mod,
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
