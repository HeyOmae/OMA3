import { FC, useMemo } from "react"
import { AdeptPower, MagRes, Ritual, Spells } from "../../../../types/MagRes"

export interface Props {
  magRes: MagRes
  rating: number
  adjustmentPoints: number
  spells?: Partial<Spells>
  rituals?: Ritual[]
  powers?: AdeptPower[]
}

export const RemainingSpells: FC<Props> = ({
  magRes,
  rating,
  adjustmentPoints,
  spells = {},
  rituals = [],
  powers = [],
}) => {
  const totalSpells = rating * 2,
    numberOfKnownSpells = useMemo(
      () =>
        Object.values(spells).reduce(
          (total, spellsInCategory) => total + spellsInCategory.length,
          0,
        ),
      [spells],
    ),
    remainingNumberOfSpells = totalSpells - numberOfKnownSpells - rituals.length

  const totalMagic = rating + adjustmentPoints,
    remainingPowerPoints = powers.reduce(
      (accumulator, { levels, level, cost }) =>
        accumulator - (levels ? (level ?? 1) * cost : cost),
      totalMagic,
    )

  return (
    <dl>
      {magRes !== "Adept" && (
        <>
          <dt>Spells Remaining</dt>
          <dd className={remainingNumberOfSpells < 0 ? "bad-stuff" : ""}>
            {remainingNumberOfSpells}/{totalSpells}
          </dd>
        </>
      )}
      {(magRes === "Adept" || magRes === "Mystic Adept") && (
        <>
          <dt>Power Points Left</dt>
          <dd>
            {remainingPowerPoints}/{totalMagic}
          </dd>
        </>
      )}
    </dl>
  )
}
