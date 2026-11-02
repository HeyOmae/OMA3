import { Gear } from "@/types/Resources"
import { FC } from "react"
import { defined } from "@/components/util"
import { usedCapacity } from "../../util"
import { PointsHud } from "@/components/layout/hud"

export interface Props {
  gear: Gear
}

export const RemainingCapacity: FC<Props> = ({ gear }) => (
  <PointsHud>
    <dl>
      <dt>Capacity:</dt>
      <dd>
        {usedCapacity(gear)}/
        {gear.rateMultiplier === "capacity cost" ?
          gear.currentRating
        : defined(gear.useAs, "useAs")[0].capacity}
      </dd>
    </dl>
  </PointsHud>
)
