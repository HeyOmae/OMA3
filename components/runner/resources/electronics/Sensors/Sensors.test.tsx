import {
  render,
  setupIndexedDB,
  withTestRouter,
  getByText as getTextInContainer,
  waitFor,
  closest,
} from "@/test/testUtils"
import Sensors from "./"

describe("<Sensors/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(
      withTestRouter(<Sensors />, {
        query: { id: "10" },
        asPath: "/10/resources/sensor",
      }),
    )
  it("should display the stats for sensor devices", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = closest(getByText("Buy"), "tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Rating")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    const contactsRow = closest(getByLabelText("Add Sensor Array"), "tr")

    expect(getTextInContainer(contactsRow, "Sensor Array")).toBeInTheDocument()
    expect(getTextInContainer(contactsRow, "2")).toBeInTheDocument()
    expect(getTextInContainer(contactsRow, "3")).toBeInTheDocument()
    expect(getTextInContainer(contactsRow, "2000¥")).toBeInTheDocument()
  })

  describe("purchased sensor device", () => {
    it("should have a link to the sensor mod page", async () => {
      const { getByText, getByLabelText } = setup()

      await waitFor(() => expect(getByText("Sell")).toBeInTheDocument())

      expect(getByText("Mod")).toBeInTheDocument()
      expect(
        getByLabelText("Mod Wall-mounted Housing (0)").closest("a"),
      ).toHaveAttribute("href", "/10/resources/sensor/0")
    })
  })
})
