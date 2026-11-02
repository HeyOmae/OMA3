import { defined } from "@/components/util"
import { Runner } from "@/types/runner"
import { FC } from "react"
import styles from "./RemainingKnowledgePoints.module.css"
import { PointsHud } from "@/components/layout/hud"

interface Props {
  runner: Runner
}

export const RemainingKnowledgePoints: FC<Props> = ({ runner }) => (
  <PointsHud>
    <dl className={styles.points}>
      <dt aria-label="Knowledge Points">Knowledge Points</dt>
      <dd aria-label="Knowledge Points Value">
        {Math.max(findKnowledgePointsSpend(runner), 0)}
      </dd>
    </dl>
  </PointsHud>
)

export function findKnowledgePointsSpend(runner: Runner) {
  const { adjustment, points } = defined(runner.attributes?.Logic, "Logic")
  return (
    adjustment +
    points +
    1 -
    (runner.knowledge?.length ?? 0) -
    (runner.language?.reduce((points, { rating }) => {
      if (rating === "Native") return points
      return points + rating
    }, 0) ?? 0)
  )
}
