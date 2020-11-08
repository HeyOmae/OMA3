import { RunnerRituals, Props } from "."
import { REMOVE_RITUAL } from "../.."
import { mockedRunners } from "../../../../../test/mocks"
import { render } from "../../../../../test/testUtils"

describe("<RunnerRituals />", () => {
  const setup = () => {
    const props: Props = {
      dispatch: jest.fn(),
      rituals: mockedRunners[6].rituals,
    }
    return { ...render(<RunnerRituals {...props} />), props }
  }

  it("should render rituals", () => {
    const { getByText } = setup()
    mockedRunners[6].rituals.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  it("should dispatch the remove action", () => {
    const { getByLabelText, props } = setup()

    getByLabelText("Remove Ward").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: REMOVE_RITUAL,
      payload: { removeRitual: 0 },
    })
  })
})
