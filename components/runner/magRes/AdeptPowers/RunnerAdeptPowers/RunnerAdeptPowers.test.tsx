import { Props, RunnerAdeptPowers } from "."
import {
  render,
  getByText as contentGetByText,
  SliderHelper,
} from "@/test/testUtils"
import { mockedRunners } from "@/test/mocks"
import { CHANGE_POWER_LEVEL, REMOVE_POWER } from "../.."

describe("<RunnerAdeptPowers/>", () => {
  const setup = () => {
    const props: Props = {
      powers: mockedRunners[7].powers,
      dispatch: jest.fn(),
    }
    return { ...render(<RunnerAdeptPowers {...props} />), props }
  }
  it("should display the runner's adept powers", () => {
    const { getByText } = setup()

    expect(mockedRunners[7].powers.length).toBeGreaterThan(1)
    mockedRunners[7].powers.forEach(({ name, activation }) => {
      expect(getByText(name)).toBeInTheDocument()
      const row = getByText(name).closest("tr")

      expect(contentGetByText(row, activation)).toBeInTheDocument()
    })
  })

  it("should dispatch the remove adept power", () => {
    const { getByLabelText, props } = setup()

    getByLabelText("Remove Improved Reflexes").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: REMOVE_POWER,
      payload: { removePower: 1 },
    })
  })

  it("should dispatch update adept power level", () => {
    const { getByTestId, props } = setup()

    SliderHelper.change(getByTestId("slider-Improved Reflexes"), 4, 1, 4)

    expect(props.dispatch).toHaveBeenCalledWith({
      type: CHANGE_POWER_LEVEL,
      payload: {
        powerLevel: {
          powerIndex: 1,
          level: 4,
        },
      },
    })
  })
})
