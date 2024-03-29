import {
  render,
  setupIndexedDB,
  withTestRouter,
  getByText as getTextInContainer,
  getAllByText as getAllTextInContainer,
  waitFor,
  userEvent,
} from "@/test/testUtils"
import Imaging from "./"

describe("<Imaging/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(
      withTestRouter(<Imaging />, {
        query: { id: "10" },
        asPath: "/10/resources/imaging",
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

    const contactsRow = getByLabelText("Add Contacts").closest("tr")

    expect(getTextInContainer(contactsRow, "Contacts")).toBeInTheDocument()
    expect(getTextInContainer(contactsRow, "1")).toBeInTheDocument()
    expect(getTextInContainer(contactsRow, "2")).toBeInTheDocument()
    expect(getTextInContainer(contactsRow, "200¥")).toBeInTheDocument()
  })

  describe("purchased imaging device", () => {
    it("should have a link to the imaging mod page", async () => {
      const { getByText, getByLabelText } = setup()

      await waitFor(() => expect(getByText("Sell")).toBeInTheDocument())

      expect(getByText("Mod")).toBeInTheDocument()
      expect(getByLabelText("Mod Contacts (0)").closest("a")).toHaveAttribute(
        "href",
        "/10/resources/imaging/0",
      )
    })

    it("should not have a link to imaging mod page if the device in unmodifiable", async () => {
      const { getByText, getByLabelText } = setup()

      await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

      await userEvent.click(getByLabelText("Add Mage-sight-goggles"))
      const mageSightRow = getByLabelText("Remove Mage-sight-goggles").closest(
        "tr",
      )

      // No rating and no mods
      expect(getAllTextInContainer(mageSightRow, "N/A")).toHaveLength(2)
    })
  })
})
