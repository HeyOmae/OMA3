import { FC } from "react"
import { Runner } from "../../../../types/runner"
import priorityData from "../../../../data/priorityTable.json"

export interface Props {
  runner: Runner
}

export const DisplayPoints: FC<Props> = ({ runner }) => (
  <dl>
    <dt>Adjustment Points</dt>
    <dd>
      {priorityData.metatypes[runner.priority.metatype]?.adjustmentPoints}
    </dd>
    <dt>Attribute Points</dt>
    <dd>{priorityData.attributes[runner.priority.attributes]}</dd>
  </dl>
)
