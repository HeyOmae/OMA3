import { MagRes } from "./index"
import {
  render,
  waitFor,
  setupIndexedDB,
  withTestRouter,
  runnerFromDB,
  SliderHelper,
  userEvent,
  screen,
} from "@/test/testUtils"
import spellData from "@/data/spells.json"
import ritualData from "@/data/rituals.json"
import { mockedRunners } from "@/test/mocks"
import PowersData from "@/data/adeptPowers.json"
import complexFormData from "@/data/complexForm.json"

describe("Magic and Resonance", () => {
  const setup = (id = "2") => {
    const user = userEvent.setup()
    render(withTestRouter(<MagRes />, { query: { id } }))
    return user
  }
  beforeAll(setupIndexedDB)
  it("should display magic types, technomancer, and mundane selection", async () => {
    setup()

    expect(await screen.findByText("Awakened")).toBeInTheDocument()
    expect(screen.getByText("Full Mage")).toBeInTheDocument()
    expect(screen.getByText("Aspected")).toBeInTheDocument()
    expect(screen.getByText("Mystic Adept")).toBeInTheDocument()
    expect(screen.getByText("Adept")).toBeInTheDocument()

    expect(screen.getByText("Emergent")).toBeInTheDocument()
    expect(screen.getByText("Technomancer")).toBeInTheDocument()

    expect(screen.getAllByText("Mundane")).toHaveLength(2)
  })

  it("should set the magres on the runner and display magic slider", async () => {
    const user = setup()

    expect(await screen.findByLabelText("Full Mage")).toBeInTheDocument()

    expect(
      screen.queryByTestId("Magic-attribute=slider"),
    ).not.toBeInTheDocument()
    await user.click(screen.getByLabelText("Full Mage"))

    expect(screen.getByLabelText("Full Mage")).toBeChecked()
    expect(runnerFromDB(1).magres).toEqual("Full")

    expect(screen.queryByTestId("Magic-attribute-slider")).toBeInTheDocument()
  })

  it("should reset the attributes between selecting magres options", async () => {
    const user = setup()

    expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)

    expect(await screen.findByLabelText("Aspected")).toBeInTheDocument()
    await user.click(screen.getByLabelText("Aspected"))
    expect(screen.getByText("1/1")).toBeInTheDocument()
    expect(
      await screen.findByTestId("Magic-attribute-slider"),
    ).toBeInTheDocument()
    SliderHelper.change(screen.getByTestId("Magic-attribute-slider"), 6, 5, 6)

    expect(await screen.findByText("0/1")).toBeInTheDocument()

    await waitFor(() =>
      expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(1),
    )

    await user.click(screen.getByLabelText("Technomancer"))

    expect(await screen.findByText("1/1")).toBeInTheDocument()
    expect(screen.getByTestId("Resonance-attribute-slider")).toBeInTheDocument()

    SliderHelper.change(
      screen.getByTestId("Resonance-attribute-slider"),
      5,
      4,
      6,
    )

    expect(await screen.findByText("0/1")).toBeInTheDocument()
    await waitFor(() => {
      expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)
      expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(1)
    })

    await user.click(screen.getByLabelText("Mystic Adept"))

    expect(await screen.findByText("1/1")).toBeInTheDocument()
    expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)
    expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(0)
  })

  describe("setting attribute", () => {
    it("should set magic attribute", async () => {
      const user = setup()

      expect(await screen.findByLabelText("Adept")).toBeInTheDocument()
      await user.click(screen.getByLabelText("Adept"))
      expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)

      SliderHelper.change(
        await screen.findByTestId("Magic-attribute-slider"),
        6,
        4,
        6,
      )

      expect(await screen.findByText("-1/1")).toHaveClass("bad-stuff")
      await waitFor(() =>
        expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(2),
      )
    })
    it("should set resonance attribute", async () => {
      const user = setup()
      expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(0)

      await user.click(await screen.findByLabelText("Technomancer"))

      SliderHelper.change(
        screen.getByTestId("Resonance-attribute-slider"),
        6,
        4,
        6,
      )

      expect(await screen.findByText("-1/1")).toHaveClass("bad-stuff")
      await waitFor(() =>
        expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(2),
      )
    })
    it("should hide this sections for mundanes", async () => {
      const user = setup("3")

      await user.click(await screen.findByLabelText("Mundane"))

      expect(
        await screen.findByText("Nothing Special Here..."),
      ).toBeInTheDocument()
    })
  })

  describe("runner priority checks", () => {
    it("should make sure the metatype is set", async () => {
      setup("1")

      expect(
        await screen.findByText("You need to set the metatype priority"),
      ).toBeInTheDocument()
    })

    it("should make sure the mag/res is set", async () => {
      setup("4")
      expect(
        await screen.findByText("You need to set the mag/res priority"),
      ).toBeInTheDocument()
    })

    it("should make sure the attributes are set", async () => {
      setup("6")

      expect(
        await screen.findByText("You need to set the attributes priority"),
      ).toBeInTheDocument()
    })
  })

  describe("Spells", () => {
    it("should display spells for mages", async () => {
      const user = setup()
      await user.click(await screen.findByLabelText("Full Mage"))

      expect(screen.getByText("Combat Spells")).toBeInTheDocument()
    })

    it("should display spells for aspected mages", async () => {
      const user = setup()

      await user.click(await screen.findByLabelText("Aspected"))

      expect(screen.getByText("Detection Spells")).toBeInTheDocument()
    })

    it("should display spells for mystic adepts", async () => {
      const user = setup()

      await user.click(await screen.findByLabelText("Mystic Adept"))

      expect(screen.getByText("Health Spells")).toBeInTheDocument()
    })

    it("should add spells to the runner", async () => {
      const user = setup()

      await user.click(await screen.findByLabelText("Mystic Adept"))

      await user.click(screen.getByLabelText("Learn Fireball"))

      await waitFor(() => {
        expect(runnerFromDB(1).spells).toBeDefined()
      })

      const fireballSpell = spellData.Combat.find(
        ({ name }) => name === "Fireball",
      )
      expect(runnerFromDB(1).spells.Combat).toEqual([fireballSpell])

      const manaboltSpell = spellData.Combat.find(
        ({ name }) => name === "Manabolt",
      )

      await user.click(screen.getByLabelText("Learn Manabolt"))
      await waitFor(() => {
        expect(runnerFromDB(1).spells.Combat).toEqual([
          fireballSpell,
          manaboltSpell,
        ])
      })

      const manaBarrierSpell = spellData.Manipulation.find(
        ({ name }) => name === "Mana barrier",
      )
      await user.click(screen.getByLabelText("Learn Mana barrier"))
      await waitFor(() => {
        expect(runnerFromDB(1).spells.Combat).toEqual([
          fireballSpell,
          manaboltSpell,
        ])
        expect(runnerFromDB(1).spells.Manipulation).toEqual([manaBarrierSpell])
      })
    })

    describe("Runner spells", () => {
      it("should display a runner's spells", async () => {
        setup("5")

        expect(await screen.findByText("Known Spells")).toBeInTheDocument()

        expect(screen.getByLabelText("Remove Manabolt")).toBeInTheDocument()
        expect(screen.getByLabelText("Remove Fireball")).toBeInTheDocument()
        expect(screen.getByLabelText("Remove Stunball")).toBeInTheDocument()

        expect(screen.getByLabelText("Remove Heal")).toBeInTheDocument()

        expect(screen.getByLabelText("Remove Armor")).toBeInTheDocument()
        expect(screen.getByLabelText("Remove Levitate")).toBeInTheDocument()
        expect(screen.getByLabelText("Remove Mana barrier")).toBeInTheDocument()
        expect(
          screen.getByLabelText("Remove Physical barrier"),
        ).toBeInTheDocument()
      })

      it("should remove a spell", async () => {
        const user = setup("5")
        expect(runnerFromDB(4).spells.Combat.length).toEqual(3)
        expect(runnerFromDB(4).spells.Combat[1].name).toEqual("Fireball")

        expect(
          await screen.findByLabelText("Remove Fireball"),
        ).toBeInTheDocument()

        expect(screen.getByText("0/8")).toBeInTheDocument()
        await user.click(screen.getByLabelText("Remove Fireball"))
        expect(screen.getByText("1/8")).toBeInTheDocument()

        expect(runnerFromDB(4).spells.Combat.length).toEqual(2)
        expect(runnerFromDB(4).spells.Combat[1].name).toEqual("Stunball")

        expect(runnerFromDB(4).spells.Manipulation.length).toEqual(4)
        expect(runnerFromDB(4).spells.Manipulation[2].name).toEqual(
          "Mana barrier",
        )
        await user.click(screen.getByLabelText("Remove Mana barrier"))

        expect(
          screen.queryByLabelText("Remove Mana barrier"),
        ).not.toBeInTheDocument()

        expect(runnerFromDB(4).spells.Manipulation.length).toEqual(3)
        expect(runnerFromDB(4).spells.Manipulation[2].name).toEqual(
          "Physical barrier",
        )
      })
    })
  })

  describe("Rituals", () => {
    it("should display the rituals after clicking the header", async () => {
      const user = setup()

      expect(await screen.findByText("Rituals")).toBeInTheDocument()

      ritualData.forEach(({ name }) => {
        expect(screen.getByText(name)).not.toBeVisible()
      })

      await user.click(screen.getByText("Rituals"))

      ritualData.forEach(({ name }) => {
        expect(screen.getByText(name)).toBeVisible()
      })
    })
    it("should add a ritual to the runner", async () => {
      const user = setup("5")

      expect(runnerFromDB(4).rituals).toBeUndefined()
      expect(await screen.findByText("Rituals")).toBeInTheDocument()

      await user.click(screen.getByLabelText("Add Ward"))

      await waitFor(() => {
        expect(runnerFromDB(4).rituals).toEqual([
          {
            name: "Ward",
            threshold: 6,
            ritualfeature: [
              {
                ref: "anchored",
              },
            ],
          },
        ])
      })
    })

    it("should render the rituals a runner knowns", async () => {
      setup("7")

      expect(await screen.findByText("Known Rituals")).toBeInTheDocument()

      mockedRunners[6].rituals.forEach(({ name }) => {
        expect(screen.getByLabelText(`Remove ${name}`)).toBeInTheDocument()
      })
    })

    it("should remove a ritual from the runner", async () => {
      const user = setup("7")

      expect(runnerFromDB(6).rituals).toHaveLength(3)

      expect(await screen.findByText("Known Rituals")).toBeInTheDocument()

      expect(screen.getByText("5/8")).toBeInTheDocument()

      await user.click(screen.getByLabelText("Remove Ward"))

      expect(screen.queryByLabelText("Remove Ward")).not.toBeInTheDocument()

      await waitFor(() => {
        expect(runnerFromDB(6).rituals).toEqual([
          {
            name: "Circle of protection",
            threshold: 6,
            ritualfeature: [
              {
                ref: "anchored",
              },
            ],
          },
          {
            name: "Curse",
            threshold: 5,
            ritualfeature: [
              {
                ref: "material link",
              },
              {
                ref: "spell",
              },
            ],
          },
        ])
      })

      expect(screen.getByText("6/8")).toBeInTheDocument()
    })
  })

  describe("Adept Powers", () => {
    it("should display for adepts and mystic adepts", async () => {
      const user = setup()

      expect(await screen.findByLabelText("Technomancer")).toBeInTheDocument()
      await user.click(screen.getByLabelText("Technomancer"))

      expect(screen.queryByText("Adept Powers")).not.toBeInTheDocument()

      await user.click(screen.getByLabelText("Mystic Adept"))

      expect(screen.getByText("Adept Powers")).toBeInTheDocument()
      expect(screen.getByText("Spells")).toBeInTheDocument()

      await user.click(screen.getByLabelText("Adept"))

      expect(screen.queryByText("Spells")).not.toBeInTheDocument()
      expect(screen.getByText("Adept Powers")).toBeInTheDocument()

      await user.click(screen.getByLabelText("Full Mage"))

      expect(screen.queryByText("Adept Powers")).not.toBeInTheDocument()
    })

    it("should display the powers after clicking the title", async () => {
      const user = setup()

      await user.click(await screen.findByLabelText("Adept"))

      expect(screen.getByText("Combat Sense")).not.toBeVisible()

      await user.click(screen.getByText("Adept Powers"))

      expect(screen.getByText("Combat Sense")).toBeVisible()
    })

    it("should add adept power to runner", async () => {
      const user = setup()

      await user.click(await screen.findByLabelText("Adept"))

      expect(runnerFromDB(1).powers).toBeUndefined()
      expect(screen.queryByText("Known Adept Powers")).not.toBeInTheDocument()
      expect(screen.queryByText("4/4")).toBeInTheDocument()

      await user.click(screen.getByLabelText("Add Astral Perception"))

      expect(screen.queryByText("Known Adept Powers")).toBeInTheDocument()
      expect(screen.queryByText("3/4")).toBeInTheDocument()

      await waitFor(() => {
        expect(runnerFromDB(1).powers[0]).toEqual(PowersData[1])
      })
    })

    it("should remove adept power from runner", async () => {
      const user = setup("8")

      expect(runnerFromDB(7).powers).toHaveLength(3)

      expect(
        await screen.findByLabelText("Remove Improved Reflexes"),
      ).toBeInTheDocument()
      expect(screen.getByText("2/4")).toBeInTheDocument()

      await user.click(screen.getByLabelText("Remove Improved Reflexes"))
      expect(screen.getByText("3/4")).toBeInTheDocument()

      await waitFor(() => {
        expect(runnerFromDB(7).powers).toHaveLength(2)
      })
    })

    it("should update the level of an adept power", async () => {
      setup("8")

      const attributeBoostIndex = runnerFromDB(7).powers.findIndex(
        ({ name }) => name === "Attribute Boost",
      )
      expect(runnerFromDB(7).powers[attributeBoostIndex].level).toBe(2)

      SliderHelper.change(
        await screen.findByTestId("slider-Attribute Boost"),
        6,
        1,
        6,
      )

      await waitFor(() => {
        expect(runnerFromDB(7).powers[attributeBoostIndex].level).toBe(6)
      })
    })
  })

  describe("Complex forms", () => {
    it("should display the complex forms", async () => {
      const user = setup()

      expect(await screen.findByText("Technomancer")).toBeInTheDocument()

      expect(screen.queryByText("Complex Forms")).not.toBeInTheDocument()
      await user.click(screen.getByText("Technomancer"))
      expect(screen.queryByText("Complex Forms")).toBeInTheDocument()
      expect(screen.getByText("8/8")).toBeInTheDocument()

      complexFormData.forEach(({ name }) => {
        expect(screen.getByText(name)).not.toBeVisible()
      })
      await user.click(screen.getByText("Complex Forms"))

      complexFormData.forEach(({ name }) => {
        expect(screen.getByText(name)).toBeVisible()
      })
    })

    it("should add a complex form to a runner", async () => {
      const user = setup()

      await user.click(await screen.findByText("Technomancer"))
      expect(screen.getByText("8/8")).toBeInTheDocument()

      expect(runnerFromDB(1).complexForms).toBeUndefined()

      const complexFormToAdd = complexFormData[0]

      await user.click(screen.getByLabelText(`Add ${complexFormToAdd.name}`))

      expect(screen.getByText("7/8")).toBeInTheDocument()

      await waitFor(() => {
        expect(runnerFromDB(1).complexForms[0]).toEqual(complexFormToAdd)
      })
    })

    it("should remove a complex form from a runner", async () => {
      const user = setup("9")

      expect(runnerFromDB(8).complexForms).toHaveLength(4)

      expect(await screen.findByText("Known Complex Forms")).toBeInTheDocument()

      mockedRunners[8].complexForms.forEach(({ name }) => {
        expect(screen.getByLabelText(`Remove ${name}`)).toBeInTheDocument()
      })
      const removedComplexForm = runnerFromDB(8).complexForms[1],
        removeComplexFormLabel = `Remove ${removedComplexForm.name}`
      expect(runnerFromDB(8).complexForms).toContain(removedComplexForm)
      expect(screen.getByText("4/8")).toBeInTheDocument()

      await user.click(screen.getByLabelText(removeComplexFormLabel))

      expect(screen.getByText("5/8")).toBeInTheDocument()
      expect(
        screen.queryByLabelText(removeComplexFormLabel),
      ).not.toBeInTheDocument()

      expect(runnerFromDB(8).complexForms).toHaveLength(3)

      expect(runnerFromDB(8).complexForms).not.toContain(removedComplexForm)
    })
  })
})
