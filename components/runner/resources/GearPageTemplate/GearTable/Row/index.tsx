import { FC, useMemo, useState } from "react"
import { Gear, GearTyped } from "@/types/Resources"
import { TableCell, TableRow } from "@mui/material"
import { Columns, getEssenceFromGear } from "../../../util"
import skillData from "@/data/skills.json"

export interface Props {
  cols: Columns<Gear, unknown>[]
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

interface RatingRowProps extends Props {
  cols: Columns<GearTyped>[]
  gear: GearTyped
}

export const RatingRow: FC<RatingRowProps> = ({ cols, gear, index }) => {
  const [currentRating, setRating] = useState(gear.minRating ?? 1)
  const gearWithRating = useMemo(() => {
    const { rateMultiplier } = gear
    // Currently everything gear with rating increases cost by rating
    const cost = /cost2/.test(rateMultiplier)
      ? currentRating * currentRating * gear.cost
      : gear.cost * currentRating
    const essence = /essence/.test(rateMultiplier)
      ? +getEssenceFromGear(gear) * currentRating
      : undefined

    return {
      ...gear,
      currentRating,
      essence,
      cost,
    }
  }, [currentRating, gear])

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

export interface SelectSkillProps extends Props {
  cols: Columns<Gear, string>[]
}

export const SelectSkillRow: FC<SelectSkillProps> = ({ cols, gear, index }) => {
  const [selectedSkill, setSkill] = useState(skillData[0].name)
  const gearWithSkillName = useMemo(
    () => ({
      ...gear,
      name: `${selectedSkill} ${gear.name}`,
    }),
    [gear, selectedSkill],
  )

  return (
    <TableRow>
      {cols.map(({ display, label }) => (
        <TableCell key={label}>
          {display(gearWithSkillName, index, setSkill, selectedSkill)}
        </TableCell>
      ))}
    </TableRow>
  )
}
