import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getAllByText as getAllTextInContainer,
  getByText as getTextInContainer,
} from "@/test/testUtils"
import Audio from "./index"

describe("<Audio />", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(
      withTestRouter(<Audio />, {
        query: { id: "10" },
        asPath: "/10/resources/audio/",
      }),
    )
  it("should display the stats for imaging devices", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = getByText("Buy").closest("tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Rating")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    const laserMicRow = getByLabelText("Add Laser Microphone").closest("tr")

    expect(
      getTextInContainer(laserMicRow, "Laser Microphone"),
    ).toBeInTheDocument()
    expect(getTextInContainer(laserMicRow, "1")).toBeInTheDocument()
    expect(getTextInContainer(laserMicRow, "2")).toBeInTheDocument()
    expect(getTextInContainer(laserMicRow, "100¥")).toBeInTheDocument()
  })
  describe("purchased audio device", () => {
    xit("should have a link to the audio mod page", async () => {
      const { getByText, getByLabelText } = setup()

      await waitFor(() => expect(getByText("Sell")).toBeInTheDocument())

      expect(getByText("Mod")).toBeInTheDocument()
      expect(getByLabelText("Mod Earbuds (0)").closest("a")).toHaveAttribute(
        "href",
        "/10/resources/imaging/0",
      )
    })

    xit("should not have a link to imaging mod page if the device in unmodifiable", async () => {
      const { getByText, getByLabelText } = setup()

      await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

      getByLabelText("Add Mage-sight-goggles").click()
      const mageSightRow = getByLabelText("Remove Mage-sight-goggles").closest(
        "tr",
      )

      // No rating and no mods
      expect(getAllTextInContainer(mageSightRow, "N/A")).toHaveLength(2)
    })
  })
})
