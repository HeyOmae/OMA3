import { render } from "../../../../../test/testUtils"
import { RunnerComplexForms, Props } from "./index"
import { mockedRunners } from "../../../../../test/mocks"

describe("<RunnerComplexForms", () => {
  const setup = () => {
    const props: Props = {
      dispatch: jest.fn(),
      complexForms: mockedRunners[8].complexForms,
    }
    return { ...render(<RunnerComplexForms {...props} />), props }
  }
  it("should display a list of known complex forms", () => {
    const { getByText, props } = setup()

    props.complexForms.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  // TODO: finish this test
  it("should dispatch the remove complex form action", () => {
    const { getByLabelText } = setup()

    getByLabelText("Remove Pulse Storm").click()
  })
})
