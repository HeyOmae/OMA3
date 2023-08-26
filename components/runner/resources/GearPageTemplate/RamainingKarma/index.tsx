import { Quality } from "@/types/Qualities"
import { RunnerAttributes } from "@/types/RunnerAttributes"
import { Skills } from "@/types/Skill"
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
  const skillKarma = useMemo(
    () => totalKarmaFromSkills(runner?.skills),
    [runner?.skills],
  )
  return (
    <dl>
      <dt aria-label="Available Karma">Available Karma</dt>
      <dd aria-label="Available Karma Value">
        {50 -
          positiveQualityKarma +
          negativeQualityKarma -
          karmaSpendOnNuyen -
          attributeKarma -
          skillKarma}
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

function totalKarmaFromSkills(skills: Skills) {
  if (skills) {
    return Object.values(skills).reduce(
      (karmaTotal, { rating, karmaRating = 0 }) =>
        karmaTotal + findKarmaCostPerRating(karmaRating, rating),
      0,
    )
  }
  return 0
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
        const attributeRatingBeforeKarma = adjustment + points + 1
        return (
          karmaTotal + findKarmaCostPerRating(karma, attributeRatingBeforeKarma)
        )
      },
      0,
    )
  }
  return 0
}

function findKarmaCostPerRating(karmaPoints: number, baseRating: number) {
  let karmaTotal: number = 0
  for (let i = 1; i <= karmaPoints; ++i) {
    karmaTotal += (baseRating + i) * 5
  }
  return karmaTotal
}
