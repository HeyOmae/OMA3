import { Runner } from "@/types/runner"
import { CURRENT_SCHEMA_VERSION, migrateRunner } from "./migrateRunner"

describe("migrateRunner", () => {
  const runner: Runner = { name: "Bull", description: "Fixer" }
  const migrations = [
    (r: Runner) => ({ ...r, description: `${r.description} 1` }),
    (r: Runner) => ({ ...r, description: `${r.description} 2` }),
    (r: Runner) => ({ ...r, description: `${r.description} 3` }),
  ]

  it("should run every migration in order on a runner saved before versioning", () => {
    expect(migrateRunner(runner, migrations)).toEqual({
      name: "Bull",
      description: "Fixer 1 2 3",
      schemaVersion: 3,
    })
  })

  it("should only run the migrations newer than the runner", () => {
    expect(migrateRunner({ ...runner, schemaVersion: 2 }, migrations)).toEqual({
      name: "Bull",
      description: "Fixer 3",
      schemaVersion: 3,
    })
  })

  it("should leave a runner that is already up to date alone", () => {
    const current = { ...runner, schemaVersion: 3 }

    expect(migrateRunner(current, migrations)).toBe(current)
  })

  it("should leave a runner from a newer version of the app alone", () => {
    const fromTheFuture = { ...runner, schemaVersion: 4 }

    expect(migrateRunner(fromTheFuture, migrations)).toBe(fromTheFuture)
  })

  it("should not change the runner it was given", () => {
    migrateRunner(runner, migrations)

    expect(runner).toEqual({ name: "Bull", description: "Fixer" })
  })

  it("should use the app's migrations by default", () => {
    // a runner without a version is at version 0
    expect(migrateRunner(runner).schemaVersion ?? 0).toEqual(
      CURRENT_SCHEMA_VERSION,
    )
  })
})
