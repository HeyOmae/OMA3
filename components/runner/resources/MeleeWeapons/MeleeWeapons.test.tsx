import {
  render,
  runnerFromDB,
  waitFor,
  setupIndexedDB,
  withTestRouter,
} from "../../../../test/testUtils"
import meleeData from "../../../../data/melee"
import { MeleeWeapons } from "./index"

describe("<MeleeWeapons/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(withTestRouter(<MeleeWeapons />, { query: { id: "8" } }))
  }

  it("should display the melee weapons", async () => {
    const { getByText } = setup()
    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })
    meleeData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  it("purchase melee weapon", async () => {
    const { getByLabelText } = setup()

    await waitFor(() => {
      expect(getByLabelText("Add Katana")).toBeInTheDocument()
    })

    expect(runnerFromDB(7).resources).toBeUndefined()

    getByLabelText("Add Katana").click()

    await waitFor(() => {
      expect(runnerFromDB(7).resources.melee).toEqual([
        {
          name: "Katana",
          availability: "3",
          cost: 350,
          useAs: [
            {
              type: "WEAPON CLOSE COMBAT",
              subtype: "BLADES",
            },
            {
              type: "ACCESSORY",
              subtype: "INSTRUMENT WEAPON",
              slot: "INSTRUMENT WEAPON",
              capacity: 1,
              availability: "5",
              cost: 350,
            },
          ],
          weapon: {
            dv: "4P",
            ar: [10, 0, 0, 0, 0],
            skill: "Close Combat",
            specialization: "Blades",
          },
        },
      ])
    })
  })
})
