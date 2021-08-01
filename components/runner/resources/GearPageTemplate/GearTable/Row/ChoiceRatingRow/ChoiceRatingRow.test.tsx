import {
  DispatchContext,
  gearMagicConfigOptions,
  gearTableConfigOptions,
} from "@/components/runner/resources/util"
import { foci } from "@/data/focus"
import {
  fireEvent,
  render,
  setupIndexedDB,
  SliderHelper,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import { ChoiceRatingRow, ChoiceRatingRowProps } from "./index"

describe("ChoiceRatingRow", () => {
  beforeAll(setupIndexedDB)
  const setup = (focusName = "Qi Focus") => {
    const props: ChoiceRatingRowProps = {
        cols: [
          gearTableConfigOptions.buy,
          gearTableConfigOptions.name,
          gearMagicConfigOptions.choice,
          gearMagicConfigOptions.setRating,
          gearMagicConfigOptions.karmaCost,
          gearMagicConfigOptions.avail,
          gearTableConfigOptions.cost,
        ],
        gear: foci.find(({ name }) => name === focusName),
        index: 0,
      },
      dispatch = jest.fn()
    return {
      ...render(
        withTestRouter(
          <DispatchContext.Provider value={dispatch}>
            <table>
              <tbody>
                <ChoiceRatingRow {...props} />
              </tbody>
            </table>
          </DispatchContext.Provider>,
          { query: { id: "10" } },
        ),
      ),
      dispatch,
    }
  }
  it("should allow users to select adept powers and select rating", () => {
    const { getByText, getByLabelText } = setup()

    expect(getByText("Adrenaline boost Qi Focus")).toBeInTheDocument()
    expect(getByLabelText(RegExp("Add .*Qi Focus"))).toBeInTheDocument()

    expect(getByText("Adrenaline boost")).toBeInTheDocument()

    fireEvent.mouseDown(getByText("Adrenaline boost"))

    getByText("Improved reflexes").click()
    expect(getByText("Improved reflexes Qi Focus")).toBeInTheDocument()
    expect(getByLabelText("Add Improved reflexes Qi Focus")).toBeInTheDocument()
  })

  it("should support changing the rating of the focus", () => {
    const { getByText, getByTestId } = setup()

    // Karma cost
    expect(getByText("2")).toBeInTheDocument()
    // Avail
    expect(getByText("1L")).toBeInTheDocument()
    // Cost
    expect(getByText("3000¥")).toBeInTheDocument()

    SliderHelper.change(
      getByTestId("Adrenaline boost Qi Focus-rating"),
      4,
      1,
      7,
    )

    // Karma cost
    expect(getByText("8")).toBeInTheDocument()
    // Avail
    expect(getByText("4L")).toBeInTheDocument()
    // Cost
    expect(getByText("12000¥")).toBeInTheDocument()
  })

  it("should allow users to select spell category", () => {
    const { getByText } = setup("Counterspelling Focus")

    expect(getByText("Combat Counterspelling Focus")).toBeInTheDocument()

    expect(getByText("Combat")).toBeInTheDocument()

    fireEvent.mouseDown(getByText("Combat"))

    getByText("Illusion").click()
    expect(getByText("Illusion Counterspelling Focus")).toBeInTheDocument()
  })

  it("should allow users to select spirit types", () => {
    const { getByText } = setup("Summoning Focus")

    expect(getByText("Air Summoning Focus")).toBeInTheDocument()

    expect(getByText("Air")).toBeInTheDocument()

    fireEvent.mouseDown(getByText("Air"))

    getByText("Kin").click()
    expect(getByText("Kin Summoning Focus")).toBeInTheDocument()
  })

  it("should allow users to select melee weapons the user bought", async () => {
    const { getByText } = setup("Weapon Focus")

    await waitFor(() => {
      expect(getByText("Katana Weapon Focus")).toBeInTheDocument()
    })

    expect(getByText("Katana")).toBeInTheDocument()

    fireEvent.mouseDown(getByText("Katana"))

    getByText("Combat Knife").click()
    expect(getByText("Combat Knife Weapon Focus")).toBeInTheDocument()
  })
})
