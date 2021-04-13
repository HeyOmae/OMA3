import { mockedRunners } from "@/test/mocks"
import { render } from "@/test/testUtils"
import { RemainingCapacity, Props } from "./index"

describe("<RemainingCapacity />", () => {
  const setup = (props: Props) => {
    return render(<RemainingCapacity {...props} />)
  }
  it("should display the remaining capacity of a piece of gear", () => {
    const { getByText } = setup({ gear: mockedRunners[9].resources.imaging[0] })

    expect(getByText("Capacity:")).toBeInTheDocument()
    expect(getByText("1/3")).toBeInTheDocument()
  })

  it("should display 0 capacity used if the gear is unmodded", () => {
    const { getByText } = setup({
      gear: mockedRunners[10].resources.imaging[0],
    })

    expect(getByText("0/4")).toBeInTheDocument()
  })
})
