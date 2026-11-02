import { GearArmor } from "@/types/Resources"
import { FC } from "react"
import { getModCapacity, usedCapacity } from "../../util"
import { PointsHud } from "@/components/layout/hud"

export interface Props {
  armor: GearArmor
}

export const RemainingArmorCapacity: FC<Props> = ({ armor }) => (
  <PointsHud>
    <dl>
      <dt>Capacity:</dt>
      <dd>
        {usedCapacity(armor)}/{getModCapacity(armor)}
      </dd>
    </dl>
  </PointsHud>
)
