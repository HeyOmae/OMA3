import { FC, useEffect, useState } from "react"
import { useIndexedDB } from "react-indexed-db-hook"
import { CircularProgress } from "@mui/material"
import { Runner } from "../../types/runner"
import { migrateIfOutdated } from "@/hooks/runnerSchema"
import type { StoredRunner } from "@/hooks/migrations/storedRunner"

interface RenderProps {
  runners: Runner[]
  add: (value: Runner) => Promise<number>
}

interface Props {
  children: (args: RenderProps) => JSX.Element
}

export const AllRunnersAccess: FC<Props> = ({ children }) => {
  const { getAll, add } = useIndexedDB("runners")
  const [runners, setRunners] = useState<Runner[]>()
  useEffect(() => {
    void getAll<StoredRunner>()
      .then((loadedRunners) =>
        Promise.all(loadedRunners.map((runner) => migrateIfOutdated(runner))),
      )
      .then(setRunners)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return runners ? <>{children({ runners, add })}</> : <CircularProgress />
}

export default AllRunnersAccess
