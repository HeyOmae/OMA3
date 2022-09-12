import { GearCyberware, GearModUseAs } from "@/types/Resources"
import { FC, useMemo } from "react"

interface Props {
  gear: GearCyberware
}

export const RemainingCapacityCyberware: FC<Props> = ({ gear }) => {
  const { capacity, usedCapacity } = useMemo(() => {
    const { capacity } = gear.modifications.itemhookmod
    const usedCapacity =
      gear.mods?.reduce((currentCapacity, { useAs, currentRating }) => {
        const modCapacity: GearModUseAs = useAs.find(
          (useage: GearModUseAs) => "capacity" in useage,
        )
        return currentCapacity + (currentRating ?? modCapacity.capacity)
      }, 0) ?? 0
    return { capacity, usedCapacity }
  }, [gear])
  return (
    <dl>
      <dt>Capactiy: </dt>
      <dd>
        {usedCapacity}/{capacity}
      </dd>
    </dl>
  )
}
