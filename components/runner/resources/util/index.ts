import { createContext } from "react"
import { DispatchAction, RunnerReducer } from "@/hooks/useRunnerAccess"
import { Gear } from "@/types/Resources"

export const updateGearList = (list: Gear[] = [], payload: Gear | number) => {
  if (typeof payload === "number") {
    return [...list.slice(0, payload), ...list.slice(payload + 1)]
  }
  return [...list, payload]
}

type GearPayload = Gear | number

export const gearPageReducerGenerator =
  (gearKey: string): RunnerReducer<undefined, GearPayload> =>
  (runner, { payload }) => ({
    ...runner,
    resources: {
      ...runner.resources,
      [gearKey]: updateGearList(runner.resources?.[gearKey], payload),
    },
  })

export const DispatchContext =
  createContext<DispatchAction<undefined, GearPayload>>(null)

export interface GearTableProps<G = Gear> {
  listOfGear: G[]
  isForSelling?: true
}

export interface AddGearButtonProps {
  gear: Gear
}

export interface RemoveGearButtonProps extends AddGearButtonProps {
  index: number
}

export * from "./Columns"
export * from "./configOptions"
