import { GearModdableRated } from "@/types/Resources"
import { FC, useMemo } from "react"

export interface Props {
  gear: GearModdableRated
}

export const RemainingCapacity: FC<Props> = ({ gear }) => {
  const usedCapacity =
    useMemo(
      () =>
        gear.mods?.reduce(
          (currentCapacity, { useAs: [{ capacity }], currentRating }) =>
            (currentRating ?? capacity) + currentCapacity,
          0,
        ),
      [gear],
    ) ?? 0
  return (
    <dl>
      <dt>Capacity:</dt>
      <dd>
        {usedCapacity}/
        {gear.rateMultiplier === "capacity cost"
          ? gear.currentRating
          : gear.useAs[0].capacity}
      </dd>
    </dl>
  )
}
