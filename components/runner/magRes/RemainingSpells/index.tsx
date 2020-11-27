import { FC, useMemo } from "react"
import {
  AdeptPower,
  ComplexForm,
  MagRes,
  Ritual,
  Spells,
} from "../../../../types/MagRes"

export interface Props {
  magRes: MagRes
  rating: number
  adjustmentPoints: number
  spells?: Partial<Spells>
  rituals?: Ritual[]
  powers?: AdeptPower[]
  complexForms?: ComplexForm[]
}

const magResWithSpells = ["Mystic Adept", "Full", "Aspected"]

export const RemainingSpells: FC<Props> = ({
  magRes,
  rating,
  adjustmentPoints,
  spells = {},
  rituals = [],
  powers = [],
  complexForms = [],
}) => {
  const totalSpells = rating * 2,
    numberOfKnownSpells = useMemo(
      () =>
        Object.values(spells).reduce(
          (total, spellsInCategory) => total + spellsInCategory.length,
          rituals.length,
        ),
      [spells, rituals],
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
      {magResWithSpells.includes(magRes) && (
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
      {magRes === "Technomancer" && (
        <>
          <dt>Complex Forms Remaining</dt>
          <dd
            className={totalSpells - complexForms.length < 0 ? "bad-stuff" : ""}
          >
            {totalSpells - complexForms.length}/{totalSpells}
          </dd>
        </>
      )}
    </dl>
  )
}
