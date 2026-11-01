import { Runner } from "@/types/runner"
import { migrateIfOutdated } from "./runnerSchema"
import { migrateRunner } from "./migrateRunner"

jest.mock("./migrateRunner", () => ({
  migrateRunner: jest.fn((runner) => ({ ...runner, schemaVersion: 2 })),
}))

describe("migrateIfOutdated", () => {
  const runner: Runner = { name: "Bull", description: "Fixer" }

  afterEach(() => jest.clearAllMocks())

  it("should migrate a runner that is behind the current version", async () => {
    expect(await migrateIfOutdated({ ...runner, schemaVersion: 1 }, 2)).toEqual(
      { ...runner, schemaVersion: 2 },
    )
    expect(migrateRunner).toHaveBeenCalledTimes(1)
  })

  it("should treat a runner without a version as version 0", async () => {
    await migrateIfOutdated(runner, 1)

    expect(migrateRunner).toHaveBeenCalledWith(runner)
  })

  it("should not load the migrations for a runner that is up to date", async () => {
    const current = { ...runner, schemaVersion: 2 }

    expect(await migrateIfOutdated(current, 2)).toBe(current)
    expect(migrateRunner).not.toHaveBeenCalled()
  })

  it("should pass along a runner that does not exist", async () => {
    expect(await migrateIfOutdated(undefined, 2)).toBeUndefined()
    expect(migrateRunner).not.toHaveBeenCalled()
  })

  it("should not hand back a runner that is still out of date", async () => {
    await expect(
      migrateIfOutdated({ ...runner, schemaVersion: 1 }, 3),
    ).rejects.toThrow("Could not migrate runner to version 3")
  })
})
