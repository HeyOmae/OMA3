import { FC, useEffect, useState } from "react"
import { useIndexedDB } from "react-indexed-db"
import { CircularProgress } from "@material-ui/core"
import { Runner } from "../../types/runner"

interface RenderProps {
  runners: Runner[]
  add: (value: Runner) => Promise<any>
}

interface Props {
  children: (args: RenderProps) => JSX.Element
}

export const AllRunnersAccess: FC<Props> = ({ children }) => {
  const { getAll, add } = useIndexedDB("runners")
  const [runners, setRunners] = useState<Runner[]>()
  useEffect(() => {
    getAll<Runner>().then((loadedRunners) => setRunners(loadedRunners))
  }, [])
  return runners ? <>{children({ runners, add })}</> : <CircularProgress />
}

export default AllRunnersAccess
