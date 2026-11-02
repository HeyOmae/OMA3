import { GearCyberware } from "@/types/Resources"
import { FC } from "react"
import { getModCapacity, usedCapacity } from "../../util"

interface Props {
  gear: GearCyberware
}

export const RemainingCapacityCyberware: FC<Props> = ({ gear }) => (
  <dl>
    <dt>Capactiy: </dt>
    <dd>
      {usedCapacity(gear)}/{getModCapacity(gear)}
    </dd>
  </dl>
)
