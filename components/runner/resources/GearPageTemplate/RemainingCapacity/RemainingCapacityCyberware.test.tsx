import { mockedRunners } from "@/test/mocks"
import { render } from "@/test/testUtils"
import { RemainingCapacityCyberware } from "./RemainingCapacityCyberware"

describe("<RemaingingCapacityCyberware />", () => {
  const setup = (gear = mockedRunners[9].resources.cyberware[0]) => {
    return render(<RemainingCapacityCyberware gear={gear} />)
  }
  it("should do display capacity", () => {
    const { getByText } = setup()

    expect(getByText("0/8")).toBeInTheDocument()
  })

  it("should calculate the capacity used for the mod", () => {
    const { getByText } = setup(mockedRunners[10].resources.cyberware[1])

    expect(getByText("11/15")).toBeInTheDocument()
  })
})
