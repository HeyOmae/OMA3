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
    const { getByText } = setup()

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
  })
})
