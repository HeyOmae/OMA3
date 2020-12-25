import {
  render,
  runnerFromDB,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "../../../../test/testUtils"
import FirearmsWeapons from "./"
import FirearmsData from "../../../../data/firearms"

describe("<FirearmsWeapon />", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<FirearmsWeapons />, { query: { id: "9" } }))
  it("should render the guns", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })

    FirearmsData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  it("should add a weapon to the runner", async () => {
    const { getByLabelText } = setup()

    expect(runnerFromDB(8).resources).toBeUndefined()
    await waitFor(() => {
      expect(getByLabelText("Add Ingram Smartgun XI")).toBeInTheDocument()
    })

    getByLabelText("Add Ingram Smartgun XI").click()

    await waitFor(() => {
      expect(runnerFromDB(8).resources.firearms).toEqual([
        {
          availability: "3L",
          cost: 750,
          name: "Ingram Smartgun XI",
          useAs: [
            {
              type: "WEAPON FIREARMS",
              subtype: "SUBMACHINE GUNS",
            },
          ],
          modifications: {
            itemhookmod: [
              {
                hook: "BARREL",
              },
              {
                hook: "TOP",
              },
            ],
            moditemmod: {
              ref: "smartgun System Internal",
            },
            accessorymod: [
              {
                hook: "BARREL",
                item: "Silencer",
              },
              {
                hook: "BARREL",
                item: "Gas-vent System",
                rating: 2,
              },
            ],
          },
          weapon: {
            ar: [11, 9, 6, 0, 0],
            ammo: "32(c)",
            dv: "3P",
            mode: "SA/BF",
            skill: "Firearms",
            specialization: "automatics",
          },
        },
      ])
    })
  })
})
