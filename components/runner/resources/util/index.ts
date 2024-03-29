import { createContext } from "react"
import { DispatchAction, RunnerReducer } from "@/hooks/useRunnerAccess"
import {
  Gear,
  GearAugmentationUseAs,
  GearBioware,
  GearCyberware,
} from "@/types/Resources"

export const updateGearList = (list: Gear[] = [], payload: Gear | number) => {
  if (typeof payload === "number") {
    return [...list.slice(0, payload), ...list.slice(payload + 1)]
  }
  return [...list, payload]
}

type GearPayload = Gear | number

export const gearPageReducerGenerator =
  (gearKey: string): RunnerReducer<GearPayload> =>
  (runner, { payload }) => ({
    ...runner,
    resources: {
      ...runner.resources,
      [gearKey]: updateGearList(runner.resources?.[gearKey], payload),
    },
  })

export const DispatchContext = createContext<DispatchAction<GearPayload>>(null)

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

export const getEssenceFromGear = (gear: GearCyberware | GearBioware) =>
  "essence" in gear.useAs ?
    gear.useAs.essence
  : (gear.useAs.find((useAs) => "essence" in useAs) as GearAugmentationUseAs)
      ?.essence

export * from "./Columns"
export * from "./configOptions"
