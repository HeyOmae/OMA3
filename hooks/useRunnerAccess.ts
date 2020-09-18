import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useIndexedDB } from "react-indexed-db"
import { Runner } from "../types/runner"

export const useRunnerAccess = (): [
  Runner,
  (runner: Runner, key?: any) => Promise<any>
] => {
  const { getByID, update } = useIndexedDB("runners")
  const [runner, setRunner] = useState<Runner>()
  const router = useRouter()
  useEffect(() => {
    let isMounted = true
    const { id } = router.query
    getByID<Runner>(id as string).then((loadedRunner) => {
      if (isMounted) {
        setRunner(loadedRunner)
      }
    })
    return () => (isMounted = false)
  }, [])

  return [runner, update]
}
