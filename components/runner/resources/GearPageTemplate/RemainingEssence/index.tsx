import { Runner } from "@/types/runner"
import { FC } from "react"
import { useRunnerEssence } from "@/hooks/useRunnerEssence"

interface Props {
  runner: Runner
}

export const RemainingEssence: FC<Props> = ({ runner }) => {
  const essence = useRunnerEssence(runner)
  return (
    <dl>
      <dt>Essence</dt>
      <dd>{essence}</dd>
    </dl>
  )
}
