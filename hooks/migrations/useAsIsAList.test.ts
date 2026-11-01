import { StoredRunner } from "./storedRunner"
import { useAsIsAList } from "./useAsIsAList"

// round trip through JSON, like a runner coming out of IndexedDB or an export
const saved = (runner: object): StoredRunner =>
  JSON.parse(JSON.stringify(runner))

describe("useAsIsAList", () => {
  it("should wrap a single useAs in a list", () => {
    const runner = saved({
      name: "Bull",
      description: "Fixer",
      resources: {
        bioware: [
          {
            name: "Bone Density Augmentation",
            useAs: { type: "BIOWARE", subtype: "STANDARD", essence: 0.3 },
          },
        ],
        software: [
          {
            name: "Browse",
            useAs: {
              type: "ACCESSORY",
              subtype: "BASIC PROGRAM",
              slot: "SOFTWARE",
              capacity: 1,
            },
          },
        ],
      },
    })

    expect(useAsIsAList(runner).resources).toEqual({
      bioware: [
        {
          name: "Bone Density Augmentation",
          useAs: [{ type: "BIOWARE", subtype: "STANDARD", essence: 0.3 }],
        },
      ],
      software: [
        {
          name: "Browse",
          useAs: [
            {
              type: "ACCESSORY",
              subtype: "BASIC PROGRAM",
              slot: "SOFTWARE",
              capacity: 1,
            },
          ],
        },
      ],
    })
  })

  it("should wrap the useAs of mods on gear", () => {
    const runner = saved({
      name: "Bull",
      description: "Fixer",
      resources: {
        armor: [
          {
            name: "Armor Jacket",
            useAs: { type: "ARMOR", subtype: "ARMOR" },
            mods: [
              { name: "Insulation", useAs: { type: "ARMOR", subtype: "MOD" } },
            ],
          },
        ],
      },
    })

    expect(useAsIsAList(runner).resources.armor).toEqual([
      {
        name: "Armor Jacket",
        useAs: [{ type: "ARMOR", subtype: "ARMOR" }],
        mods: [
          { name: "Insulation", useAs: [{ type: "ARMOR", subtype: "MOD" }] },
        ],
      },
    ])
  })

  it("should leave gear that already has a list, or no useAs, alone", () => {
    const runner = saved({
      name: "Bull",
      description: "Fixer",
      resources: {
        firearms: [
          {
            name: "Ares Predator",
            useAs: [{ type: "WEAPON", subtype: "PISTOL" }],
          },
        ],
        lifestyle: [{ name: "Low" }],
      },
    })

    expect(useAsIsAList(runner)).toEqual(runner)
  })

  it("should leave a runner without resources alone", () => {
    const runner = saved({ name: "Bull", description: "Fixer" })

    expect(useAsIsAList(runner)).toEqual(runner)
  })
})
