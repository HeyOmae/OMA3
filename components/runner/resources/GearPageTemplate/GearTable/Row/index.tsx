import { createContext, useMemo, useState } from "react"
import { Gear } from "@/types/Resources"
import { TableCell, TableRow } from "@mui/material"
import { Columns } from "../../../util"
import { useRating } from "./useRating"
import skillData from "@/data/skills"

export interface Props<G extends Gear = Gear> {
  cols: Columns<G>[]
  gear: G
  index: number
}

export const StandardDisplayRow = <G extends Gear>({
  cols,
  gear,
  index,
}: Props<G>) => (
  <TableRow>
    {cols.map(({ display, label }) => (
      <TableCell key={label}>{display(gear, index)}</TableCell>
    ))}
  </TableRow>
)

export const RatingRow = <G extends Gear>({ cols, gear, index }: Props<G>) => {
  const [gearWithRating, setRating] = useRating(gear)

  // Cols live at /components/runner/resources/util/configOptions.tsx
  // Or with the gear using this row
  return (
    <TableRow>
      {cols.map(({ display, label }) => (
        <TableCell key={label}>
          {display(gearWithRating, index, setRating)}
        </TableCell>
      ))}
    </TableRow>
  )
}

interface SkillContextValue {
  selectedSkill: string
  setSkill: (skill: string) => void
}

export const SkillContext = createContext<SkillContextValue | undefined>(
  undefined,
)

export const SelectSkillRow = <G extends Gear>({
  cols,
  gear,
  index,
}: Props<G>) => {
  const [selectedSkill, setSkill] = useState(skillData[0].name)
  const gearWithSkillName = useMemo(
    () => ({
      ...gear,
      name: `${selectedSkill} ${gear.name}`,
    }),
    [gear, selectedSkill],
  )

  return (
    <SkillContext.Provider value={{ selectedSkill, setSkill }}>
      <TableRow>
        {cols.map(({ display, label }) => (
          <TableCell key={label}>{display(gearWithSkillName, index)}</TableCell>
        ))}
      </TableRow>
    </SkillContext.Provider>
  )
}
