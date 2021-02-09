import { otherElectronics } from "@/data/electronics"
import { render, SliderHelper } from "@/test/testUtils"
import { SettingRating } from "./index"

describe("<SettingRating />", () => {
  const setup = () => {
    const headJammer = otherElectronics[2]
    const dispatch = jest.fn()
    return {
      ...render(<SettingRating gear={headJammer} setRating={dispatch} />),
      dispatch,
    }
  }
  it("should call setRating after changing the slider", () => {
    const { getByTestId, dispatch } = setup()

    expect(getByTestId("Headjammer-rating").querySelector("input")).toHaveValue(
      "1",
    )

    SliderHelper.change(getByTestId("Headjammer-rating"), 5, 1, 6)

    expect(dispatch).toHaveBeenCalledWith(5)
  })
})
