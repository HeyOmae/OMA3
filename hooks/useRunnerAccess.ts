import { useRouter } from "next/router"
import { useEffect, Reducer, useReducer } from "react"
import { useIndexedDB } from "react-indexed-db"
import { Runner } from "../types/runner"

interface Action<T, P> {
  type: T
  payload: P
}
const DONE_LOADING = Symbol("DONE_LOADING")
interface ActionDoneLoading {
  type: typeof DONE_LOADING
  payload: Runner
}

type LoadRunnerReducer<T, P> = Reducer<Runner, ActionDoneLoading | Action<T, P>>
type RunnerReducer<T, P> = Reducer<Runner, Action<T, P>>

export type DispatchAction<T, P> = (action: Action<T, P>) => void

type UseRunnerAccess = <T, P>(
  reducer: RunnerReducer<T, P>
) => [
  runner: Runner,
  dispatch: DispatchAction<T, P>,
  updateIndexedDb: (value: Runner, key?: any) => Promise<any>
]

export const useRunnerAccess: UseRunnerAccess = <T, P>(reducer) => {
  const { getByID, update } = useIndexedDB("runners")
  const router = useRouter()
  const [runner, dispatch] = useReducer<LoadRunnerReducer<T, P>>(
    (state, action) => {
      if (action.type === DONE_LOADING) {
        return action.payload
      }
      return reducer(state, action)
    },
    undefined
  )

  const { id } = router.query
  useEffect(() => {
    let isMounted = true

    getByID<Runner>(+id).then((payload) => {
      if (isMounted) {
        dispatch({ type: DONE_LOADING, payload })
      }
    })

    return () => (isMounted = false)
  }, [id])

  return [runner, dispatch, update]
}
