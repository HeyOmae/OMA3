import { FC } from "react"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import { CircularProgress } from "@material-ui/core"

const Skills: FC = () => {
  const [runner, dispatch] = useRunnerAccess((runner) => runner)
  return runner ? (
    <button onClick={() => dispatch({ type: "", payload: "" })}>
      {runner.name}
    </button>
  ) : (
    <CircularProgress />
  )
}

export default Skills
