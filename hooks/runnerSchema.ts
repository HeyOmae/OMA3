import type { Runner } from "@/types/runner"
import type { StoredRunner } from "./migrations/storedRunner"

// Bump this when adding a migration to ./migrateRunner. It lives here, away
// from the migrations, so runners that are up to date never load them.
export const CURRENT_SCHEMA_VERSION = 3

// A runner saved at the current schema version is in the current shape
const isUpToDate = (
  runner: StoredRunner,
  currentVersion: number,
): runner is Runner => (runner.schemaVersion ?? 0) >= currentVersion

export const migrateIfOutdated = async (
  runner: StoredRunner | undefined,
  currentVersion = CURRENT_SCHEMA_VERSION,
): Promise<Runner | undefined> => {
  if (!runner) return undefined
  if (isUpToDate(runner, currentVersion)) return runner

  const { migrateRunner } = await import("./migrateRunner")
  const migratedRunner = migrateRunner(runner)

  if (isUpToDate(migratedRunner, currentVersion)) return migratedRunner
  throw new Error(`Could not migrate runner to version ${currentVersion}`)
}
