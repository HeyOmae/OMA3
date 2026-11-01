import { useRouter } from "next/router"
import { useEffect, Reducer, useReducer, useState } from "react"
import { useIndexedDB } from "react-indexed-db-hook"
import { Runner } from "../types/runner"
import { migrateIfOutdated } from "./runnerSchema"
import { defined } from "@/components/util"
import type { StoredRunner } from "./migrations/storedRunner"

export const useGetRunner = () => {
  const { getByID } = useIndexedDB("runners")
  const router = useRouter()
  const [runner, setRunner] = useState<Runner>()

  const { id } = router.query
  useEffect(() => {
    let isMounted = true

    void getByID<StoredRunner>(Number(id))
      .then((runner) => migrateIfOutdated(runner))
      .then((payload) => {
        if (isMounted) {
          setRunner(payload)
        }
      })

    return () => {
      isMounted = false
    }
  }, [getByID, id])

  return runner
}

// the payload can be left out only when the action doesn't need one
type Action<P> = { type: symbol } & (undefined extends P ? { payload?: P }
: { payload: P })
const DONE_LOADING = Symbol("DONE_LOADING")

interface DoneLoading {
  type: typeof DONE_LOADING
  payload: Runner | undefined
}

const isDoneLoading = <P>(
  action: Action<P> | DoneLoading,
): action is DoneLoading => action.type === DONE_LOADING

export type RunnerReducer<P> = Reducer<Runner, Action<P>>

export type DispatchAction<P> = (action: Action<P>) => void

// the runner is undefined while it loads
type UseRunnerAccess = <P>(
  reducer?: RunnerReducer<P>,
) => [runner: Runner | undefined, dispatch: DispatchAction<P>]

export const useRunnerAccess: UseRunnerAccess = <Payload>(
  reducer: RunnerReducer<Payload> = (runner) => runner,
) => {
  const { getByID, update } = useIndexedDB("runners")
  const router = useRouter()
  const [runner, dispatch] = useReducer(
    (state: Runner | undefined, action: Action<Payload> | DoneLoading) =>
      isDoneLoading(action) ?
        action.payload
        // nothing can change the runner before it has loaded
      : reducer(defined(state, "runner"), action),
    undefined,
  )

  const { id } = router.query
  useEffect(() => {
    let isMounted = true

    void getByID<StoredRunner>(Number(id))
      .then((runner) => migrateIfOutdated(runner))
      .then((payload) => {
        if (isMounted) {
          dispatch({ type: DONE_LOADING, payload })
        }
      })

    return () => {
      isMounted = false
    }
  }, [getByID, id])

  useEffect(() => {
    if (runner) void update(runner)
  }, [runner, update])

  return [runner, dispatch]
}
