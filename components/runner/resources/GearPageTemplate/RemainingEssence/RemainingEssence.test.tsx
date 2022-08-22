import { Runner } from "@/types/runner"
import { render } from "@testing-library/react"
import { RemainingEssence } from "./index"
import { mockedRunners } from "@/test/mocks"

describe("<RemainingEssence />", () => {
  const setup = (runner: Runner) => {
    return render(<RemainingEssence runner={runner} />)
  }

  it("should display a runner's Essence", () => {
    const { getByText } = setup(mockedRunners[2])

    expect(getByText("Essence")).toBeInTheDocument()
    expect(getByText(6)).toBeInTheDocument()
  })

  it("should display a runner's Essence when they have cyberware", () => {
    const { getByText } = setup(mockedRunners[9])

    expect(getByText("Essence")).toBeInTheDocument()
    expect(getByText(2.3)).toBeInTheDocument()
  })

  it("should display a runner's Essence when they have cyberware and bioware", () => {
    const { getByText } = setup(mockedRunners[10])

    expect(getByText("Essence")).toBeInTheDocument()
    expect(getByText(2.8)).toBeInTheDocument()
  })
})
