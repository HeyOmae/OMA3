import { AdeptPower, SpellCategory } from "@/types/MagRes"
import { TableCell, TableRow } from "@material-ui/core"
import { createContext, useMemo, useState } from "react"
import { FC } from "react"
import { Props } from "../index"
import powerData from "@/data/adeptPowers.json"
import { Columns } from "@/components/runner/resources/util"
import { GearFocus } from "@/types/Resources"

export interface ChoiceRatingRowProps extends Props {
  cols: Columns<GearFocus>[]
  gear: GearFocus
}

type ChoiceType = AdeptPower | { name: SpellCategory }

interface SelectChoiceContext {
  choices: ChoiceType[]
  setChoiceIndex: (index: number) => void
  selectedChoiceIndex: number
}

export const ChoiceContext = createContext<SelectChoiceContext>(null)

export const ChoiceRatingRow: FC<ChoiceRatingRowProps> = ({
  cols,
  gear,
  index,
}) => {
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
      case "ADEPT_POWER":
      default:
        return powerData as AdeptPower[]
    }
  }, [gear])
  const [currentRating, setRating] = useState(gear.minRating ?? 1)
  const [selectedChoiceIndex, setChoiceIndex] = useState<number>(0)
  const gearWithChoice = useMemo(
    () => ({
      ...gear,
      name: `${choices[selectedChoiceIndex].name} ${gear.name}`,
      currentRating,
    }),
    [selectedChoiceIndex],
  )

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
