import { otherElectronics } from "@/data/electronics"
import { render, SliderHelper } from "@/test/testUtils"
import {
  DispatchContext,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
} from "../../../util"
import { RatingRow } from "./index"

describe("<RatingRow/>", () => {
  const headJammer = otherElectronics[2]
  const setup = () => {
    const cols = [
      gearTableConfigOptions.buy,
      gearRatingTableConfigOption.setRating,
    ]
    const dispatch = jest.fn()

    return {
      ...render(
        <DispatchContext.Provider value={dispatch}>
          <table>
            <tbody>
              <RatingRow gear={headJammer} index={1} cols={cols} />
            </tbody>
          </table>
        </DispatchContext.Provider>,
      ),
      dispatch,
    }
  }

  it("set current rating to 1 if not set", () => {
    const { getByLabelText, dispatch } = setup()

    getByLabelText(`Add ${headJammer.name}`).click()

    expect(dispatch).toHaveBeenCalledWith({
      type: undefined,
      payload: { ...headJammer, currentRating: 1 },
    })
  })

  it("should update rating and purchase gear", () => {
    const { getByLabelText, getByTestId, dispatch } = setup()

    SliderHelper.change(getByTestId("Headjammer-rating"), 5, 1, 6)

    getByLabelText(`Add ${headJammer.name}`).click()

    expect(dispatch).toHaveBeenCalledWith({
      type: undefined,
      payload: { ...headJammer, currentRating: 5, cost: 750 },
    })
  })
})
