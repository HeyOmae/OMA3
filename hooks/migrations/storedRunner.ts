import type { Resources } from "@/types/Resources"
import type { Runner } from "@/types/runner"

// Gear as it was saved. It can be in the shape of any older version, so only
// the fields migrations touch are described, and loosely.
export interface StoredGear {
  name?: unknown
  type?: unknown
  subtype?: unknown
  useAs?: unknown
  modifications?: unknown
  mods?: StoredGear[]
}

export interface StoredRunner extends Omit<Runner, "resources"> {
  resources?: { [K in keyof Resources]?: StoredGear[] }
}

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value)

// Runs a change on every piece of gear the runner owns, and on the mods
// installed in that gear. Keep this stable, shipped migrations depend on it.
export const mapGear = (
  runner: StoredRunner,
  change: (gear: StoredGear) => StoredGear,
): StoredRunner => {
  if (!runner.resources) return runner

  const changeWithMods = (gear: StoredGear): StoredGear => {
    const changed = change(gear)
    return changed.mods ?
        { ...changed, mods: changed.mods.map(changeWithMods) }
      : changed
  }

  return {
    ...runner,
    resources: Object.fromEntries(
      Object.entries(runner.resources).map(([key, gear]) => [
        key,
        gear.map(changeWithMods),
      ]),
    ),
  }
}
