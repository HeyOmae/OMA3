import { useRouter } from "next/router"
import { useEffect, Reducer, useReducer, useState } from "react"
import { useIndexedDB } from "react-indexed-db-hook"
import { Runner } from "../types/runner"

export const useGetRunner = () => {
  const { getByID } = useIndexedDB("runners")
  const router = useRouter()
  const [runner, setRunner] = useState<Runner>()

  const { id } = router.query
  useEffect(() => {
    let isMounted = true

    getByID<Runner>(+id).then((payload) => {
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

interface Action<P> {
  type: symbol
  payload: P
}
const DONE_LOADING = Symbol("DONE_LOADING")

export type RunnerReducer<P> = Reducer<Runner, Action<P>>

export type DispatchAction<P> = (action: Action<P>) => void

type UseRunnerAccess = <P>(
  reducer: RunnerReducer<P>,
) => [runner: Runner, dispatch: DispatchAction<P>]

export const useRunnerAccess: UseRunnerAccess = <Payload>(
  reducer: RunnerReducer<Payload>,
) => {
  const { getByID, update } = useIndexedDB("runners")
  const router = useRouter()
  const [runner, dispatch] = useReducer(
    (state: Runner, action: Action<Runner | Payload>) => {
      if (action.type === DONE_LOADING) {
        // TODO: figure out how to remove this type casting
        return action.payload as Runner
      }
      return reducer(state, action as Action<Payload>)
    },
    undefined,
  )

  const { id } = router.query
  useEffect(() => {
    let isMounted = true

    getByID<Runner>(+id).then((payload) => {
      if (isMounted) {
        dispatch({ type: DONE_LOADING, payload })
      }
    })

    return () => {
      isMounted = false
    }
  }, [getByID, id])

  useEffect(() => {
    if (runner) update(runner)
  }, [runner, update])

  return [runner, dispatch]
}
