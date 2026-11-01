import { StoredRunner } from "./storedRunner"
import { typeIsOnTheGear } from "./typeIsOnTheGear"

// round trip through JSON, like a runner coming out of IndexedDB or an export
const saved = (runner: object): StoredRunner =>
  JSON.parse(JSON.stringify(runner))

const runnerWith = (resources: object) =>
  saved({ name: "Bull", description: "Fixer", resources })

describe("typeIsOnTheGear", () => {
  it("should copy the type and subtype of the first useAs onto the gear", () => {
    const runner = runnerWith({
      firearms: [
        {
          name: "Ares Predator",
          useAs: [
            { type: "WEAPON FIREARMS", subtype: "PISTOLS_HEAVY" },
            { slot: "UNDER", subtype: "ACCESSORY" },
          ],
          mods: [
            {
              name: "Smartgun",
              useAs: [{ type: "ACCESSORY", subtype: "FIREARM", slot: "TOP" }],
            },
          ],
        },
      ],
    })

    expect(typeIsOnTheGear(runner).resources?.firearms).toEqual([
      {
        name: "Ares Predator",
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS_HEAVY",
        useAs: [
          { type: "WEAPON FIREARMS", subtype: "PISTOLS_HEAVY" },
          { slot: "UNDER", subtype: "ACCESSORY" },
        ],
        mods: [
          {
            name: "Smartgun",
            type: "ACCESSORY",
            subtype: "FIREARM",
            useAs: [{ type: "ACCESSORY", subtype: "FIREARM", slot: "TOP" }],
          },
        ],
      },
    ])
  })

  it("should keep the type gear already has", () => {
    const runner = runnerWith({
      commlink: [
        {
          name: "Meta Link",
          type: "ELECTRONICS",
          subtype: "COMMLINK",
          useAs: [{ type: "ACCESSORY", subtype: "CYBERWARE" }],
        },
      ],
    })

    expect(typeIsOnTheGear(runner)).toEqual(runner)
  })

  it("should leave gear without a type anywhere alone", () => {
    const runner = runnerWith({
      lifestyle: [{ name: "Low" }],
      tools: [{ name: "Kit", useAs: [{ slot: "TOOL" }] }],
      otherElectronics: [{ name: "Nothing to use it as", useAs: [] }],
    })

    expect(typeIsOnTheGear(runner)).toEqual(runner)
  })
})
