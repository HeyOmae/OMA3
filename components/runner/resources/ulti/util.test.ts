import { updateGearList, gearPageReducerGenerator } from "."
import meleeWeapons from "../../../../data/melee"
import { mockedRunners } from "../../../../test/mocks"

const [ax, combatKnife, survivalKnife, katana] = meleeWeapons
describe("updateGearList", () => {
  it("should create a list of gear", () => {
    expect(updateGearList(undefined, ax)).toEqual([ax])
  })

  it("should add gear to a list", () => {
    expect(updateGearList([ax, combatKnife, survivalKnife], katana)).toEqual([
      ax,
      combatKnife,
      survivalKnife,
      katana,
    ])
  })

  it("should remove gear from a list", () => {
    expect(updateGearList([ax, combatKnife, survivalKnife], 1)).toEqual([
      ax,
      survivalKnife,
    ])
  })
})

describe("gearPageReducerGenerator", () => {
  it("should create a reduce to update a category of gear", () => {
    const reducer = gearPageReducerGenerator("melee")

    const newRunner = reducer(mockedRunners[9], {
      type: undefined,
      payload: ax,
    })

    expect(newRunner.resources.melee).toEqual([
      ...mockedRunners[9].resources.melee,
      ax,
    ])
  })
})
