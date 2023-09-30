import { Runner } from "@/types/runner"
import { FC } from "react"
import styles from "./RemainingKnowledgePoints.module.css"

interface Props {
  runner: Runner
}

export const RemainingKnowledgePoints: FC<Props> = ({ runner }) => (
  <dl className={styles.points}>
    <dt aria-label="Knowledge Points">Knowledge Points</dt>
    <dd aria-label="Knowledge Points Value">
      {Math.max(findKnowledgePointsSpend(runner), 0)}
    </dd>
  </dl>
)

export function findKnowledgePointsSpend(runner: Runner) {
  return (
    runner.attributes.Logic.adjustment +
    runner.attributes.Logic.points +
    1 -
    (runner.knowledge?.length ?? 0) -
    (runner.language?.reduce((points, { rating }) => {
      if (rating === "Native") return points
      return points + rating
    }, 0) ?? 0)
  )
}
