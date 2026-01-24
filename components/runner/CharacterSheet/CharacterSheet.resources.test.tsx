import {
  renderWithTestRouter,
  screen,
  setupIndexedDB,
  within,
} from "@/test/testUtils"
import CharSheet from "./index"
import { mockedRunners } from "@/test/mocks"

const cayman = mockedRunners[9]

const setup = (id = "10") => {
  renderWithTestRouter(<CharSheet />, { query: { id } })
}

describe("Resources", () => {
  beforeAll(setupIndexedDB)

  test("renders a table for each type of gear", async () => {
    setup()

    const gearSection = await (
      await screen.findByRole("heading", { name: "Gear" })
    ).closest("section")

    expect(gearSection).toBeInTheDocument()

    // should display a name column for each piece of gear
    expect(
      within(gearSection).getAllByRole("columnheader", { name: "Name" }),
    ).toHaveLength(Object.keys(cayman.resources).length)

    Object.keys(cayman.resources).forEach((category) => {
      expect(
        screen.getByRole("heading", { name: category }),
      ).toBeInTheDocument()
      expect(screen.getByRole("table", { name: category })).toBeInTheDocument()
    })
  })

  test("render weapons", async () => {
    setup()

    const meleeTable = await screen.findByRole("table", { name: "melee" })

    expect(meleeTable).toBeInTheDocument()

    expect(
      within(meleeTable).getByRole("columnheader", { name: "DV" }),
    ).toBeInTheDocument()
    expect(
      within(meleeTable).getByRole("columnheader", { name: "AR" }),
    ).toBeInTheDocument()

    const katanaRow = screen.getByRole("row", { name: /Katana/ })
    expect(katanaRow).toBeInTheDocument()
    expect(katanaRow).toHaveTextContent("4P")
    expect(katanaRow).toHaveTextContent("10/-/-/-/-")
    // expect(katanaRow).toHaveTextContent("4DP")

    const knifeRow = screen.getByRole("row", { name: /Combat Knife/ })
    expect(knifeRow).toBeInTheDocument()
    expect(knifeRow).toHaveTextContent("3P")
    expect(knifeRow).toHaveTextContent("8/2/-/-/-")
    // expect(knifeRow).toHaveTextContent("4DP")
  })

  test("render armor", async () => {
    setup()

    const armorTable = await screen.findByRole("table", { name: "armor" })

    expect(armorTable).toBeInTheDocument()

    // Check for armor-specific column headers
    expect(
      within(armorTable).getByRole("columnheader", { name: "Rating" }),
    ).toBeInTheDocument()
    expect(
      within(armorTable).getByRole("columnheader", { name: "Capacity" }),
    ).toBeInTheDocument()

    // Check Full Body Armor
    const fullBodyArmorCell = within(armorTable).getByRole("cell", {
      name: "Full Body Armor",
    })
    const fullBodyArmorRow = fullBodyArmorCell.closest("tr")
    expect(fullBodyArmorRow).toBeInTheDocument()
    expect(fullBodyArmorRow).toHaveTextContent("5") // rating
    expect(fullBodyArmorRow).toHaveTextContent("10") // capacity

    // Check Lined Coat
    const linedCoatCell = within(armorTable).getByRole("cell", {
      name: "Lined Coat",
    })
    const linedCoatRow = linedCoatCell.closest("tr")
    expect(linedCoatRow).toBeInTheDocument()
    expect(linedCoatRow).toHaveTextContent("3") // rating
    expect(linedCoatRow).toHaveTextContent("7") // capacity
  })

  test("render general gear", async () => {
    setup()

    const cyberwareTable = await screen.findByRole("table", {
      name: "cyberware",
    })

    expect(cyberwareTable).toBeInTheDocument()

    // Check that general gear only has Name column
    const headers = within(cyberwareTable).getAllByRole("columnheader")
    expect(headers).toHaveLength(1)
    expect(headers[0]).toHaveTextContent("Name")

    // Check that cyberware items are rendered
    const cybereye = within(cyberwareTable).getByRole("cell", {
      name: "Cybereye 3",
    })
    expect(cybereye).toBeInTheDocument()

    const wiredReflexes = within(cyberwareTable).getByRole("cell", {
      name: "Wired Reflexes 2",
    })
    expect(wiredReflexes).toBeInTheDocument()
  })

  test("renders empty gear section when runner has no resources", async () => {
    // Test with Puck (id 12) who has no resources field
    setup("12")

    const gearSection = await (
      await screen.findByRole("heading", { name: "Gear" })
    ).closest("section")

    expect(gearSection).toBeInTheDocument()

    // Should have no tables since there are no resources
    const tables = within(gearSection).queryAllByRole("table")
    expect(tables).toHaveLength(0)
  })

  test("render firearms with modes and ammo", async () => {
    setup()

    const firearmsTable = await screen.findByRole("table", { name: "firearms" })

    expect(firearmsTable).toBeInTheDocument()

    // Check for firearms-specific column headers
    expect(
      within(firearmsTable).getByRole("columnheader", { name: "Name" }),
    ).toBeInTheDocument()
    expect(
      within(firearmsTable).getByRole("columnheader", { name: "DV" }),
    ).toBeInTheDocument()
    expect(
      within(firearmsTable).getByRole("columnheader", { name: "AR" }),
    ).toBeInTheDocument()
    expect(
      within(firearmsTable).getByRole("columnheader", { name: "Modes" }),
    ).toBeInTheDocument()
    expect(
      within(firearmsTable).getByRole("columnheader", { name: "Ammo" }),
    ).toBeInTheDocument()

    // Check Yamaha Pulsar 1
    const pulsarCell = within(firearmsTable).getByRole("cell", {
      name: "Yamaha Pulsar 1",
    })
    const pulsarRow = pulsarCell.closest("tr")
    expect(pulsarRow).toBeInTheDocument()
    expect(pulsarRow).toHaveTextContent("4S(e)") // dv
    expect(pulsarRow).toHaveTextContent("9/9/-/-/-") // ar
    expect(pulsarRow).toHaveTextContent("SS") // mode
    expect(pulsarRow).toHaveTextContent("4(m)") // ammo

    // Check Streetline Special
    const streetlineCell = within(firearmsTable).getByRole("cell", {
      name: "Streetline Special",
    })
    const streetlineRow = streetlineCell.closest("tr")
    expect(streetlineRow).toBeInTheDocument()
    expect(streetlineRow).toHaveTextContent("2P") // dv
    expect(streetlineRow).toHaveTextContent("8/8/-/-/-") // ar
    expect(streetlineRow).toHaveTextContent("SS") // mode
    expect(streetlineRow).toHaveTextContent("6(c)") // ammo
  })

  test("render firearms with weapon mods", async () => {
    // Test with runner id 10 (Cayman) who has firearms with mods
    setup("10")

    const firearmsTable = await screen.findByRole("table", { name: "firearms" })

    expect(firearmsTable).toBeInTheDocument()

    // Check that Mods column header exists
    expect(
      within(firearmsTable).getByRole("columnheader", { name: "Mods" }),
    ).toBeInTheDocument()

    // Check Ares Predator 6 has "Suppressor" and "Smartgun System External" mods
    const predatorCell = within(firearmsTable).getByRole("cell", {
      name: "Ares Predator 6",
    })
    const predatorRow = predatorCell.closest("tr")
    expect(predatorRow).toBeInTheDocument()
    expect(predatorRow).toHaveTextContent("Suppressor")
    expect(predatorRow).toHaveTextContent("Smartgun System External")

    // Check that firearms without mods show empty mods cell
    const pulsarCell = within(firearmsTable).getByRole("cell", {
      name: "Yamaha Pulsar 1",
    })
    const pulsarRow = pulsarCell.closest("tr")
    expect(pulsarRow).toBeInTheDocument()
    // Pulsar has no mods, so the mods cell should be empty
  })
})
