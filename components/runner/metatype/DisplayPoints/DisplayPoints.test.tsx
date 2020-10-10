import { DisplayPoints, Props } from "./"
import { render } from "../../../../test/testUtils"
import { mockedRunners } from "../../../../test/mocks"
describe("DisplayPoints", () => {
  const setup = (props: Props = { runner: mockedRunners[2] }) =>
    render(<DisplayPoints {...props} />)
  it("should display the number of adjustment points and attribute points left", async () => {
    const { getByText } = setup()

    expect(getByText("Adjustment Points")).toBeInTheDocument()
    expect(getByText("4")).toBeInTheDocument()
    expect(getByText("Attribute Points")).toBeInTheDocument()
    expect(getByText("12")).toBeInTheDocument()
  })
})
