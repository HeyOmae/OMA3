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

  test("render armor with mods", async () => {
    setup()

    const armorTable = await screen.findByRole("table", { name: "armor" })

    expect(armorTable).toBeInTheDocument()

    // Check that Mods column header exists
    expect(
      within(armorTable).getByRole("columnheader", { name: "Mods" }),
    ).toBeInTheDocument()

    // Check Lined Coat has "Cold Resistance" and "Fire Resistance" mods with ratings
    const linedCoatCell = within(armorTable).getByRole("cell", {
      name: "Lined Coat",
    })
    const linedCoatRow = linedCoatCell.closest("tr")
    expect(linedCoatRow).toBeInTheDocument()
    expect(linedCoatRow).toHaveTextContent("Cold Resistance 3")
    expect(linedCoatRow).toHaveTextContent("Fire Resistance 2")

    // Check that armor without mods shows empty mods cell
    const fullBodyArmorCell = within(armorTable).getByRole("cell", {
      name: "Full Body Armor",
    })
    const fullBodyArmorRow = fullBodyArmorCell.closest("tr")
    expect(fullBodyArmorRow).toBeInTheDocument()
    // Full Body Armor has no mods, so the mods cell should be empty
  })

  test("render cyberware with essence cost", async () => {
    setup()

    const cyberwareTable = await screen.findByRole("table", {
      name: "cyberware",
    })

    expect(cyberwareTable).toBeInTheDocument()

    // Check for cyberware-specific column headers
    expect(
      within(cyberwareTable).getByRole("columnheader", { name: "Name" }),
    ).toBeInTheDocument()
    expect(
      within(cyberwareTable).getByRole("columnheader", { name: "Essence" }),
    ).toBeInTheDocument()

    // Check Cybereye 3 with essence cost
    const cybereye = within(cyberwareTable).getByRole("cell", {
      name: "Cybereye 3",
    })
    const cybereyeRow = cybereye.closest("tr")
    expect(cybereyeRow).toBeInTheDocument()
    expect(cybereyeRow).toHaveTextContent("0.3")

    // Check Wired Reflexes 2 with essence cost
    const wiredReflexesRow = screen.getByRole("row", {
      name: /Wired Reflexes 2/,
    })
    expect(wiredReflexesRow).toBeInTheDocument()
    expect(wiredReflexesRow).toHaveTextContent("2.0")

    // Check Muscle Replacement with rated essence
    const muscleReplacementRow = screen.getByRole("row", {
      name: /Muscle Replacement/,
    })
    expect(muscleReplacementRow).toBeInTheDocument()
    expect(muscleReplacementRow).toHaveTextContent("0.7")

    const wiredReflexes = within(cyberwareTable).getByRole("cell", {
      name: "Wired Reflexes 2",
    })
    expect(wiredReflexes).toBeInTheDocument()
  })

  test("render cyberware with mods", async () => {
    // Use Street Rage (id 11) who has a cyberarm with mods
    setup("11")

    const cyberwareTable = await screen.findByRole("table", {
      name: "cyberware",
    })

    expect(cyberwareTable).toBeInTheDocument()

    // Check Cyberarm Obvious has mods displayed
    const cyberarmCell = within(cyberwareTable).getByRole("cell", {
      name: "Cyberarm Obvious",
    })
    const cyberarmRow = cyberarmCell.closest("tr")
    expect(cyberarmRow).toBeInTheDocument()
    expect(cyberarmRow).toHaveTextContent("Fingertip Compartment")
    expect(cyberarmRow).toHaveTextContent("Grapple Gun Augment")
    expect(cyberarmRow).toHaveTextContent("Smuggling Compartment")
    expect(cyberarmRow).toHaveTextContent("Attribute Increase Agility 4")
  })

  test("render bioware with essence cost", async () => {
    // Test with /dev/grrl (id 4) who has bioware
    setup("4")

    const biowareTable = await screen.findByRole("table", {
      name: "bioware",
    })

    expect(biowareTable).toBeInTheDocument()

    // Check for bioware-specific column headers
    expect(
      within(biowareTable).getByRole("columnheader", { name: "Name" }),
    ).toBeInTheDocument()
    expect(
      within(biowareTable).getByRole("columnheader", { name: "Essence" }),
    ).toBeInTheDocument()

    // Check Cerebral Booster with essence cost
    const cerebralBooster = within(biowareTable).getByRole("cell", {
      name: "Cerebral Booster",
    })
    const cerebralBoosterRow = cerebralBooster.closest("tr")
    expect(cerebralBoosterRow).toBeInTheDocument()
    expect(cerebralBoosterRow).toHaveTextContent("0.2")
  })

  test("render vehicles with stats", async () => {
    setup()

    const vehiclesTable = await screen.findByRole("table", {
      name: "vehicles",
    })

    expect(vehiclesTable).toBeInTheDocument()

    // Check for vehicle-specific column headers
    expect(
      within(vehiclesTable).getByRole("columnheader", { name: "Name" }),
    ).toBeInTheDocument()
    expect(
      within(vehiclesTable).getByRole("columnheader", { name: "Handling" }),
    ).toBeInTheDocument()
    expect(
      within(vehiclesTable).getByRole("columnheader", { name: "Speed" }),
    ).toBeInTheDocument()
    expect(
      within(vehiclesTable).getByRole("columnheader", { name: "Body" }),
    ).toBeInTheDocument()
    expect(
      within(vehiclesTable).getByRole("columnheader", { name: "Armor" }),
    ).toBeInTheDocument()

    // Check Harley-Davidson Scorpion
    const scorpion = within(vehiclesTable).getByRole("cell", {
      name: "Harley-Davidson Scorpion",
    })
    const scorpionRow = scorpion.closest("tr")
    expect(scorpionRow).toBeInTheDocument()
    expect(scorpionRow).toHaveTextContent("3/5") // handling
    expect(scorpionRow).toHaveTextContent("200") // topSpeed
    expect(scorpionRow).toHaveTextContent("7") // body
    expect(scorpionRow).toHaveTextContent("6") // armor
  })

  test("render imaging gear with rating and mods", async () => {
    setup()

    const imagingTable = await screen.findByRole("table", {
      name: "imaging",
    })

    expect(imagingTable).toBeInTheDocument()

    // Check for imaging-specific column headers
    expect(
      within(imagingTable).getByRole("columnheader", { name: "Name" }),
    ).toBeInTheDocument()
    expect(
      within(imagingTable).getByRole("columnheader", { name: "Rating" }),
    ).toBeInTheDocument()
    expect(
      within(imagingTable).getByRole("columnheader", { name: "Mods" }),
    ).toBeInTheDocument()

    // Check Contacts with rating and mods
    const contacts = within(imagingTable).getByRole("cell", {
      name: "Contacts",
    })
    const contactsRow = contacts.closest("tr")
    expect(contactsRow).toBeInTheDocument()
    expect(contactsRow).toHaveTextContent("3") // rating
    expect(contactsRow).toHaveTextContent("Image Link") // mod
  })

  test("render audio gear with rating", async () => {
    setup()

    const audioTable = await screen.findByRole("table", {
      name: "audio",
    })

    expect(audioTable).toBeInTheDocument()

    // Check Earbuds with rating
    const earbuds = within(audioTable).getByRole("cell", {
      name: "Earbuds",
    })
    const earbudsRow = earbuds.closest("tr")
    expect(earbudsRow).toBeInTheDocument()
    expect(earbudsRow).toHaveTextContent("3") // rating
  })

  test("render sensor gear with rating and mods", async () => {
    setup()

    const sensorTable = await screen.findByRole("table", {
      name: "sensor",
    })

    expect(sensorTable).toBeInTheDocument()

    // Check Wall-mounted Housing with rating and mods with ratings
    const wallMounted = within(sensorTable).getByRole("cell", {
      name: "Wall-mounted Housing",
    })
    const wallMountedRow = wallMounted.closest("tr")
    expect(wallMountedRow).toBeInTheDocument()
    expect(wallMountedRow).toHaveTextContent("6") // gear rating
    expect(wallMountedRow).toHaveTextContent("Laser Range Finder") // mod without rating
    expect(wallMountedRow).toHaveTextContent("Camera Function 3") // mod with rating
  })

  test("render cyberdeck with matrix attributes", async () => {
    // Test with Winterhawk (id 4) who has a cyberdeck
    setup("4")

    const cyberdeckTable = await screen.findByRole("table", {
      name: "cyberdeck",
    })

    expect(cyberdeckTable).toBeInTheDocument()

    // Check for cyberdeck-specific column headers
    expect(
      within(cyberdeckTable).getByRole("columnheader", { name: "Name" }),
    ).toBeInTheDocument()
    expect(
      within(cyberdeckTable).getByRole("columnheader", {
        name: "Device Rating",
      }),
    ).toBeInTheDocument()
    expect(
      within(cyberdeckTable).getByRole("columnheader", { name: "Attack" }),
    ).toBeInTheDocument()
    expect(
      within(cyberdeckTable).getByRole("columnheader", { name: "Sleaze" }),
    ).toBeInTheDocument()
    expect(
      within(cyberdeckTable).getByRole("columnheader", {
        name: "Data Processing",
      }),
    ).toBeInTheDocument()
    expect(
      within(cyberdeckTable).getByRole("columnheader", { name: "Firewall" }),
    ).toBeInTheDocument()

    // Check Renraku Kitsune
    const renrakuKitsune = within(cyberdeckTable).getByRole("cell", {
      name: "Renraku Kitsune",
    })
    const renrakuKitsuneRow = renrakuKitsune.closest("tr")
    expect(renrakuKitsuneRow).toBeInTheDocument()
    expect(renrakuKitsuneRow).toHaveTextContent("4") // device rating
    expect(renrakuKitsuneRow).toHaveTextContent("7") // attack
    expect(renrakuKitsuneRow).toHaveTextContent("6") // sleaze
    // Note: data processing and firewall are derived from device rating for cyberdecks
  })

  test("render commlink with matrix attributes", async () => {
    // Test with Frosty (id 7) who has a commlink
    setup("7")

    const commlinkTable = await screen.findByRole("table", {
      name: "commlink",
    })

    expect(commlinkTable).toBeInTheDocument()

    // Check Meta Link
    const metaLink = within(commlinkTable).getByRole("cell", {
      name: "Meta Link",
    })
    const metaLinkRow = metaLink.closest("tr")
    expect(metaLinkRow).toBeInTheDocument()
    expect(metaLinkRow).toHaveTextContent("1") // device rating
    expect(metaLinkRow).toHaveTextContent("0") // firewall
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
