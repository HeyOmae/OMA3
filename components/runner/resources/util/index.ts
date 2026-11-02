import { createContext } from "react"
import { DispatchAction, RunnerReducer } from "@/hooks/useRunnerAccess"
import { Gear, GearAmmo, Resources } from "@/types/Resources"
import { defined } from "@/components/util"

export const updateGearList = (list: Gear[] = [], payload: Gear | number) => {
  if (typeof payload === "number") {
    return list.toSpliced(payload, 1)
  }
  return [...list, payload]
}

type GearPayload = Gear | number

// buying or selling gear, the payload is the gear bought or the index sold
export const UPDATE_GEAR = Symbol("UPDATE_GEAR")

export const gearPageReducerGenerator =
  (gearKey: keyof Resources): RunnerReducer<GearPayload> =>
  (runner, { payload }) => ({
    ...runner,
    resources: {
      ...runner.resources,
      [gearKey]: updateGearList(runner.resources?.[gearKey], payload),
    },
  })

export const DispatchContext = createContext<
  DispatchAction<GearPayload> | undefined
>(undefined)

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

// how much room a mod takes up when it doesn't have a rating to set it
export const getCapacity = ({ useAs }: Gear) =>
  defined(
    defined(useAs, "useAs").find(({ capacity }) => capacity !== undefined)
      ?.capacity,
    "capacity",
  )

// how much room the mods on a piece of gear take up, a mod with a rating
// takes up its rating
export const usedCapacity = ({ mods = [] }: Gear) =>
  mods.reduce((used, mod) => used + (mod.currentRating ?? getCapacity(mod)), 0)

export * from "./Columns"
export * from "./configOptions"
