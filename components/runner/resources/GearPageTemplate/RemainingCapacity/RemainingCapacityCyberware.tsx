import { GearCyberware } from "@/types/Resources"
import { FC } from "react"
import { getModCapacity, usedCapacity } from "../../util"
import { PointsHud } from "@/components/layout/hud"

interface Props {
  gear: GearCyberware
}

export const RemainingCapacityCyberware: FC<Props> = ({ gear }) => (
  <PointsHud>
    <dl>
      <dt>Capactiy: </dt>
      <dd>
        {usedCapacity(gear)}/{getModCapacity(gear)}
      </dd>
    </dl>
  </PointsHud>
)
