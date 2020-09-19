import { useRouter } from "next/router"
import { useEffect, useState, Reducer, useReducer } from "react"
import { useIndexedDB } from "react-indexed-db"
import { Runner } from "../types/runner"

interface Action {
  type: string
  payload: string
}
const DONE_LOADING = Symbol("DONE_LOADING")
interface ActionDoneLoading {
  type: typeof DONE_LOADING
  payload: Runner
}

type LoadRunnerReducer = Reducer<Runner, ActionDoneLoading | Action>
type RunnerReducer = Reducer<Runner, Action>

type UseRunnerAccess = (
  reducer: RunnerReducer
) => [
  runner: Runner,
  dispatch: (action: Action) => void,
  updateIndexedDb: (value: Runner, key?: any) => Promise<any>
]

export const useRunnerAccess: UseRunnerAccess = (reducer) => {
  const { getByID, update } = useIndexedDB("runners")
  const router = useRouter()
  const [runner, dispatch] = useReducer<LoadRunnerReducer>((state, action) => {
    if (action.type === DONE_LOADING) {
      return action.payload
    }
    return reducer(state, action)
  }, new Runner())

  useEffect(() => {
    let isMounted = true
    const { id } = router.query
    getByID<Runner>(id as string).then((payload) => {
      if (isMounted) {
        dispatch({ type: DONE_LOADING, payload })
      }
    })
    return () => (isMounted = false)
  }, [])

  return [runner, dispatch, update]
}
