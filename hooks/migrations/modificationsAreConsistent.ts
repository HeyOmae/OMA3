import { isRecord, mapGear, StoredRunner } from "./storedRunner"

// modifications a piece of gear can have more than one of
const listFields = ["itemhookmod", "attrmod", "accessorymod", "itemattrmod"]

// drones saved some keys capitalized, like Hook and Attr
const lowercaseKeys = (value: unknown) =>
  isRecord(value) ?
    Object.fromEntries(
      Object.entries(value).map(([key, field]) => [
        key[0].toLowerCase() + key.slice(1),
        field,
      ]),
    )
  : value

const asList = (value: unknown) =>
  (Array.isArray(value) ? value : [value]).map(lowercaseKeys)

const consistentModifications = (modifications: unknown) => {
  // matrix devices and projectiles saved a bare list of hooks
  if (Array.isArray(modifications)) return { itemhookmod: modifications }
  if (!isRecord(modifications)) return modifications

  return Object.fromEntries(
    Object.entries(modifications).map(([key, value]) => [
      key,
      listFields.includes(key) ? asList(value) : value,
    ]),
  )
}

// modifications is always an object, and the modifications gear can have
// more than one of are always lists
export const modificationsAreConsistent = (
  runner: StoredRunner,
): StoredRunner =>
  mapGear(runner, (gear) =>
    gear.modifications === undefined ?
      gear
    : { ...gear, modifications: consistentModifications(gear.modifications) },
  )
