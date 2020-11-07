import { Rituals, Props } from "./index"
import { render } from "../../../../test/testUtils"
import ritualData from "../../../../data/rituals.json"
import { SET_RITUAL } from ".."

describe("<Rituals />", () => {
  const setup = () => {
    const props: Props = {
      dispatch: jest.fn(),
    }
    return { ...render(<Rituals {...props} />), props }
  }

  it("should display the ritual spells", () => {
    const { getByText } = setup()

    ritualData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  it("should dispatch add ritual action", () => {
    const { getByLabelText, props } = setup()

    getByLabelText("Add Circle of healing").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: SET_RITUAL,
      payload: { ritual: ritualData[0] },
    })
  })
})
