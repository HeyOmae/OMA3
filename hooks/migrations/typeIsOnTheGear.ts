import { isRecord, mapGear, StoredRunner } from "./storedRunner"

// Weapons, tools, software and some mods only had a type and subtype in
// their first useAs, everything else also had them on the gear itself.
export const typeIsOnTheGear = (runner: StoredRunner): StoredRunner =>
  mapGear(runner, (gear) => {
    if (gear.type !== undefined || !Array.isArray(gear.useAs)) return gear

    const [firstUse] = gear.useAs
    if (!isRecord(firstUse) || firstUse.type === undefined) return gear

    return { ...gear, type: firstUse.type, subtype: firstUse.subtype }
  })
