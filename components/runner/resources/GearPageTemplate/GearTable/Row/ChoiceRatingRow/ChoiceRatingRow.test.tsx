import {
  DispatchContext,
  gearMagicConfigOptions,
  gearTableConfigOptions,
} from "@/components/runner/resources/util"
import { foci } from "@/data/focus"
import { fireEvent, render } from "@/test/testUtils"
import { ChoiceRatingRow, ChoiceRatingRowProps } from "./index"

describe("ChoiceRatingRow", () => {
  const setup = (focusName = "Qi Focus") => {
    const props: ChoiceRatingRowProps = {
        cols: [
          gearTableConfigOptions.buy,
          gearTableConfigOptions.name,
          gearMagicConfigOptions.choice,
          gearMagicConfigOptions.setRating,
          gearMagicConfigOptions.karmaCost,
        ],
        gear: foci.find(({ name }) => name === focusName),
        index: 0,
      },
      dispatch = jest.fn()
    return {
      ...render(
        <DispatchContext.Provider value={dispatch}>
          <table>
            <tbody>
              <ChoiceRatingRow {...props} />
            </tbody>
          </table>
        </DispatchContext.Provider>,
      ),
      dispatch,
    }
  }
  it("should allow users to select adept powers and select rating", () => {
    const { getByText } = setup()

    expect(getByText("Adrenaline boost Qi Focus")).toBeInTheDocument()

    expect(getByText("Adrenaline boost")).toBeInTheDocument()

    fireEvent.mouseDown(getByText("Adrenaline boost"))

    getByText("Improved reflexes").click()
    expect(getByText("Improved reflexes Qi Focus")).toBeInTheDocument()
  })

  it("should support changing the rating of the focus", () => {
    const { getByText } = setup()

    expect(getByText("2")).toBeInTheDocument()
  })
})
