import { FC } from "react"
import { Runner } from "../../../../types/runner"
import priorityData from "../../../../data/priorityTable.json"
import { useSpendPoints } from "../../../../hooks/useSpendPoints"

export interface Props {
  runner: Runner
}

export const DisplayPoints: FC<Props> = ({ runner }) => {
  const [adjustmentSpend, attributeSpend] = useSpendPoints(
    priorityData.metatypes[runner.priority.metatype].adjustmentPoints,
    priorityData.attributes[runner.priority.attributes],
    runner.attributes,
  )
  return (
    <dl>
      <dt>Adjustment Points</dt>
      <dd className={adjustmentSpend < 0 ? "bad-stuff" : ""}>
        {adjustmentSpend}
      </dd>
      <dt>Attribute Points</dt>
      <dd className={attributeSpend < 0 ? "bad-stuff" : ""}>
        {attributeSpend}
      </dd>
    </dl>
  )
}
