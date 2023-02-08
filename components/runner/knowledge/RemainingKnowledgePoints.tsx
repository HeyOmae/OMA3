import { Runner } from "@/types/runner"
import { FC } from "react"
import styles from "./RemainingKnowledgePoints.module.css"

interface Props {
  runner: Runner
}

export const RemainingKnowledgePoints: FC<Props> = ({ runner }) => (
  <dl className={styles.points}>
    <dd>Knowledge Points</dd>
    <dt>
      {runner.attributes.Logic.adjustment +
        runner.attributes.Logic.points +
        1 -
        (runner.knowledge?.length ?? 0)}
    </dt>
  </dl>
)
