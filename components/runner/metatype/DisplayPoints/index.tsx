import { FC, useMemo } from "react"
import { Runner } from "../../../../types/runner"
import priorityData from "../../../../data/priorityTable.json"

export interface Props {
  runner: Runner
}

export const DisplayPoints: FC<Props> = ({ runner }) => {
  const [adjustmentSpend, attributeSpend] = useMemo<[number, number]>(
    () =>
      Object.values(runner.attributes ?? {}).reduce(
        (accumulator, { adjustment, points }) => [
          accumulator[0] - adjustment,
          accumulator[1] - points,
        ],
        [
          priorityData.metatypes[runner.priority.metatype].adjustmentPoints,
          priorityData.attributes[runner.priority.attributes],
        ]
      ),
    [runner.attributes]
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
