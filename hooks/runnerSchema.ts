import type { Runner } from "@/types/runner"

// Bump this when adding a migration to ./migrateRunner. It lives here, away
// from the migrations, so runners that are up to date never load them.
export const CURRENT_SCHEMA_VERSION = 0

export const migrateIfOutdated = async (
  runner: Runner | undefined,
  currentVersion = CURRENT_SCHEMA_VERSION,
): Promise<Runner | undefined> => {
  if (!runner || (runner.schemaVersion ?? 0) >= currentVersion) return runner

  const { migrateRunner } = await import("./migrateRunner")
  return migrateRunner(runner)
}
