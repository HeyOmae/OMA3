import { cyberware } from "@/data/cyberware"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getByTextInElement,
  getByTestId as getByTestIdElement,
  screen,
  SliderHelper,
} from "@/test/testUtils"
import CyberwareMod from "./index"

describe("<CyberwareMod />", () => {
  beforeAll(setupIndexedDB)
  const setup = ({ id = "10", gearIndex = "0" } = {}) =>
    render(withTestRouter(<CyberwareMod />, { query: { id, gearIndex } }))

  it("should render cyberware mods", async () => {
    const { queryByText } = setup()

    await waitFor(() => {
      return expect(queryByText("Buy")).toBeInTheDocument()
    })

    cyberware.forEach(({ name, useAs }) => {
      // I'm a terrible programmer for doing this in my test
      if (useAs.some((useage) => "capacity" in useage)) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(queryByText(name)).toBeInTheDocument()
      } else {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(queryByText(name)).not.toBeInTheDocument()
      }
    })
  })

  it("should display capacity used in cyberware", async () => {
    const { getByText } = setup({ id: "11", gearIndex: "1" })

    await waitFor(() => {
      expect(getByText("11/15")).toBeInTheDocument()
    })
  })

  it("should display capacity for all cyberware mods", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })

    const smugglingCompartmentRow = getByText("Smuggling Compartment").closest(
      "tr",
    )

    expect(
      getByTextInElement(smugglingCompartmentRow, "[2]"),
    ).toBeInTheDocument()
  })

  test("changing rating should change capacity", async () => {
    setup()

    const cyberwareRatingRow = (
      await screen.findByText("Hydraulic Jacks")
    ).closest("tr")

    expect(cyberwareRatingRow).toHaveTextContent("[1]")
    const ratingSlider = getByTestIdElement(
      cyberwareRatingRow,
      "Hydraulic Jacks-rating",
    )
    SliderHelper.change(ratingSlider, 4, 1, 6)
    expect(cyberwareRatingRow).toHaveTextContent("[4]")
    expect(cyberwareRatingRow).toHaveTextContent("10000¥")
  })

  // TODO, missing attirubte increase mods, take a look in to fixing later
})
