import { createContext, FC, useMemo, useState } from "react"
import { TableCell, TableRow } from "@mui/material"
import { AmmoType, Gear, GearAmmo } from "@/types/Resources"
import { ammoTypes, caselessCostMultiplier } from "@/data/ammo"
import { Columns } from "../../../../util"
import { useRating } from "../useRating"

export interface AmmoRowProps {
  cols: Columns<Gear>[]
  gear: GearAmmo
  index: number
}

interface AmmoContextValue {
  regularOnly: boolean
  type: AmmoType
  setType: (type: AmmoType) => void
  caseless: boolean
  setCaseless: (caseless: boolean) => void
}

export const AmmoContext = createContext<AmmoContextValue>(null)

// Ammo is picked by type and whether it is caseless, then bought in bundles
// of rounds, which is the rating
export const AmmoRow: FC<AmmoRowProps> = ({ cols, gear, index }) => {
  const [type, setType] = useState<AmmoType>(gear.ammo.type)
  const [caseless, setCaseless] = useState(gear.ammo.caseless)
  const ammoOfType = useMemo(
    () => ({
      ...gear,
      name: `${caseless ? "Caseless " : ""}${type} ${gear.name}`,
      cost:
        gear.cost *
        ammoTypes[type].costMultiplier *
        (caseless ? caselessCostMultiplier : 1),
      ammo: { ...gear.ammo, type, caseless },
    }),
    [gear, type, caseless],
  )
  const [gearWithRating, setRating] = useRating(ammoOfType)

  return (
    <AmmoContext.Provider
      value={{
        regularOnly: !!gear.ammo.regularOnly,
        type,
        setType,
        caseless,
        setCaseless,
      }}
    >
      <TableRow>
        {cols.map(({ display, label }) => (
          <TableCell key={label}>
            {display(gearWithRating, index, setRating)}
          </TableCell>
        ))}
      </TableRow>
    </AmmoContext.Provider>
  )
}
