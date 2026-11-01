import { AdeptPower, SpellCategory, SpiritTypes } from "@/types/MagRes"
import { TableCell, TableRow } from "@mui/material"
import { createContext, useMemo, useState } from "react"
import { FC } from "react"
import { Props } from "../index"
import { useRating } from "../useRating"
import powerData from "@/data/adeptPowers.json"
import { Columns } from "@/components/runner/resources/util"
import { Gear, GearFirearm, GearFocus, GearWeapon } from "@/types/Resources"
import { useGetRunner } from "@/hooks/useRunnerAccess"
import { CircularProgress } from "@mui/material"
import { spirits } from "@/data/spirits"
import skillData from "@/data/skills.json"
import firearms from "@/data/firearms"

export interface ChoiceRatingRowProps extends Props {
  cols: Columns<GearFocus | Gear>[]
  gear: GearFocus | Gear
}

type ChoiceType =
  | AdeptPower
  | { name: SpellCategory | SpiritTypes | string }
  | GearWeapon
  | GearFirearm

type SelectedChoiceIndex = number | ""

export interface SelectChoiceContext {
  choices: ChoiceType[]
  setChoiceIndex: (index: number) => void
  selectedChoiceIndex: SelectedChoiceIndex
}

export const ChoiceContext = createContext<SelectChoiceContext>(null)

export const ChoiceRatingRow: FC<ChoiceRatingRowProps> = ({
  cols,
  gear,
  index,
}) => {
  const runner = useGetRunner()
  const choices: ChoiceType[] = useMemo(() => {
    switch (gear.choice) {
      case "SPELL_CATEGORY":
        return [
          { name: "Combat" },
          { name: "Detection" },
          { name: "Health" },
          { name: "Illusion" },
          { name: "Manipulation" },
        ]
      case "SPIRIT":
        return spirits
      case "MELEE_WEAPON":
        return runner?.resources?.melee ?? []
      case "WEAPON":
        // autosofts are skills for a model of weapon, not the runner's own gun
        return firearms
      case "PHYSICAL SKILL":
        // skills based on Magic or Resonance can not be replaced by software
        return skillData.filter(
          ({ category }) => !["Magic", "Resonance"].includes(category),
        )
      case "ADEPT_POWER":
      default:
        return powerData
    }
  }, [gear, runner])
  const [gearWithRating, setRating] = useRating(gear)
  const [selectedChoiceIndex, setChoiceIndex] = useState<SelectedChoiceIndex>(0)
  const gearWithChoice = useMemo(
    () => ({
      ...gearWithRating,
      name: `${choices[selectedChoiceIndex]?.name ?? ""} ${gear.name}`,
    }),
    [gearWithRating, gear.name, choices, selectedChoiceIndex],
  )

  // only weapon foci choose from the runner's gear, which can still be loading
  if (!choices.length) {
    return (
      <TableRow>
        <TableCell colSpan={cols.length}>
          {runner ?
            `${gear.name} needs a melee weapon, buy one first`
          : <CircularProgress />}
        </TableCell>
      </TableRow>
    )
  }

  return (
    <ChoiceContext.Provider
      value={{
        choices,
        setChoiceIndex,
        selectedChoiceIndex,
      }}
    >
      <TableRow>
        {cols.map(({ display, label }) => (
          <TableCell key={label}>
            {display(gearWithChoice, index, setRating)}
          </TableCell>
        ))}
      </TableRow>
    </ChoiceContext.Provider>
  )
}
