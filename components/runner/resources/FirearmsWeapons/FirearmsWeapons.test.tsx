import {
  render,
  runnerFromDB,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getTextIn,
  caymansCurrentlySpentNuyen,
  userEvent,
} from "@/test/testUtils"
import FirearmsWeapons from "./"
import FirearmsData from "@/data/firearms"
import { mockedRunners } from "@/test/mocks"

describe("<FirearmsWeapon />", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "9") =>
    render(withTestRouter(<FirearmsWeapons />, { query: { id } }))
  it("should render the guns", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })

    const buyTable = getByText("Buy").closest("table")

    FirearmsData.forEach(({ name }) => {
      expect(getTextIn(buyTable, name)).toBeInTheDocument()
    })
  })

  it("should add a weapon to the runner", async () => {
    const { getByLabelText } = setup()

    expect(runnerFromDB(8).resources).toBeUndefined()
    await waitFor(() => {
      expect(getByLabelText("Add Ingram Smartgun XI")).toBeInTheDocument()
    })

    await userEvent.click(getByLabelText("Add Ingram Smartgun XI"))

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

  it("should remove a weapon", async () => {
    const { getByLabelText, getByText } = setup("10")

    expect(runnerFromDB(9).resources.firearms).toHaveLength(
      mockedRunners[9].resources.firearms.length,
    )
    const gunToBeRemoved = runnerFromDB(9).resources.firearms[2]
    await waitFor(() => {
      expect(
        getByText(`${caymansCurrentlySpentNuyen}¥/275000¥`),
      ).toBeInTheDocument()
    })

    await userEvent.click(getByLabelText(`Remove ${gunToBeRemoved.name}`))

    await waitFor(() => {
      expect(runnerFromDB(9).resources.firearms).toHaveLength(
        mockedRunners[9].resources.firearms.length - 1,
      )
    })
    expect(
      getByText(`${caymansCurrentlySpentNuyen + gunToBeRemoved.cost}¥/275000¥`),
    ).toBeInTheDocument()
  })

  it("should link to the firearm mod page", async () => {
    const { getByLabelText, getByText } = setup("10")

    await waitFor(() => {
      expect(getByText("Sell")).toBeInTheDocument()
    })
    expect(getByLabelText("Mod Yamaha Pulsar 1 (0)")).toBeInTheDocument()
    expect(getByLabelText("Mod Streetline Special (1)")).toBeInTheDocument()
    expect(getByLabelText("Mod Browning Ultra Power (2)")).toBeInTheDocument()
    expect(getByLabelText("Mod Uzi Iv (3)")).toBeInTheDocument()
    expect(getByLabelText("Mod FN Har (4)")).toBeInTheDocument()
  })
})
