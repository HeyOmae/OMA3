import { StoredRunner } from "./storedRunner"
import { modificationsAreConsistent } from "./modificationsAreConsistent"

// round trip through JSON, like a runner coming out of IndexedDB or an export
const saved = (runner: object): StoredRunner =>
  JSON.parse(JSON.stringify(runner))

const runnerWith = (resources: object) =>
  saved({ name: "Bull", description: "Fixer", resources })

describe("modificationsAreConsistent", () => {
  it("should move the hooks of matrix devices and projectiles into itemhookmod", () => {
    const runner = runnerWith({
      cyberdeck: [
        {
          name: "Erika MCD-6",
          modifications: [{ hook: "CYBERDECK" }, { hook: "DECK", capacity: 4 }],
        },
      ],
      projectile: [{ name: "Bow", modifications: [{ hook: "BOW" }] }],
    })

    expect(modificationsAreConsistent(runner).resources).toEqual({
      cyberdeck: [
        {
          name: "Erika MCD-6",
          modifications: {
            itemhookmod: [{ hook: "CYBERDECK" }, { hook: "DECK", capacity: 4 }],
          },
        },
      ],
      projectile: [
        { name: "Bow", modifications: { itemhookmod: [{ hook: "BOW" }] } },
      ],
    })
  })

  it("should make the modifications that can repeat a list", () => {
    const runner = runnerWith({
      armor: [
        {
          name: "Armor Jacket",
          modifications: { itemhookmod: { hook: "ARMOR", capacity: 12 } },
        },
      ],
      cyberware: [
        {
          name: "Cybereyes",
          modifications: {
            attrmod: { attribute: "ATTACK_RATING", attackRating: [1, 1] },
            itemattrmod: { attribute: "ATTACK_RATING", attackRating: [1, 1] },
            accessorymod: { hook: "EYE", item: "Flare Compensation" },
          },
        },
      ],
    })

    expect(modificationsAreConsistent(runner).resources).toEqual({
      armor: [
        {
          name: "Armor Jacket",
          modifications: { itemhookmod: [{ hook: "ARMOR", capacity: 12 }] },
        },
      ],
      cyberware: [
        {
          name: "Cybereyes",
          modifications: {
            attrmod: [{ attribute: "ATTACK_RATING", attackRating: [1, 1] }],
            itemattrmod: [{ attribute: "ATTACK_RATING", attackRating: [1, 1] }],
            accessorymod: [{ hook: "EYE", item: "Flare Compensation" }],
          },
        },
      ],
    })
  })

  it("should lowercase the keys drones capitalized", () => {
    const runner = runnerWith({
      drones: [
        {
          name: "MCT Hornet",
          modifications: {
            itemattrmod: { Attr: "CAPACITY", Slot: "VEHICLEBODY", Val: 2 },
            accessorymod: {
              Item: "Weapon Mount Standard",
              Hook: "VEHICLEBODY",
            },
          },
        },
      ],
    })

    expect(modificationsAreConsistent(runner).resources?.drones).toEqual([
      {
        name: "MCT Hornet",
        modifications: {
          itemattrmod: [{ attr: "CAPACITY", slot: "VEHICLEBODY", val: 2 }],
          accessorymod: [
            { item: "Weapon Mount Standard", hook: "VEHICLEBODY" },
          ],
        },
      },
    ])
  })

  it("should leave consistent modifications, single values and gear without modifications alone", () => {
    const runner = runnerWith({
      firearms: [
        {
          name: "Ares Predator",
          modifications: {
            itemhookmod: [{ hook: "TOP" }],
            moditemmod: { ref: "Smartgun" },
          },
        },
      ],
      bioware: [
        {
          name: "Muscle Toner",
          modifications: {
            dmgtypemod: { type: "PHYSICAL" },
            skillmod: [{ ref: "Athletics", val: 1, condIndex: 1 }],
          },
        },
      ],
      lifestyle: [{ name: "Low" }],
    })

    expect(modificationsAreConsistent(runner)).toEqual(runner)
  })

  it("should leave values it does not recognize alone", () => {
    const runner = runnerWith({
      otherElectronics: [
        { name: "Odd", modifications: null },
        { name: "Odder", modifications: { itemhookmod: ["TOP"] } },
      ],
    })

    expect(modificationsAreConsistent(runner)).toEqual(runner)
  })
})
