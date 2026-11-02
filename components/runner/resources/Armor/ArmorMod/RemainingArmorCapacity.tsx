import { GearArmor } from "@/types/Resources"
import { FC } from "react"
import { getModCapacity, usedCapacity } from "../../util"

export interface Props {
  armor: GearArmor
}

export const RemainingArmorCapacity: FC<Props> = ({ armor }) => (
  <dl>
    <dt>Capacity:</dt>
    <dd>
      {usedCapacity(armor)}/{getModCapacity(armor)}
    </dd>
  </dl>
)
