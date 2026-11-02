import { FC } from "react"
import { Runner } from "@/types/runner"
import { defined } from "@/components/util"
import priorityData from "@/data/priorityTable"
import { useSpendPoints } from "@/hooks/useSpendPoints"
import { RemainingKarma } from "../../resources/GearPageTemplate/RemainingKarma"
import { PointsHud } from "@/components/layout/hud"

export interface Props {
  runner: Runner
}

export const DisplayPoints: FC<Props> = ({ runner }) => {
  const [adjustmentSpend, attributeSpend] = useSpendPoints(
    priorityData.metatypes[defined(runner.priority?.metatype, "metatype")]
      .adjustmentPoints,
    priorityData.attributes[defined(runner.priority?.attributes, "attributes")],
    defined(runner.attributes, "attributes"),
  )
  return (
    <>
      <PointsHud>
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
      </PointsHud>
      <RemainingKarma runner={runner} />
    </>
  )
}
