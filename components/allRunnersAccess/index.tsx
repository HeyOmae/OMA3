import { useEffect, useState } from "react"
import { useIndexedDB } from "react-indexed-db"
import { CircularProgress } from "@material-ui/core"
import { Runner } from "../../types/runner"

export const AllRunnersAccess = ({ children }) => {
  const { getAll, add } = useIndexedDB("runner")
  const [runners, setRunners] = useState<Runner[]>()
  useEffect(() => {
    getAll<Runner>().then((loadedRunners) => setRunners(loadedRunners))
  })
  return runners ? <>{children({ runners, add })}</> : <CircularProgress />
}
