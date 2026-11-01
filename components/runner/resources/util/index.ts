import { createContext } from "react"
import { DispatchAction, RunnerReducer } from "@/hooks/useRunnerAccess"
import { Gear, GearAmmo } from "@/types/Resources"

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

export const isGearAmmo = (gear: Gear): gear is GearAmmo => "ammo" in gear

export const getEssenceFromGear = (gear: Gear) =>
  gear.useAs?.find(({ essence }) => essence !== undefined)?.essence

// how much capacity a piece of gear has for mods
export const getModCapacity = (gear: Gear) =>
  gear.modifications?.itemhookmod?.find(
    ({ capacity }) => capacity !== undefined,
  )?.capacity

export * from "./Columns"
export * from "./configOptions"
