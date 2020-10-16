import { RunnerSkillTable, Props } from "."
import { render, within } from "../../../../test/testUtils"
import { mockedRunners } from "../../../../test/mocks"

describe("<RunnerSkillTable/>", () => {
  const setup = (props: Props = { skills: mockedRunners[1].skills }) =>
    render(<RunnerSkillTable {...props} />)

  it("should display a table with the runner's skills", async () => {
    const { getByText } = setup()

    const conjuringRow = within(getByText("conjuring").closest("tr"))
    // rating
    expect(await conjuringRow.findByText("6")).toBeInTheDocument()
    // attribute
    expect(await conjuringRow.findByText("Magic")).toBeInTheDocument()
    // specialization
    expect(await conjuringRow.findByText("banishing")).toBeInTheDocument()

    const sorceryRow = within(getByText("sorcery").closest("tr"))
    // rating
    expect(await sorceryRow.findByText("5")).toBeInTheDocument()
    // attribute
    expect(await sorceryRow.findByText("Magic")).toBeInTheDocument()

    const perceptionRow = within(getByText("perception").closest("tr"))
    // rating
    expect(await perceptionRow.findByText("4")).toBeInTheDocument()
    // attribute
    expect(
      await perceptionRow.findByText("Intuition/Logic")
    ).toBeInTheDocument()
  })
})
