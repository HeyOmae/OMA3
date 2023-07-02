import { Runner } from "@/types/runner"
import { GearAugmentationUseAs } from "@/types/Resources"
import { FC, useMemo } from "react"

interface Props {
  runner: Runner
}
const startingEss = 6

export const RemainingEssence: FC<Props> = ({ runner }) => {
  const essence = useMemo(() => {
    const senstiveSystemModifier = runner.qualities?.negative?.some(
      ({ name }) => name === "Sensitive System",
    )
      ? 2
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
  return (
    <dl>
      <dt>Essence</dt>
      <dd>{essence}</dd>
    </dl>
  )
}
