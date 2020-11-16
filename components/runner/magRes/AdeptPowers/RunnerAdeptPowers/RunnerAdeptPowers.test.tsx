import { Props, RunnerAdeptPowers } from "."
import {
  render,
  getByText as contentGetByText,
} from "../../../../../test/testUtils"
import { mockedRunners } from "../../../../../test/mocks"

describe("<RunnerAdeptPowers/>", () => {
  const setup = () => {
    const props: Props = {
      powers: mockedRunners[7].powers,
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
})
