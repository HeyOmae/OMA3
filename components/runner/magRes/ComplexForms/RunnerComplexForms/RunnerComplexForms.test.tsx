import { render } from "../../../../../test/testUtils"
import { RunnerComplexForms, Props } from "./index"
import { mockedRunners } from "../../../../../test/mocks"
import { REMOVE_COMPLEX_FORM } from "../.."

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

  it("should dispatch the remove complex form action", () => {
    const { getByLabelText, props } = setup()

    getByLabelText("Remove Pulse Storm").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: REMOVE_COMPLEX_FORM,
      payload: { removeComplexForm: 2 },
    })
  })
})
