import { createContext } from "react"
import { DispatchAction, RunnerReducer } from "@/hooks/useRunnerAccess"
import { Gear, GearAugmentationUseAs, GearModUseAs } from "@/types/Resources"

export const updateGearList = (list: Gear[] = [], payload: Gear | number) => {
  if (typeof payload === "number") {
    return list.toSpliced(payload, 1)
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

const hasEssence = (
  useAs: GearAugmentationUseAs | GearModUseAs,
): useAs is GearAugmentationUseAs => "essence" in useAs

export const getEssenceFromGear = (
  gear: Gear & { useAs?: (GearAugmentationUseAs | GearModUseAs)[] },
) => gear.useAs?.find(hasEssence)?.essence

export * from "./Columns"
export * from "./configOptions"
