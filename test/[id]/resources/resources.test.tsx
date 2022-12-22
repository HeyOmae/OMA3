import { render, setupIndexedDB, withTestRouter } from "../../testUtils"
import ResourcePage from "@/pages/[id]/resources"
import { waitFor } from "@testing-library/react"
import { mockedRunners } from "@/test/mocks"

describe("Resource Page", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(
      withTestRouter(<ResourcePage />, {
        query: { id: "10" },
        pathname: "/[id]/resources",
        asPath: "/10/resources",
      }),
    )

  const gear = Object.entries(mockedRunners[9].resources)

  it("should exist", async () => {
    const { getByText, getAllByText } = setup()

    // wait for the runner to load from indexeddb
    await waitFor(() => getByText(gear[0][0]))

    expect(getByText("Weapons")).toBeInTheDocument()

    expect(getByText("Melee Weapons").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/melee",
    )
    expect(getByText("Projectile Weapons").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/projectile",
    )
    expect(getByText("Firearms").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/firearms",
    )
    expect(getByText("Armors").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/armor",
    )
    expect(getByText("Commlinks").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/commlinks",
    )
    expect(getByText("Cyberdecks").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/cyberdecks",
    )
    expect(getByText("Rigger Consoles").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/consoles",
    )
    expect(getByText("Electronic Accessories").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/eaccessories",
    )
    expect(getByText("RFID Tags").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/tags",
    )
    expect(getByText("Other Electronics").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/other-electronics",
    )
    expect(getByText("Tools").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/tools",
    )
    expect(getByText("Imaging Devices").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/imaging",
    )
    expect(getByText("Audio Devices").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/audio",
    )
    expect(getByText("Sensor Devices").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/sensor",
    )

    // security stuff in other test section

    // I should come up with a smarter way to do this, but I can't right now
    expect(getAllByText("Biotech")[1].closest("a")).toHaveAttribute(
      "href",
      "/10/resources/biotech",
    )

    // Rigger stuff
    expect(getByText("Drones").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/drones",
    )
    expect(getByText("Vehicles").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/vehicles",
    )

    // Augmentations
    expect(getByText("Cyberware").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/cyberware",
    )
    expect(getByText("Bioware").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/bioware",
    )

    expect(getByText("Lifestyles").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/lifestyle",
    )
  })

  it("should render links to security devices", async () => {
    const { getByText } = setup()

    // wait for the runner to load from indexeddb
    await waitFor(() => getByText(gear[0][0]))

    expect(getByText("locks").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/locks",
    )
    expect(getByText("restraints").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/restraints",
    )
    expect(getByText("bne").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/bne",
    )
    expect(getByText("chemicals").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/chemicals",
    )
    expect(getByText("survival").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/survival",
    )
    expect(getByText("grappleGun").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/grappleGun",
    )
    expect(getByText("toxins").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/toxins",
    )
    expect(getByText("drugs").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/drugs",
    )
  })

  it("should render magical gear", async () => {
    const { getByText } = setup()

    // wait for the runner to load from indexeddb
    await waitFor(() => getByText(gear[0][0]))

    // This one is hard coded
    expect(getByText("Foci").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/foci",
    )

    // These ones are read from the MagicGear data file
    expect(getByText("magicSupplies").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/magic/magicSupplies",
    )
    expect(getByText("spellFormula").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/magic/spellFormula",
    )
    expect(getByText("focusFormula").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/magic/focusFormula",
    )
  })

  it("should display all the gear a runner has purchased", async () => {
    const { getByText } = setup()

    // Grab the first category and make sure it appears
    await waitFor(() => getByText(gear[0][0]))

    gear.forEach(([resourceKey, gearArray]) => {
      const resourceType = getByText(resourceKey)
      expect(resourceType.closest("a")).toHaveAttribute(
        "href",
        `/10/resources/${resourceKey}`,
      )

      gearArray.forEach(({ name }) =>
        expect(getByText(name)).toBeInTheDocument(),
      )
    })
  })
})
