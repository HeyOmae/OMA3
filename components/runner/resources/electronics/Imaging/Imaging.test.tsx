import {
  render,
  setupIndexedDB,
  withTestRouter,
  getByText as getTextInContainer,
  waitFor,
} from "@/test/testUtils"
import Imaging from "./"

describe("<Imaging/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<Imaging />, { query: { id: "10" } }))
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
})
