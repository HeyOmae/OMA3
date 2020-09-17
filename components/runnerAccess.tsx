import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useIndexedDB } from "react-indexed-db"
import { CircularProgress } from "@material-ui/core"
import { Runner } from "../types/runner"

export const RunnerAccess = ({
  children,
}: {
  children: (params: {
    runner: Runner
    update: (runner: Runner, key?: any) => Promise<any>
  }) => React.ReactNode
}) => {
  const { getByID, update } = useIndexedDB("runner")
  const router = useRouter()
  const [runner, setRunner] = useState<Runner>()
  useEffect(() => {
    const { id } = router.query
    getByID<Runner>(id as string).then((loadedRunner) =>
      setRunner(loadedRunner)
    )
  }, [])
  return runner ? <>{children({ runner, update })}</> : <CircularProgress />
}
