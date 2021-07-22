import {
  waitFor,
  getByText as getTextInContainer,
  render,
  setupIndexedDB,
  withTestRouter,
  SliderHelper,
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
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  describe("rating", () => {
    it("should change the nuyen, karam cost, and availibility", async () => {
      const { getByText, getByTestId } = setup()

      await waitFor(() =>
        expect(getByText("Alchemical Focus")).toBeInTheDocument(),
      )

      const focusRow = getByText("Alchemical Focus").closest("tr")

      // karma cost
      expect(getTextInContainer(focusRow, "3")).toBeInTheDocument()
      // Nuyen cost
      expect(getTextInContainer(focusRow, "5000¥")).toBeInTheDocument()
      // availibility
      expect(getTextInContainer(focusRow, "1L")).toBeInTheDocument()

      SliderHelper.change(getByTestId("Alchemical Focus-rating"), 6, 1, 7)

      // karma cost
      expect(getTextInContainer(focusRow, "18")).toBeInTheDocument()
      // Nuyen cost
      expect(getTextInContainer(focusRow, "30000¥")).toBeInTheDocument()
      // availibility
      expect(getTextInContainer(focusRow, "6L")).toBeInTheDocument()
    })
  })
})
