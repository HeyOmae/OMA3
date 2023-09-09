import { FC, useMemo } from "react"
import { Runner } from "@/types/runner"

export interface Props {
  runner: Runner
  baseMagic: number
}

const magResWithSpells = ["Mystic Adept", "Full", "Aspected"]

export const RemainingSpells: FC<Props> = ({ runner, baseMagic: rating }) => {
  const {
    magres,
    spells = {},
    rituals = [],
    powers = [],
    complexForms = [],
    attributes: { Magic },
  } = runner
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
      Magic.adjustment +
      (Magic?.karma ?? 0) -
      Math.round((magres === "Mystic Adept" ? numberOfKnownSpells : 0) / 2)
    return [
      powerPointsTotal,
      powers.reduce(
        (accumulator, { levels, level, cost }) =>
          accumulator - (levels ? (level ?? 1) * cost : cost),
        powerPointsTotal,
      ),
    ]
  }, [magres, rating, Magic, numberOfKnownSpells, powers])

  return (
    <dl>
      {magResWithSpells.includes(magres) && (
        <>
          <dt>Spells Remaining</dt>
          <dd
            aria-label="Spells Remaining Value"
            className={remainingNumberOfSpells < 0 ? "bad-stuff" : ""}
          >
            {remainingNumberOfSpells}/{totalSpells}
          </dd>
        </>
      )}
      {(magres === "Adept" || magres === "Mystic Adept") && (
        <>
          <dt>Power Points Left</dt>
          <dd
            aria-label="Power Points Left Value"
            className={remainingPowerPoints < 0 ? "bad-stuff" : ""}
          >
            {remainingPowerPoints}/{powerPointsTotal}
          </dd>
        </>
      )}
      {magres === "Technomancer" && (
        <>
          <dt>Complex Forms Remaining</dt>
          <dd
            aria-label="Complex Forms Remaining Value"
            className={totalSpells - complexForms.length < 0 ? "bad-stuff" : ""}
          >
            {totalSpells - complexForms.length}/{totalSpells}
          </dd>
        </>
      )}
    </dl>
  )
}
