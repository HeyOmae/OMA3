import { useMemo } from "react"
import { RunnerAttributes } from "../types/RunnerAttributes"

export const useSpendPoints = (
  adjustmentPoints: number,
  attributePoints: number,
  attributes?: RunnerAttributes,
) =>
  useMemo<[number, number]>(
    () =>
      Object.values(attributes).reduce(
        (accumulator, { adjustment, points }) => [
          accumulator[0] - adjustment,
          accumulator[1] - points,
        ],
        [adjustmentPoints, attributePoints],
      ),
    [attributes, adjustmentPoints, attributePoints],
  )
