import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getTextInContainer,
  closest,
  findGearReference,
} from "@/test/testUtils"
import Audio from "./index"

describe("<Audio />", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(
      withTestRouter(<Audio />, {
        query: { id: "10" },
        asPath: "/10/resources/audio",
      }),
    )
  it("should display the stats for imaging devices", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = closest(getByText("Buy"), "tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Rating")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    const laserMicRow = closest(getByLabelText("Add Laser Microphone"), "tr")

    expect(
      getTextInContainer(laserMicRow, "Laser Microphone"),
    ).toBeInTheDocument()
    expect(getTextInContainer(laserMicRow, "1")).toBeInTheDocument()
    expect(getTextInContainer(laserMicRow, "2")).toBeInTheDocument()
    expect(getTextInContainer(laserMicRow, "100¥")).toBeInTheDocument()
  })
  describe("purchased audio device", () => {
    it("should have a link to the audio mod page", async () => {
      const { getByText, getByLabelText } = setup()

      await waitFor(() => expect(getByText("Sell")).toBeInTheDocument())

      expect(getByText("Mod")).toBeInTheDocument()
      expect(getByLabelText("Mod Earbuds (0)").closest("a")).toHaveAttribute(
        "href",
        "/10/resources/audio/0",
      )
    })
  })

  it("should show the rulebook page for gear", async () => {
    setup()
    expect(await findGearReference("Earbuds", 275)).toBeInTheDocument()
  })
})
