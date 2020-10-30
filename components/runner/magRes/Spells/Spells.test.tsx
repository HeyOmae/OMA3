import { Spells } from "./index"
import spellsData from "../../../../data/spells.json"
import { render } from "../../../../test/testUtils"
import { DispatchProvider, SET_SPELL } from ".."

describe("<Spells/>", () => {
  const setup = () => {
    const dispatch = jest.fn()
    return {
      ...render(
        <DispatchProvider.Provider value={dispatch}>
          <Spells />
        </DispatchProvider.Provider>,
      ),
      dispatch,
    }
  }
  it("should display combat spells", () => {
    const { getByText } = setup()

    spellsData.Combat.forEach(
      ({ name, category, spellfeature: [{ ref }, area] }) => {
        expect(
          getByText(
            `${name} (${ref} ${category}${area ? `, ${area.ref}` : ""})`,
          ),
        ).toBeInTheDocument()
      },
    )
  })

  it("should display detection spells", () => {
    const { getByText } = setup()

    spellsData.Detection.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  it("should display health spells", () => {
    const { getByText } = setup()

    spellsData.Health.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  it("should display illusion spells", () => {
    const { getByText } = setup()

    spellsData.Illusion.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  it("should display Manipulation spells", () => {
    const { getByText } = setup()

    spellsData.Manipulation.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  describe("learning", () => {
    it("should dispatch adding combat spell", () => {
      const { getByLabelText, dispatch } = setup()

      getByLabelText("Lightning bolt").click()

      expect(dispatch).toHaveBeenCalledWith({
        type: SET_SPELL,
        payload: {
          spell: spellsData.Combat.find(
            ({ name }) => name === "Lightning bolt",
          ),
        },
      })
    })

    it("should dispatch adding other spells", () => {
      const { getByLabelText, dispatch } = setup()

      getByLabelText("Analyze truth").click()

      expect(dispatch).toHaveBeenCalledWith({
        type: SET_SPELL,
        payload: {
          spell: spellsData.Detection.find(
            ({ name }) => name === "Analyze truth",
          ),
        },
      })
    })
  })
})
