import { Spells, Props } from "./index"
import spellsData from "../../../../data/spells.json"
import { render } from "../../../../test/testUtils"
import { SET_SPELL } from ".."

describe("<Spells/>", () => {
  const setup = () => {
    const props: Props = {
      dispatch: jest.fn(),
    }
    return {
      ...render(<Spells {...props} />),
      props,
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
        ).not.toBeVisible()
      },
    )

    getByText("Combat Spells").click()

    spellsData.Combat.forEach(
      ({ name, category, spellfeature: [{ ref }, area] }) => {
        expect(
          getByText(
            `${name} (${ref} ${category}${area ? `, ${area.ref}` : ""})`,
          ),
        ).toBeVisible()
      },
    )
  })

  it("should display detection spells", () => {
    const { getByText } = setup()

    spellsData.Detection.forEach(({ name }) => {
      expect(getByText(name)).not.toBeVisible()
    })

    getByText("Detection Spells").click()

    spellsData.Detection.forEach(({ name }) => {
      expect(getByText(name)).toBeVisible()
    })
  })

  it("should display health spells", () => {
    const { getByText } = setup()

    spellsData.Health.forEach(({ name }) => {
      expect(getByText(name)).not.toBeVisible()
    })

    getByText("Health Spells").click()

    spellsData.Health.forEach(({ name }) => {
      expect(getByText(name)).toBeVisible()
    })
  })

  it("should display illusion spells", () => {
    const { getByText } = setup()

    spellsData.Illusion.forEach(({ name }) => {
      expect(getByText(name)).not.toBeVisible()
    })

    getByText("Illusion Spells").click()

    spellsData.Illusion.forEach(({ name }) => {
      expect(getByText(name)).toBeVisible()
    })
  })

  it("should display Manipulation spells", () => {
    const { getByText } = setup()

    spellsData.Manipulation.forEach(({ name }) => {
      expect(getByText(name)).not.toBeVisible()
    })

    getByText("Manipulation Spells").click()

    spellsData.Manipulation.forEach(({ name }) => {
      expect(getByText(name)).toBeVisible()
    })
  })

  describe("learning", () => {
    it("should dispatch adding combat spell", () => {
      const { getByLabelText, props } = setup()

      getByLabelText("Learn Lightning bolt").click()

      expect(props.dispatch).toHaveBeenCalledWith({
        type: SET_SPELL,
        payload: {
          spell: spellsData.Combat.find(
            ({ name }) => name === "Lightning bolt",
          ),
        },
      })
    })

    it("should dispatch adding other spells", () => {
      const { getByLabelText, props } = setup()

      getByLabelText("Learn Analyze truth").click()

      expect(props.dispatch).toHaveBeenCalledWith({
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
