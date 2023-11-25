import { GearAugmentationUseAs } from "@/types/Resources"
import { Runner } from "@/types/runner"
import { useMemo } from "react"

const startingEss = 6

export const useRunnerEssence = (runner: Runner) =>
  useMemo(() => {
    const senstiveSystemModifier =
      (
        runner.qualities?.negative?.some(
          ({ name }) => name === "Sensitive System",
        )
      ) ?
        2
      : 1
    const usedEssFromCyber =
      runner.resources?.cyberware?.reduce(
        (ess, { useAs, currentRating = 1 }) => {
          const useage = useAs.find((mod) => "essence" in mod)
          const modifier = currentRating
          return (
            ess -
            +(useage as GearAugmentationUseAs).essence *
              modifier *
              senstiveSystemModifier
          )
        },
        startingEss,
      ) ?? startingEss
    const remainingEss =
      runner.resources?.bioware?.reduce(
        (ess, { useAs: { essence }, currentRating = 1 }) =>
          ess - +essence * currentRating * senstiveSystemModifier,
        usedEssFromCyber,
      ) ?? usedEssFromCyber
    // rounds the essence value to the nearist hundredth
    return Math.round((remainingEss + Number.EPSILON) * 100) / 100
  }, [runner])
