import { Quality } from "@/types/Qualities"
import { RunnerAttributes } from "@/types/RunnerAttributes"
import { Runner } from "@/types/runner"
import { FC, useMemo } from "react"

interface Props {
  runner: Runner
  showQualityInfo?: boolean
}

export const RemainingKarma: FC<Props> = ({ runner, showQualityInfo }) => {
  const positiveQualityKarma = useMemo(
    () => totalKarmaFromQualities(runner?.qualities?.positive),
    [runner?.qualities?.positive],
  )
  const negativeQualityKarma = useMemo(
    () => totalKarmaFromQualities(runner?.qualities?.negative),
    [runner?.qualities?.negative],
  )
  const karmaSpendOnNuyen = runner.karmaToNuyen ?? 0
  const attributeKarma = useMemo(
    () => totalKarmaFromAttributes(runner?.attributes),
    [runner?.attributes],
  )
  return (
    <dl>
      <dt aria-label="Available Karma">Available Karma</dt>
      <dd aria-label="Available Karma Value">
        {50 -
          positiveQualityKarma +
          negativeQualityKarma -
          karmaSpendOnNuyen -
          attributeKarma}
      </dd>
      {showQualityInfo && (
        <>
          <dt aria-label="Qualities">Qualities</dt>
          <dd aria-label="Qualities Value">
            {(runner.qualities?.positive?.length ?? 0) +
              (runner.qualities?.negative?.length ?? 0)}
            /6
          </dd>
          <dt aria-label="Bonus Karma">Bonus Karma</dt>
          <dd aria-label="Bonus Karma Value">
            {negativeQualityKarma - positiveQualityKarma}/20
          </dd>
        </>
      )}
    </dl>
  )
}

function totalKarmaFromQualities(qualities: Quality[]) {
  if (qualities) {
    return qualities.reduce(
      (karmaTotal, { karma, currentLevel = 1 }) =>
        karmaTotal + karma * currentLevel,
      0,
    )
  }
  return 0
}

function totalKarmaFromAttributes(attributes: RunnerAttributes) {
  if (attributes) {
    return Object.values(attributes).reduce(
      (karmaTotal, { adjustment, points, karma }) => {
        const attributeBeforeKarma = adjustment + points + 1
        for (let i = 1; i <= karma; ++i) {
          karmaTotal += (attributeBeforeKarma + i) * 5
        }
        return karmaTotal
      },
      0,
    )
  }
  return 0
}
