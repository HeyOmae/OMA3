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
          accumulator[0] + adjustment,
          accumulator[1] + points,
        ],
        [0, 0]
      ),
    [runner.attributes]
  )
  return (
    <dl>
      <dt>Adjustment Points</dt>
      <dd>
        {(priorityData.metatypes[runner.priority.metatype]?.adjustmentPoints ??
          0) - adjustmentSpend}
      </dd>
      <dt>Attribute Points</dt>
      <dd>
        {(priorityData.attributes[runner.priority.attributes] ?? 0) -
          attributeSpend}
      </dd>
    </dl>
  )
}
