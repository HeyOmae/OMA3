import { useMemo, useState } from "react"
import { GearWithRating } from "@/types/Resources"
import { getEssenceFromGear } from "../../../util"

const applyRating = <G extends GearWithRating>(
  gear: G,
  currentRating: number,
): G => {
  const { rateMultiplier } = gear
  // Currently everything gear with rating increases cost by rating
  const cost =
    /cost2/.test(rateMultiplier) ?
      currentRating * currentRating * gear.cost
    : gear.cost * currentRating
  const essence =
    /essence/.test(rateMultiplier) ?
      +getEssenceFromGear(gear) * currentRating
    : undefined

  return {
    ...gear,
    currentRating,
    essence,
    cost,
  } as G
}

// Keeps the rating of a row of gear, and returns the gear priced at that rating
export const useRating = <G extends GearWithRating>(gear: G) => {
  const [currentRating, setRating] = useState(gear.minRating ?? 1)
  const gearWithRating = useMemo(
    () => (gear.rating ? applyRating(gear, currentRating) : gear),
    [gear, currentRating],
  )

  return [gearWithRating, setRating] as const
}
