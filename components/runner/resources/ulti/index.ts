import { RunnerReducer } from "../../../../hooks/useRunnerAccess"
import { Gear } from "../../../../types/Resources"

export const updateGearList = (list: Gear[] = [], payload: Gear | number) => {
  if (typeof payload === "number") {
    return [...list.slice(0, payload), ...list.slice(payload + 1)]
  }
  return [...list, payload]
}

export const gearPageReducerGenerator = (
  gearKey: string,
): RunnerReducer<undefined, Gear | number> => (runner, { payload }) => ({
  ...runner,
  resources: {
    ...runner.resources,
    [gearKey]: updateGearList(runner.resources?.[gearKey], payload),
  },
})
