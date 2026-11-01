import { defined, keyOf } from "./util"

describe("defined", () => {
  it("gives back a value that is there", () => {
    expect(defined(0, "rating")).toBe(0)
  })

  it.each([undefined, null])("fails loudly when the value is %s", (value) => {
    expect(() => defined(value, "rating")).toThrow("Missing rating")
  })
})

describe("keyOf", () => {
  const gear = { locks: [], restraints: [] }

  it("gives back a key the object has", () => {
    expect(keyOf("locks", gear)).toBe("locks")
  })

  it("fails loudly for a key the object doesn't have", () => {
    expect(() => keyOf("toaster", gear)).toThrow(
      "No toaster in locks, restraints",
    )
  })
})
