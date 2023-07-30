import {
  render,
  setupIndexedDB,
  withTestRouter,
  screen,
  userEvent,
} from "../../testUtils"
import ResourcePage from "@/pages/[id]/resources"
import { mockedRunners } from "@/test/mocks"

describe("Resource Page", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    const user = userEvent.setup()
    render(
      withTestRouter(<ResourcePage />, {
        query: { id: "10" },
        pathname: "/[id]/resources",
        asPath: "/10/resources",
      }),
    )
    return user
  }

  const gear = Object.entries(mockedRunners[9].resources)

  it("should exist", async () => {
    setup()

    // wait for the runner to load from indexeddb
    expect(await screen.findByText(gear[0][0])).toBeInTheDocument()

    expect(screen.getByText("Weapons")).toBeInTheDocument()

    expect(screen.getByText("Melee Weapons").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/melee",
    )
    expect(screen.getByText("Projectile Weapons").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/projectile",
    )
    expect(screen.getByText("Firearms").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/firearms",
    )
    expect(screen.getByText("Armors").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/armor",
    )
    expect(screen.getByText("Commlinks").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/commlinks",
    )
    expect(screen.getByText("Cyberdecks").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/cyberdecks",
    )
    expect(screen.getByText("Rigger Consoles").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/consoles",
    )
    expect(
      screen.getByText("Electronic Accessories").closest("a"),
    ).toHaveAttribute("href", "/10/resources/eaccessories")
    expect(screen.getByText("RFID Tags").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/tags",
    )
    expect(screen.getByText("Other Electronics").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/other-electronics",
    )
    expect(screen.getByText("Tools").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/tools",
    )
    expect(screen.getByText("Imaging Devices").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/imaging",
    )
    expect(screen.getByText("Audio Devices").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/audio",
    )
    expect(screen.getByText("Sensor Devices").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/sensor",
    )

    // security stuff in other test section

    // I should come up with a smarter way to do this, but I can't right now
    expect(screen.getAllByText("Biotech")[1].closest("a")).toHaveAttribute(
      "href",
      "/10/resources/biotech",
    )

    // Rigger stuff
    expect(screen.getByText("Drones").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/drones",
    )
    expect(screen.getByText("Vehicles").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/vehicles",
    )

    // Augmentations
    expect(screen.getByText("Cyberware").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/cyberware",
    )
    expect(screen.getByText("Bioware").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/bioware",
    )

    expect(screen.getByText("Lifestyles").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/lifestyle",
    )
  })

  it("should render links to security devices", async () => {
    setup()

    // wait for the runner to load from indexeddb
    expect(await screen.findByText(gear[0][0])).toBeInTheDocument()

    expect(screen.getByText("locks").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/locks",
    )
    expect(screen.getByText("restraints").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/restraints",
    )
    expect(screen.getByText("bne").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/bne",
    )
    expect(screen.getByText("chemicals").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/chemicals",
    )
    expect(screen.getByText("survival").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/survival",
    )
    expect(screen.getByText("grappleGun").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/grappleGun",
    )
    expect(screen.getByText("toxins").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/toxins",
    )
    expect(screen.getByText("drugs").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/security/drugs",
    )
  })

  it("should render magical gear", async () => {
    setup()

    // wait for the runner to load from indexeddb
    expect(await screen.findByText(gear[0][0])).toBeInTheDocument()

    // This one is hard coded
    expect(screen.getByText("Foci").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/foci",
    )

    // These ones are read from the MagicGear data file
    expect(screen.getByText("magicSupplies").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/magic/magicSupplies",
    )
    expect(screen.getByText("spellFormula").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/magic/spellFormula",
    )
    expect(screen.getByText("focusFormula").closest("a")).toHaveAttribute(
      "href",
      "/10/resources/magic/focusFormula",
    )
  })

  it("should display all the gear a runner has purchased", async () => {
    setup()

    // Grab the first category and make sure it appears
    expect(await screen.findByText(gear[0][0])).toBeInTheDocument()

    gear.forEach(([resourceKey, gearArray]) => {
      const resourceType = screen.getByText(resourceKey)
      expect(resourceType.closest("a")).toHaveAttribute(
        "href",
        `/10/resources/${resourceKey}`,
      )

      gearArray.forEach(({ name }) =>
        expect(screen.getByText(name)).toBeInTheDocument(),
      )
    })
  })

  it("should allow a runner to raise nuyen by spending karma", async () => {
    const user = setup()

    expect(
      await screen.findByRole("definition", { name: "Nuyen Value" }),
    ).toHaveTextContent("275000¥")

    await user.click(
      screen.getByRole("button", { name: "Increment Karma to Nuyen" }),
    )

    expect(
      screen.getByRole("definition", { name: "Nuyen Value" }),
    ).toHaveTextContent("277000¥")
  })
})
