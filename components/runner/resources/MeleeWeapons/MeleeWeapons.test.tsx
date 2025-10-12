import {
  render,
  runnerFromDB,
  waitFor,
  setupIndexedDB,
  withTestRouter,
  userEvent,
  screen,
  within,
} from "@/test/testUtils"
import meleeData from "@/data/melee"
import MeleeWeapons from "./index"

describe("<MeleeWeapons/>", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = 8) => {
    return render(
      withTestRouter(<MeleeWeapons />, { query: { id: id.toString() } }),
    )
  }

  it("should have breadcrumbs", async () => {
    setup()

    expect(await screen.findByText("Melee Weapons")).toBeInTheDocument()
    expect(screen.getByText("Resources")).toHaveAttribute(
      "href",
      "/8/resources",
    )
    expect(screen.getByRole("link", { name: "Resources" })).toHaveAttribute(
      "href",
      "/8/resources",
    )
  })

  it("should display the melee weapons", async () => {
    setup()
    expect(
      await screen.findByRole("columnheader", { name: "Buy" }),
    ).toBeInTheDocument()
    // New TDD assertion: Reference column header should be present
    expect(
      await screen.findByRole("columnheader", { name: "Reference" }),
    ).toBeInTheDocument()
    meleeData.forEach(({ name }) => {
      expect(screen.getByRole("cell", { name })).toBeInTheDocument()
    })

    // New TDD assertion: Katana should display its page reference
    // Scope to the Katana row so we don't match other gear with the same reference
    const katanaRow = screen.getByRole("cell", { name: "Katana" }).closest("tr")
    expect(within(katanaRow).getByText(/SR5 p\.?422/i)).toBeInTheDocument()
  })

  it("purchase melee weapon", async () => {
    setup()

    expect(await screen.findByLabelText("Add Katana")).toBeInTheDocument()
    expect(screen.getByLabelText("Nuyen Value")).toBeInTheDocument()

    expect(runnerFromDB(7).resources).toBeUndefined()

    await userEvent.click(screen.getByLabelText("Add Katana"))
    expect(screen.getByLabelText("Nuyen Value")).toHaveTextContent(
      "7650¥/8000¥",
    )

    await waitFor(() => {
      expect(runnerFromDB(7).resources.melee).toEqual([
        {
          name: "Katana",
          availability: "3",
          cost: 350,
          reference: [{ book: "SR5", page: 422 }],
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

  it("should display runner melee weapons", async () => {
    setup(10)

    expect(
      await screen.findByRole("heading", { name: "Purchased Melee Weapons" }),
    ).toBeVisible()

    expect(runnerFromDB(9).resources.melee).toHaveLength(2)

    await userEvent.click(screen.getByRole("button", { name: "Remove Katana" }))

    await waitFor(() => {
      expect(runnerFromDB(9).resources.melee).toHaveLength(1)
    })
  })
})
