import { createContext, FC, useMemo, useState } from "react"
import { TableCell, TableRow } from "@mui/material"
import { Gear } from "@/types/Resources"
import { Columns } from "@/components/runner/resources/util"
import { Props } from "../index"
import { useRating } from "../useRating"

interface NamedRowProps extends Props {
  cols: Columns<Gear>[]
  gear: Gear
}

interface NameContextValue {
  gearName: string
  name: string
  setName: (name: string) => void
}

export const NameContext = createContext<NameContextValue | undefined>(
  undefined,
)

// Gear that needs the player to name it, like a mapsoft for a city
export const NamedRow: FC<NamedRowProps> = ({ cols, gear, index }) => {
  const [name, setName] = useState("")
  const [gearWithRating, setRating] = useRating(gear)
  const namedGear = useMemo(
    () => ({
      ...gearWithRating,
      name: `${name.trim()} ${gear.name}`.trim(),
    }),
    [gearWithRating, gear.name, name],
  )

  return (
    <NameContext.Provider value={{ gearName: gear.name, name, setName }}>
      <TableRow>
        {cols.map(({ display, label }) => (
          <TableCell key={label}>
            {display(namedGear, index, setRating)}
          </TableCell>
        ))}
      </TableRow>
    </NameContext.Provider>
  )
}
