import { Runner } from "@/types/runner"
import { render, screen } from "@/test/testUtils"
import { RemainingEssence } from "./index"
import { mockedRunners } from "@/test/mocks"

describe("<RemainingEssence />", () => {
  const setup = (runner: Runner) => render(<RemainingEssence runner={runner} />)

  it("should display a runner's Essence", () => {
    setup(mockedRunners[2])

    expect(screen.getByText("Essence")).toBeInTheDocument()
    expect(screen.getByText(6)).toBeInTheDocument()
  })

  it("should display a runner's Essence when they have cyberware", () => {
    setup(mockedRunners[9])

    expect(screen.getByText("Essence")).toBeInTheDocument()
    expect(screen.getByText(2.3)).toBeInTheDocument()
  })

  it("should display a runner's Essence when they have cyberware and bioware", () => {
    setup(mockedRunners[10])

    expect(screen.getByText("Essence")).toBeInTheDocument()
    expect(screen.getByText(2.8)).toBeInTheDocument()
  })

  test("Sensitive System should double cyberware and bioward essence costs", () => {
    setup(mockedRunners[3])

    expect(screen.getByRole("definition")).toHaveTextContent("2.2")
  })
})
