import { RunnerSpells, Props } from "."
import { render } from "../../../../../test/testUtils"
import { mockedRunners } from "../../../../../test/mocks"
import { REMOVE_SPELL } from "../.."

describe("<RunnerSpells/>", () => {
  const setup = () => {
    const props: Props = {
      spells: mockedRunners[4].spells,
      dispatch: jest.fn(),
    }
    return { ...render(<RunnerSpells {...props} />), props }
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

  it("should dispatch the remove spell action", () => {
    const { getByLabelText, props } = setup()

    getByLabelText("Remove Manabolt").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: REMOVE_SPELL,
      payload: {
        removeSpell: {
          spellCategory: "Combat",
          spellIndex: 0,
        },
      },
    })

    getByLabelText("Remove Mana barrier").click()
    expect(props.dispatch).toHaveBeenCalledWith({
      type: REMOVE_SPELL,
      payload: {
        removeSpell: {
          spellCategory: "Manipulation",
          spellIndex: 2,
        },
      },
    })
  })
})
