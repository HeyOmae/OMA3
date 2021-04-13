import { GearModRated } from "@/types/Resources"
import { FC, useMemo } from "react"

export interface Props {
  gear: GearModRated
}

export const RemainingCapacity: FC<Props> = ({ gear }) => {
  const usedCapacity =
    useMemo(
      () =>
        gear.mods?.reduce(
          (currentCapacity, { useAs: [{ capacity }] }) =>
            capacity + currentCapacity,
          0,
        ),
      [gear],
    ) ?? 0
  return (
    <dl>
      <dt>Capacity:</dt>
      <dd>
        {usedCapacity}/{gear.currentRating}
      </dd>
    </dl>
  )
}
