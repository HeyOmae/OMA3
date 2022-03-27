import { GearArmor } from "@/types/Resources"
import { FC, useMemo } from "react"

export interface Props {
  armor: GearArmor
}

export const RemainingArmorCapacity: FC<Props> = ({ armor }) => {
  // TODO: This hook is the same as the one in RemainingCapacity component, figure out how to refactor the typescript to make this work
  const usedCapacity =
    useMemo(
      () =>
        armor.mods?.reduce(
          (currentCapacity, { currentRating, useAs: [{ capacity }] }) =>
            (currentRating ?? capacity) + currentCapacity,
          0,
        ),
      [armor],
    ) ?? 0
  return (
    <dl>
      <dt>Capacity:</dt>
      <dd>
        {usedCapacity}/{armor.modifications.itemhookmod.capacity}
      </dd>
    </dl>
  )
}
