import { AdeptPower, SpellCategory, SpiritTypes } from "@/types/MagRes"
import { TableCell, TableRow } from "@mui/material"
import { createContext, useMemo, useState } from "react"
import { FC } from "react"
import { Props } from "../index"
import { useRating } from "../useRating"
import powerData from "@/data/adeptPowers.json"
import { Columns } from "@/components/runner/resources/util"
import { GearFocus, Gear, GearFirearm, GearWeapon } from "@/types/Resources"
import { useGetRunner } from "@/hooks/useRunnerAccess"
import { CircularProgress } from "@mui/material"
import { spirits } from "@/data/spirits"
import skillData from "@/data/skills.json"

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
        return runner?.resources?.firearms ?? []
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

  return (
    <ChoiceContext.Provider
      value={{
        choices,
        setChoiceIndex,
        selectedChoiceIndex: choices.length ? selectedChoiceIndex : "",
      }}
    >
      <TableRow>
        {cols.map(({ display, label }) => (
          <TableCell key={label}>
            {choices.length ?
              display(gearWithChoice, index, setRating)
            : <CircularProgress />}
          </TableCell>
        ))}
      </TableRow>
    </ChoiceContext.Provider>
  )
}
