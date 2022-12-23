import { FC, useEffect, useState } from "react"
import { useIndexedDB } from "react-indexed-db-hook"
import { CircularProgress } from "@mui/material"
import { Runner } from "../../types/runner"

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
    getAll<Runner>().then((loadedRunners) => setRunners(loadedRunners))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return runners ? <>{children({ runners, add })}</> : <CircularProgress />
}

export default AllRunnersAccess
