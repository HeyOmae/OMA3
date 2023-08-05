import { FC } from "react"
import { Runner } from "@/types/runner"
import priorityData from "@/data/priorityTable.json"
import { useSpendPoints } from "@/hooks/useSpendPoints"
import { RemainingKarma } from "../../resources/GearPageTemplate/RamainingKarma"

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
    <>
      <dl>
        <dt aria-label="Adjustment Points">Adjustment Points</dt>
        <dd
          className={adjustmentSpend < 0 ? "bad-stuff" : ""}
          aria-label="Adjustment Points Value"
        >
          {adjustmentSpend}
        </dd>
        <dt aria-label="Attribute Points">Attribute Points</dt>
        <dd
          className={attributeSpend < 0 ? "bad-stuff" : ""}
          aria-label="Attribute Points Value"
        >
          {attributeSpend}
        </dd>
      </dl>
      <RemainingKarma runner={runner} />
    </>
  )
}
