import { AdeptPower, SpellCategory, SpiritTypes } from "@/types/MagRes"
import { TableCell, TableRow } from "@mui/material"
import { createContext, useMemo, useState } from "react"
import { FC } from "react"
import { Props } from "../index"
import powerData from "@/data/adeptPowers.json"
import { Columns } from "@/components/runner/resources/util"
import { GearFocus, GearWeaponMelee } from "@/types/Resources"
import { useGetRunner } from "@/hooks/useRunnerAccess"
import { CircularProgress } from "@mui/material"
import { spirits } from "@/data/spirits"

export interface ChoiceRatingRowProps extends Props {
  cols: Columns<GearFocus>[]
  gear: GearFocus
}

type ChoiceType =
  | AdeptPower
  | { name: SpellCategory | SpiritTypes }
  | GearWeaponMelee

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
      case "ADEPT_POWER":
      default:
        return powerData as AdeptPower[]
    }
  }, [gear, runner])
  const [currentRating, setRating] = useState(gear.minRating ?? 1)
  const [selectedChoiceIndex, setChoiceIndex] = useState<SelectedChoiceIndex>(0)
  const gearWithChoice = useMemo(
    () => ({
      ...gear,
      name: `${choices[selectedChoiceIndex]?.name ?? ""} ${gear.name}`,
      currentRating,
      cost: gear.cost * currentRating,
    }),
    [gear, choices, selectedChoiceIndex, currentRating],
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
            {choices.length ? (
              display(gearWithChoice, index, setRating)
            ) : (
              <CircularProgress />
            )}
          </TableCell>
        ))}
      </TableRow>
    </ChoiceContext.Provider>
  )
}
