import { RunnerSpells } from "./RunnerSpells"
import { render } from "../../../../test/testUtils"
import { mockedRunners } from "../../../../test/mocks"

describe("<RunnerSpells/>", () => {
  const setup = () => {
    return render(<RunnerSpells spells={mockedRunners[4].spells} />)
  }
  it("should render spells", () => {
    const { getByText } = setup()

    // Combat
    expect(getByText("Manabolt (Direct Combat)")).toBeInTheDocument()
    expect(getByText("Fireball (Indirect Combat, Area)")).toBeInTheDocument()
    expect(getByText("Stunball (Direct Combat, Area)")).toBeInTheDocument()

    //Health
    expect(getByText("Heal")).toBeInTheDocument()

    // Manipulation
    expect(getByText("Armor")).toBeInTheDocument()
    expect(getByText("Levitate")).toBeInTheDocument()
    expect(getByText("Mana barrier")).toBeInTheDocument()
    expect(getByText("Physical barrier")).toBeInTheDocument()
  })
})
