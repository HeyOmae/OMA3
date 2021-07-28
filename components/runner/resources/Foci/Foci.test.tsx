import {
  waitFor,
  getByText as getTextInContainer,
  render,
  setupIndexedDB,
  withTestRouter,
  SliderHelper,
  fireEvent,
} from "@/test/testUtils"
import Foci from "./index"
import { foci } from "@/data/focus"

describe("foci", () => {
  beforeAll(setupIndexedDB)
  const setup = () => render(withTestRouter(<Foci />, { query: { id: "10" } }))

  it("should render foci stats", async () => {
    const { getByText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = getByText("Buy").closest("tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Choice")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Rating")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Karma Cost")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    foci.forEach(({ name }) => {
      expect(getByText(new RegExp(name))).toBeInTheDocument()
    })
  })

  describe("rating", () => {
    it("should change the nuyen, karam cost, and availibility", async () => {
      const { getByText, getByTestId } = setup()

      await waitFor(() =>
        expect(getByText(/Alchemical Focus/)).toBeInTheDocument(),
      )

      const focusRow = getByText(/Alchemical Focus/).closest("tr")

      // karma cost
      expect(getTextInContainer(focusRow, "3")).toBeInTheDocument()
      // Nuyen cost
      expect(getTextInContainer(focusRow, "5000¥")).toBeInTheDocument()
      // availibility
      expect(getTextInContainer(focusRow, "1L")).toBeInTheDocument()

      SliderHelper.change(getByTestId(/Alchemical Focus-rating/), 6, 1, 7)

      // karma cost
      expect(getTextInContainer(focusRow, "18")).toBeInTheDocument()
      // Nuyen cost
      expect(getTextInContainer(focusRow, "30000¥")).toBeInTheDocument()
      // availibility
      expect(getTextInContainer(focusRow, "6L")).toBeInTheDocument()
    })
  })

  describe("Qi Focus", () => {
    it("should select an adept power and increase rating based off the power point cost", async () => {
      const { getByText, getByTestId } = setup()

      await waitFor(() => expect(getByText(/Qi Focus/)).toBeInTheDocument())

      const focusRow = getByText("Adrenaline boost Qi Focus").closest("tr")

      // current rating
      expect(
        getByTestId("Adrenaline boost Qi Focus-rating").querySelector("input"),
      ).toHaveValue("1")
      // karma cost
      expect(getTextInContainer(focusRow, "2")).toBeInTheDocument()
      // Nuyen cost
      expect(getTextInContainer(focusRow, "3000¥")).toBeInTheDocument()
      // availibility
      expect(getTextInContainer(focusRow, "1L")).toBeInTheDocument()

      fireEvent.mouseDown(getTextInContainer(focusRow, "Adrenaline boost"))
      getByText("Improved physical attribute").click()

      expect(
        getByText("Improved physical attribute Qi Focus"),
      ).toBeInTheDocument()

      // TODO: make qi focus only support ratings based of adept power
      // const newFocusRow = getByText(
      //   "Improved physical attribute Qi Focus",
      // ).closest("tr")
      // // current rating
      // expect(
      //   getByTestId(
      //     "Improved physical attribute Qi Focus-rating",
      //   ).querySelector("input"),
      // ).toHaveValue("4")
      // // karma cost
      // expect(getTextInContainer(newFocusRow, "8")).toBeInTheDocument()
      // // Nuyen cost
      // expect(getTextInContainer(newFocusRow, "12000¥")).toBeInTheDocument()
      // // availibility
      // expect(getTextInContainer(newFocusRow, "4L")).toBeInTheDocument()
    })
  })
})
