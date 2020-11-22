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
          rituals.length,
        ),
      [rituals],
    ),
    remainingNumberOfSpells = totalSpells - numberOfKnownSpells

  const [powerPointsTotal, remainingPowerPoints] = useMemo(() => {
    const powerPointsTotal =
      rating +
      adjustmentPoints -
      Math.round((magRes === "Mystic Adept" ? numberOfKnownSpells : 0) / 2)
    return [
      powerPointsTotal,
      powers.reduce(
        (accumulator, { levels, level, cost }) =>
          accumulator - (levels ? (level ?? 1) * cost : cost),
        powerPointsTotal,
      ),
    ]
  }, [magRes, rating, adjustmentPoints, numberOfKnownSpells, powers])

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
          <dd className={remainingPowerPoints < 0 ? "bad-stuff" : ""}>
            {remainingPowerPoints}/{powerPointsTotal}
          </dd>
        </>
      )}
    </dl>
  )
}
