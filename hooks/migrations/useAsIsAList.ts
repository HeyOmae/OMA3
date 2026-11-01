import { mapGear, StoredRunner } from "./storedRunner"

// Armor, bioware and software saved useAs as a single object, everything
// else as a list.
export const useAsIsAList = (runner: StoredRunner): StoredRunner =>
  mapGear(runner, (gear) =>
    gear.useAs === undefined || Array.isArray(gear.useAs) ?
      gear
    : { ...gear, useAs: [gear.useAs] },
  )
