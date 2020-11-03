import { FC, useMemo } from "react"
import { Spells } from "../../../../types/MagRes"

export interface Props {
  rating: number
  spells: Partial<Spells>
}

export const RemainingSpells: FC<Props> = ({ rating, spells }) => {
  const totalSpells = rating * 2,
    numberOfKnownSpells = useMemo(
      () =>
        Object.values(spells).reduce(
          (total, spellsInCategory) => total + spellsInCategory.length,
          0,
        ),
      [spells],
    ),
    remainingNumberOfSpells = totalSpells - numberOfKnownSpells

  return (
    <dl>
      <dt>Spells Remaining</dt>
      <dd className={remainingNumberOfSpells < 0 ? "bad-stuff" : ""}>
        {remainingNumberOfSpells}/{totalSpells}
      </dd>
    </dl>
  )
}
