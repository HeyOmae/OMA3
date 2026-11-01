import { getEssenceFromGear } from "@/components/runner/resources/util"
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
    const remainingEss = [
      ...(runner.resources?.cyberware ?? []),
      ...(runner.resources?.bioware ?? []),
    ].reduce(
      (ess, augmentation) =>
        ess -
        +getEssenceFromGear(augmentation) *
          (augmentation.currentRating ?? 1) *
          senstiveSystemModifier,
      startingEss,
    )
    // rounds the essence value to the nearist hundredth
    return Math.round((remainingEss + Number.EPSILON) * 100) / 100
  }, [runner])
