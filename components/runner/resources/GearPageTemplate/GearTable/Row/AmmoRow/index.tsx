import { createContext, useMemo, useState } from "react"
import { TableCell, TableRow } from "@mui/material"
import { AmmoType, GearAmmo } from "@/types/Resources"
import { ammoTypes, caselessCostMultiplier } from "@/data/ammo"
import { Props } from "../index"
import { useRating } from "../useRating"

interface AmmoContextValue {
  regularOnly: boolean
  type: AmmoType
  setType: (type: AmmoType) => void
  caseless: boolean
  setCaseless: (caseless: boolean) => void
}

export const AmmoContext = createContext<AmmoContextValue | undefined>(
  undefined,
)

// Ammo is picked by type and whether it is caseless, then bought in bundles
// of rounds, which is the rating
export const AmmoRow = <G extends GearAmmo>({
  cols,
  gear,
  index,
}: Props<G>) => {
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
