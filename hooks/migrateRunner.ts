import type { Runner } from "@/types/runner"

type Migration = (runner: Runner) => Runner

// Runners are saved in IndexedDB and exported as JSON, so they keep whatever
// shape the gear data had when they were saved. Each migration upgrades a
// runner from the version at its index to the next one.
// Never edit or reorder a migration that has shipped, only add new ones.
export const migrations: Migration[] = []

export const CURRENT_SCHEMA_VERSION = migrations.length

export const migrateRunner = (
  runner: Runner,
  migrationList: Migration[] = migrations,
): Runner => {
  const schemaVersion = runner.schemaVersion ?? 0

  if (schemaVersion >= migrationList.length) return runner

  return {
    ...migrationList
      .slice(schemaVersion)
      .reduce((migrated, migrate) => migrate(migrated), runner),
    schemaVersion: migrationList.length,
  }
}
