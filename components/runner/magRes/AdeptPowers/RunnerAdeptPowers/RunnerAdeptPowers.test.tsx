import { Props, RunnerAdeptPowers } from "."
import {
  render,
  getByText as contentGetByText,
} from "../../../../../test/testUtils"
import { mockedRunners } from "../../../../../test/mocks"
import { REMOVE_POWER } from "../.."

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
    mockedRunners[7].powers.forEach(({ name, activation, cost }) => {
      expect(getByText(name)).toBeInTheDocument()
      const row = getByText(name).closest("tr")

      expect(contentGetByText(row, activation)).toBeInTheDocument()
      expect(contentGetByText(row, cost.toString())).toBeInTheDocument()
    })
  })

  it("should dispatch the remove adept power", () => {
    const { getByLabelText, props } = setup()

    getByLabelText("Remove Improved reflexes").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: REMOVE_POWER,
      payload: { removePower: 1 },
    })
  })
})
