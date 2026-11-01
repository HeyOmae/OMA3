import { createContext, FC, useMemo, useState } from "react"
import { Gear } from "@/types/Resources"
import { TableCell, TableRow } from "@mui/material"
import { Columns } from "../../../util"
import { useRating } from "./useRating"
import skillData from "@/data/skills.json"

export interface Props {
  cols: Columns<Gear>[]
  gear: Gear
  index: number
}

export const StandardDisplayRow: FC<Props> = ({ cols, gear, index }) => (
  <TableRow>
    {cols.map(({ display, label }) => (
      <TableCell key={label}>{display(gear, index)}</TableCell>
    ))}
  </TableRow>
)

export const RatingRow: FC<Props> = ({ cols, gear, index }) => {
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

export const SkillContext = createContext<SkillContextValue>(null)

export const SelectSkillRow: FC<Props> = ({ cols, gear, index }) => {
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
