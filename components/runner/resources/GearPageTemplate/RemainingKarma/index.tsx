import { Quality } from "@/types/Qualities"
import { Skills } from "@/types/Skill"
import { Runner } from "@/types/runner"
import { FC, useMemo } from "react"
import { startingMagResRating } from "@/data/priorityTable"
import { isAwakened } from "@/types/MagRes"
import { findKnowledgePointsSpend } from "@/components/runner/knowledge/RemainingKnowledgePoints"
import { PointsHud } from "@/components/layout/hud"

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
    () => totalKarmaFromAttributes(runner),
    [runner],
  )
  const skillKarma = useMemo(
    () => totalKarmaFromSkills(runner?.skills),
    [runner?.skills],
  )
  const karmaFromInitiation = useMemo(
    () => totalKarmaForInitiationGrades(runner.initiation?.length),
    [runner.initiation],
  )
  const karmaFromSubmersion = useMemo(
    () => totalKarmaForInitiationGrades(runner.submersion?.length),
    [runner.submersion],
  )
  const karmaFromKnowledgePoints = useMemo(
    () => totalKarmaForKnowledgePointsSpend(runner),
    [runner],
  )
  const availableKarma =
    50 -
    positiveQualityKarma +
    negativeQualityKarma -
    karmaSpendOnNuyen -
    attributeKarma -
    skillKarma -
    karmaFromInitiation -
    karmaFromSubmersion -
    karmaFromKnowledgePoints
  return (
    <PointsHud>
      <dl>
        <dt aria-label="Available Karma">Available Karma</dt>
        <dd
          aria-label="Available Karma Value"
          className={availableKarma < 0 ? "bad-stuff" : ""}
        >
          {availableKarma}
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
              {Math.max(negativeQualityKarma - positiveQualityKarma, 0)}/20
            </dd>
          </>
        )}
      </dl>
    </PointsHud>
  )
}

function totalKarmaFromSkills(skills?: Skills) {
  if (skills) {
    return Object.values(skills).reduce(
      (karmaTotal, { rating, karmaRating = 0, expertise }) =>
        karmaTotal +
        findKarmaCostPerRating(karmaRating, rating) +
        (expertise ? 10 : 0),
      0,
    )
  }
  return 0
}

function totalKarmaFromQualities(qualities?: Quality[]) {
  if (qualities) {
    return qualities.reduce(
      (karmaTotal, { karma, currentLevel = 1 }) =>
        karmaTotal + karma * currentLevel,
      0,
    )
  }
  return 0
}

function totalKarmaFromAttributes(runner: Runner) {
  if (runner.attributes) {
    return Object.entries(runner.attributes).reduce(
      (karmaTotal, [name, { adjustment, points, karma }]) => {
        const baseAttribute =
            (
              name === "Magic" &&
              isAwakened(runner.magres) &&
              runner.priority?.["mag/res"] !== "E"
            ) ?
              startingMagResRating(runner.priority, runner.magres)
            : 1,
          attributeRatingBeforeKarma = adjustment + points + baseAttribute
        return (
          karmaTotal + findKarmaCostPerRating(karma, attributeRatingBeforeKarma)
        )
      },
      0,
    )
  }
  return 0
}

function findKarmaCostPerRating(karmaPoints = 0, baseRating: number) {
  let karmaTotal: number = 0
  for (let i = 1; i <= karmaPoints; ++i) {
    karmaTotal += (baseRating + i) * 5
  }
  return karmaTotal
}

function totalKarmaForInitiationGrades(grade: number = 0) {
  let karmaPoints = 0
  for (let i = 0; i < grade; ++i) {
    karmaPoints += 10 + i
  }
  return karmaPoints
}

function totalKarmaForKnowledgePointsSpend(runner: Runner) {
  if (!runner.attributes) return 0
  const pointsSpent = findKnowledgePointsSpend(runner)
  if (pointsSpent < 0) {
    return Math.abs(pointsSpent) * 3
  }
  return 0
}
