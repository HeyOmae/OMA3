import { Runner } from "@/types/runner"
import { FC } from "react"
import { useRunnerEssence } from "@/hooks/useRunnerEssence"
import { PointsHud } from "@/components/layout/hud"

interface Props {
  runner: Runner
}

export const RemainingEssence: FC<Props> = ({ runner }) => {
  const essence = useRunnerEssence(runner)
  return (
    <PointsHud>
      <dl>
        <dt>Essence</dt>
        <dd>{essence}</dd>
      </dl>
    </PointsHud>
  )
}
