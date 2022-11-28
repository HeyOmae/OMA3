import { Spells, Props } from "./index"
import spellsData from "../../../../data/spells.json"
import { render, userEvent } from "../../../../test/testUtils"
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
  it("should display combat spells", async () => {
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

    await userEvent.click(getByText("Combat Spells"))

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

  it("should display detection spells", async () => {
    const { getByText } = setup()

    spellsData.Detection.forEach(({ name }) => {
      expect(getByText(name)).not.toBeVisible()
    })

    await userEvent.click(getByText("Detection Spells"))

    spellsData.Detection.forEach(({ name }) => {
      expect(getByText(name)).toBeVisible()
    })
  })

  it("should display health spells", async () => {
    const { getByText } = setup()

    spellsData.Health.forEach(({ name }) => {
      expect(getByText(name)).not.toBeVisible()
    })

    await userEvent.click(getByText("Health Spells"))

    spellsData.Health.forEach(({ name }) => {
      expect(getByText(name)).toBeVisible()
    })
  })

  it("should display illusion spells", async () => {
    const { getByText } = setup()

    spellsData.Illusion.forEach(({ name }) => {
      expect(getByText(name)).not.toBeVisible()
    })

    await userEvent.click(getByText("Illusion Spells"))

    spellsData.Illusion.forEach(({ name }) => {
      expect(getByText(name)).toBeVisible()
    })
  })

  it("should display Manipulation spells", async () => {
    const { getByText } = setup()

    spellsData.Manipulation.forEach(({ name }) => {
      expect(getByText(name)).not.toBeVisible()
    })

    await userEvent.click(getByText("Manipulation Spells"))

    spellsData.Manipulation.forEach(({ name }) => {
      expect(getByText(name)).toBeVisible()
    })
  })

  describe("learning", () => {
    it("should dispatch adding combat spell", async () => {
      const { getByLabelText, props } = setup()

      await userEvent.click(getByLabelText("Learn Lightning bolt"))

      expect(props.dispatch).toHaveBeenCalledWith({
        type: SET_SPELL,
        payload: {
          spell: spellsData.Combat.find(
            ({ name }) => name === "Lightning bolt",
          ),
        },
      })
    })

    it("should dispatch adding other spells", async () => {
      const { getByLabelText, props } = setup()

      await userEvent.click(getByLabelText("Learn Analyze truth"))

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
