import { render, withTestRouter } from "../../testUtils"
import ResourcePage from "@/pages/[id]/resources"
import { waitFor } from "@testing-library/react"

describe("Resource Page", () => {
  const setup = () =>
    render(
      withTestRouter(<ResourcePage />, {
        query: { id: "1" },
        pathname: "/[id]/resources",
        asPath: "/1/resources/",
      }),
    )

  it("should exist", async () => {
    const { getByText, getAllByText } = setup()

    await waitFor(() => {
      expect(getByText("Resources")).toBeInTheDocument()
    })
    expect(getByText("Weapons")).toBeInTheDocument()

    expect(getByText("Melee Weapons").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/melee",
    )
    expect(getByText("Projectile Weapons").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/projectile",
    )
    expect(getByText("Firearms").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/firearms",
    )
    expect(getByText("Armors").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/armor",
    )
    expect(getByText("Commlinks").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/commlinks",
    )
    expect(getByText("Cyberdecks").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/cyberdecks",
    )
    expect(getByText("Rigger Consoles").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/consoles",
    )
    expect(getByText("Electronic Accessories").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/eaccessories",
    )
    expect(getByText("RFID Tags").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/tags",
    )
    expect(getByText("Other Electronics").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/other-electronics",
    )
    expect(getByText("Tools").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/tools",
    )
    expect(getByText("Imaging Devices").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/imaging",
    )
    expect(getByText("Audio Devices").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/audio",
    )
    expect(getByText("Sensor Devices").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/sensor",
    )

    // security stuff in other test section

    // I should come up with a smarter way to do this, but I can't right now
    expect(getAllByText("Biotech")[1].closest("a")).toHaveAttribute(
      "href",
      "/1/resources/biotech",
    )

    // Rigger stuff
    expect(getByText("Drones").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/drones",
    )
    expect(getByText("Vehicles").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/vehicles",
    )

    // Augmentations
    expect(getByText("Cyberware").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/cyberware",
    )
  })

  it("should render links to security devices", () => {
    const { getByText } = setup()

    expect(getByText("locks").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/security/locks",
    )
    expect(getByText("restraints").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/security/restraints",
    )
    expect(getByText("bne").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/security/bne",
    )
    expect(getByText("chemicals").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/security/chemicals",
    )
    expect(getByText("survival").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/security/survival",
    )
    expect(getByText("grappleGun").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/security/grappleGun",
    )
    expect(getByText("toxins").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/security/toxins",
    )
    expect(getByText("drugs").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/security/drugs",
    )
  })

  it("should render magical gear", () => {
    const { getByText } = setup()

    // This one is hard coded
    expect(getByText("Foci").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/foci",
    )

    // These ones are read from the MagicGear data file
    expect(getByText("magicSupplies").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/magic/magicSupplies",
    )
    expect(getByText("spellFormula").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/magic/spellFormula",
    )
    expect(getByText("focusFormula").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/magic/focusFormula",
    )
  })
})
