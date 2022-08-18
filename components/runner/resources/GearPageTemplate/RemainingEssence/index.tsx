import { Runner } from "@/types/runner"
import { GearAugmentationUseAs } from "@/types/Resources"
import { FC, useMemo } from "react"

interface Props {
  runner: Runner
}

export const RemainingEssence: FC<Props> = ({ runner }) => {
  const Essence = useMemo(() => {
    const calculatedEss =
      runner.resources?.cyberware?.reduce(
        (ess, { useAs, currentRating = 1 }) => {
          const useage = useAs.find((mod) => "essence" in mod)
          const modifier = currentRating
          return ess - +(useage as GearAugmentationUseAs).essence * modifier
        },
        6,
      ) ?? 6
    // rounds the essence value to the nearist hundredth
    return Math.round((calculatedEss + Number.EPSILON) * 100) / 100
  }, [runner])
  return (
    <dl>
      <dt>Essence</dt>
      <dd>{Essence}</dd>
    </dl>
  )
}
