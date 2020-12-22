import { RemainingNuyen, Props } from "./"
import { render } from "../../../../test/testUtils"
import { mockedRunners } from "../../../../test/mocks"

describe("<RemainingNuyen/>", () => {
  const setup = ({ runner = mockedRunners[9] }: Partial<Props> = {}) => {
    const props: Props = {
      runner,
    }
    return render(<RemainingNuyen {...props} />)
  }

  it("should display the max nuyen if there are not resources purchased yet", () => {
    const { getByText } = setup({ runner: mockedRunners[8] })
    expect(getByText("8000¥/8000¥")).toBeInTheDocument()
  })

  it("should display total nuyen and remaining nuyen", () => {
    const { getByText } = setup()

    expect(getByText("Nuyen:")).toBeInTheDocument()
    expect(getByText("274230¥/275000¥")).toBeInTheDocument()
  })
})
