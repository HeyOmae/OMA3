import { Runner } from "@/types/runner"
import { Migration, migrateRunner, migrations } from "./migrateRunner"
import { CURRENT_SCHEMA_VERSION } from "./runnerSchema"

describe("migrateRunner", () => {
  const runner: Runner = { name: "Bull", description: "Fixer" }
  const testMigrations: Migration[] = [
    (r) => ({ ...r, description: `${r.description} 1` }),
    (r) => ({ ...r, description: `${r.description} 2` }),
    (r) => ({ ...r, description: `${r.description} 3` }),
  ]

  it("should run every migration in order on a runner saved before versioning", () => {
    expect(migrateRunner(runner, testMigrations)).toEqual({
      name: "Bull",
      description: "Fixer 1 2 3",
      schemaVersion: 3,
    })
  })

  it("should only run the migrations newer than the runner", () => {
    expect(
      migrateRunner({ ...runner, schemaVersion: 2 }, testMigrations),
    ).toEqual({
      name: "Bull",
      description: "Fixer 3",
      schemaVersion: 3,
    })
  })

  it("should leave a runner that is already up to date alone", () => {
    const current = { ...runner, schemaVersion: 3 }

    expect(migrateRunner(current, testMigrations)).toBe(current)
  })

  it("should leave a runner from a newer version of the app alone", () => {
    const fromTheFuture = { ...runner, schemaVersion: 4 }

    expect(migrateRunner(fromTheFuture, testMigrations)).toBe(fromTheFuture)
  })

  it("should not change the runner it was given", () => {
    migrateRunner(runner, testMigrations)

    expect(runner).toEqual({ name: "Bull", description: "Fixer" })
  })

  it("should have a migration for every schema version", () => {
    // CURRENT_SCHEMA_VERSION is kept separate so the migrations can be lazy
    // loaded, bump it when adding a migration
    expect(migrations).toHaveLength(CURRENT_SCHEMA_VERSION)
  })

  it("should use the app's migrations by default", () => {
    // a runner without a version is at version 0
    expect(migrateRunner(runner).schemaVersion ?? 0).toEqual(
      CURRENT_SCHEMA_VERSION,
    )
  })
})
