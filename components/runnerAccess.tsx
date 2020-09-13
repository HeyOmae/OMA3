import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useIndexedDB } from "react-indexed-db"
import { CircularProgress } from "@material-ui/core"

export const RunnerAccess = ({ children }) => {
  const { getByID, update } = useIndexedDB("runner")
  const router = useRouter()
  const [runner, setRunner] = useState()
  useEffect(() => {
    const { id } = router.query
    getByID(id as string).then((loadedRunner) => setRunner(loadedRunner))
  }, [])
  return runner ? <>{children({ runner, update })}</> : <CircularProgress />
}
