import { MagRes } from "./index"
import {
  render,
  waitFor,
  setupIndexedDB,
  withTestRouter,
  runnerFromDB,
  SliderHelper,
} from "../../../test/testUtils"
import spellData from "../../../data/spells.json"
import ritualData from "../../../data/rituals.json"
import { mockedRunners } from "../../../test/mocks"
import PowersData from "../../../data/adeptPowers.json"
import complexFormData from "../../../data/complexForm.json"

describe("Magic and Resonance", () => {
  const setup = (id = "2") =>
    render(withTestRouter(<MagRes />, { query: { id } }))
  beforeAll(setupIndexedDB)
  it("should display magic types, technomancer, and mundane selection", async () => {
    const { getByText, getAllByText } = setup()

    await waitFor(() => {
      expect(getByText("Awakened")).toBeInTheDocument()
      expect(getByText("Full Mage")).toBeInTheDocument()
      expect(getByText("Aspected")).toBeInTheDocument()
      expect(getByText("Mystic Adept")).toBeInTheDocument()
      expect(getByText("Adept")).toBeInTheDocument()

      expect(getByText("Emergent")).toBeInTheDocument()
      expect(getByText("Technomancer")).toBeInTheDocument()

      expect(getAllByText("Mundane")).toHaveLength(2)
    })
  })

  it("should set the magres on the runner and display magic slider", async () => {
    const { getByLabelText, queryByTestId } = setup()
    await waitFor(() => {
      getByLabelText("Full Mage")
    })

    expect(queryByTestId("Magic-attribute=slider")).not.toBeInTheDocument()
    getByLabelText("Full Mage").click()

    await waitFor(() => {
      expect(getByLabelText("Full Mage")).toBeChecked()
      expect(runnerFromDB(1).magres).toEqual("Full")

      expect(queryByTestId("Magic-attribute-slider")).toBeInTheDocument()
    })
  })

  it("should reset the attributes between selecting magres options", async () => {
    const { getByLabelText, getByTestId, getByText } = setup()

    expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)

    await waitFor(() => getByLabelText("Aspected"))
    getByLabelText("Aspected").click()
    expect(getByText("1/1")).toBeInTheDocument()
    await waitFor(() => getByTestId("Magic-attribute-slider"))
    SliderHelper.change(getByTestId("Magic-attribute-slider"), 6, 5, 6)

    await waitFor(() => {
      expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(1)

      expect(getByText("0/1")).toBeInTheDocument()
    })

    getByLabelText("Technomancer").click()

    await waitFor(() => {
      getByTestId("Resonance-attribute-slider")

      expect(getByText("1/1")).toBeInTheDocument()
    })

    SliderHelper.change(getByTestId("Resonance-attribute-slider"), 5, 4, 6)

    await waitFor(() => {
      expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)
      expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(1)

      expect(getByText("0/1")).toBeInTheDocument()
    })

    getByLabelText("Mystic Adept").click()

    await waitFor(() => {
      expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)
      expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(0)

      expect(getByText("1/1")).toBeInTheDocument()
    })
  })

  describe("setting attribute", () => {
    it("should set magic attribute", async () => {
      const { getByTestId, getByLabelText, getByText } = setup()

      await waitFor(() => getByLabelText("Adept"))
      getByLabelText("Adept").click()
      expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)

      await waitFor(() => getByTestId("Magic-attribute-slider"))
      SliderHelper.change(getByTestId("Magic-attribute-slider"), 6, 4, 6)

      await waitFor(() => {
        expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(2)
        expect(getByText("-1/1")).toHaveClass("bad-stuff")
      })
    })
    it("should set resonance attribute", async () => {
      const { getByTestId, getByLabelText, getByText } = setup()
      expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(0)

      await waitFor(() => getByLabelText("Technomancer"))
      getByLabelText("Technomancer").click()

      await waitFor(() => getByTestId("Resonance-attribute-slider"))
      SliderHelper.change(getByTestId("Resonance-attribute-slider"), 6, 4, 6)

      await waitFor(() => {
        expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(2)
        expect(getByText("-1/1")).toHaveClass("bad-stuff")
      })
    })
    it("should hide this sections for mundanes", async () => {
      const { getByLabelText, getByText } = setup("3")

      await waitFor(() => {
        expect(getByLabelText("Mundane")).toBeInTheDocument()
      })
      getByLabelText("Mundane").click()

      await waitFor(() => {
        expect(getByText("Nothing Special Here...")).toBeInTheDocument()
      })
    })
  })

  describe("runner priority checks", () => {
    it("should make sure the metatype is set", async () => {
      const { getByText } = setup("1")

      await waitFor(() => {
        expect(getByText("You need to set the metatype priority"))
      })
    })

    it("should make sure the mag/res is set", async () => {
      const { getByText } = setup("4")
      await waitFor(() => {
        expect(getByText("You need to set the mag/res priority"))
      })
    })

    it("should make sure the attributes are set", async () => {
      const { getByText } = setup("6")
      await waitFor(() => {
        expect(getByText("You need to set the attributes priority"))
      })
    })
  })

  describe("Spells", () => {
    it("should display spells for mages", async () => {
      const { getByLabelText, getByText } = setup()
      await waitFor(() => getByLabelText("Full Mage"))
      getByLabelText("Full Mage").click()

      await waitFor(() => {
        expect(getByText("Combat Spells")).toBeInTheDocument()
      })
    })

    it("should display spells for aspected mages", async () => {
      const { getByLabelText, getByText } = setup()
      await waitFor(() => getByLabelText("Aspected"))
      getByLabelText("Aspected").click()

      await waitFor(() => {
        expect(getByText("Detection Spells")).toBeInTheDocument()
      })
    })

    it("should display spells for mystic adepts", async () => {
      const { getByLabelText, getByText } = setup()
      await waitFor(() => getByLabelText("Mystic Adept"))
      getByLabelText("Mystic Adept").click()

      await waitFor(() => {
        expect(getByText("Health Spells")).toBeInTheDocument()
      })
    })

    it("should add spells to the runner", async () => {
      const { getByLabelText } = setup()
      await waitFor(() => getByLabelText("Mystic Adept"))
      getByLabelText("Mystic Adept").click()

      await waitFor(() => {
        expect(getByLabelText("Learn Fireball")).toBeInTheDocument()
      })

      getByLabelText("Learn Fireball").click()

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

      getByLabelText("Learn Manabolt").click()
      await waitFor(() => {
        expect(runnerFromDB(1).spells.Combat).toEqual([
          fireballSpell,
          manaboltSpell,
        ])
      })

      const manaBarrierSpell = spellData.Manipulation.find(
        ({ name }) => name === "Mana barrier",
      )
      getByLabelText("Learn Mana barrier").click()
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
        const { getByLabelText, getByText } = setup("5")

        await waitFor(() => {
          expect(getByText("Known Spells")).toBeInTheDocument()
        })

        expect(getByLabelText("Remove Manabolt")).toBeInTheDocument()
        expect(getByLabelText("Remove Fireball")).toBeInTheDocument()
        expect(getByLabelText("Remove Stunball")).toBeInTheDocument()

        expect(getByLabelText("Remove Heal")).toBeInTheDocument()

        expect(getByLabelText("Remove Armor")).toBeInTheDocument()
        expect(getByLabelText("Remove Levitate")).toBeInTheDocument()
        expect(getByLabelText("Remove Mana barrier")).toBeInTheDocument()
        expect(getByLabelText("Remove Physical barrier")).toBeInTheDocument()
      })

      it("should remove a spell", async () => {
        const { getByLabelText, getByText } = setup("5")
        expect(runnerFromDB(4).spells.Combat.length).toEqual(3)
        expect(runnerFromDB(4).spells.Combat[1].name).toEqual("Fireball")

        await waitFor(() => {
          expect(getByLabelText("Remove Fireball")).toBeInTheDocument()
        })
        expect(getByText("0/8")).toBeInTheDocument()
        getByLabelText("Remove Fireball").click()
        expect(getByText("1/8")).toBeInTheDocument()

        await waitFor(() => {
          expect(runnerFromDB(4).spells.Combat.length).toEqual(2)
        })
        expect(runnerFromDB(4).spells.Combat[1].name).toEqual("Stunball")

        expect(runnerFromDB(4).spells.Manipulation.length).toEqual(4)
        expect(runnerFromDB(4).spells.Manipulation[2].name).toEqual(
          "Mana barrier",
        )
        getByLabelText("Remove Mana barrier").click()

        await waitFor(() => {
          expect(runnerFromDB(4).spells.Manipulation.length).toEqual(3)
        })
        expect(runnerFromDB(4).spells.Manipulation[2].name).toEqual(
          "Physical barrier",
        )
      })
    })
  })

  describe("Rituals", () => {
    it("should display the rituals after clicking the header", async () => {
      const { getByText } = setup()

      await waitFor(() => {
        expect(getByText("Rituals")).toBeInTheDocument()
      })

      ritualData.forEach(({ name }) => {
        expect(getByText(name)).not.toBeVisible()
      })

      getByText("Rituals").click()

      await waitFor(() => {
        ritualData.forEach(({ name }) => {
          expect(getByText(name)).toBeVisible()
        })
      })
    })
    it("should add a ritual to the runner", async () => {
      const { getByLabelText, getByText } = setup("5")

      expect(runnerFromDB(4).rituals).toBeUndefined()
      await waitFor(() => {
        expect(getByText("Rituals")).toBeInTheDocument()
      })

      getByLabelText("Add Ward").click()

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
      const { getByLabelText, getByText } = setup("7")

      await waitFor(() => {
        getByText("Known Rituals")
      })

      mockedRunners[6].rituals.forEach(({ name }) => {
        expect(getByLabelText(`Remove ${name}`)).toBeInTheDocument()
      })
    })

    it("should remove a ritual from the runner", async () => {
      const { getByLabelText, getByText, queryByLabelText } = setup("7")

      expect(runnerFromDB(6).rituals).toHaveLength(3)

      await waitFor(() => {
        expect(getByText("Known Rituals")).toBeInTheDocument()
      })

      expect(getByText("5/8")).toBeInTheDocument()

      getByLabelText("Remove Ward").click()

      expect(queryByLabelText("Remove Ward")).not.toBeInTheDocument()

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

      expect(getByText("6/8")).toBeInTheDocument()
    })
  })

  describe("Adept Powers", () => {
    it("should display for adepts and mystic adepts", async () => {
      const { getByLabelText, getByText, queryByText } = setup()

      await waitFor(() => {
        expect(getByLabelText("Technomancer")).toBeInTheDocument()
      })
      getByLabelText("Technomancer").click()

      expect(queryByText("Adept Powers")).not.toBeInTheDocument()

      getByLabelText("Mystic Adept").click()

      await waitFor(() => {
        expect(getByText("Adept Powers")).toBeInTheDocument()
      })

      expect(getByText("Spells")).toBeInTheDocument()

      getByLabelText("Adept").click()

      expect(queryByText("Spells")).not.toBeInTheDocument()
      expect(getByText("Adept Powers")).toBeInTheDocument()

      getByLabelText("Full Mage").click()

      expect(queryByText("Adept Powers")).not.toBeInTheDocument()
    })

    it("should display the powers after clicking the title", async () => {
      const { getByText, getByLabelText } = setup()
      await waitFor(() => {
        expect(getByLabelText("Adept")).toBeInTheDocument()
      })
      getByLabelText("Adept").click()

      expect(getByText("Combat sense")).not.toBeVisible()

      getByText("Adept Powers").click()

      expect(getByText("Combat sense")).toBeVisible()
    })

    it("should add adept power to runner", async () => {
      const { getByLabelText, queryByText } = setup()

      await waitFor(() => {
        expect(getByLabelText("Adept")).toBeInTheDocument()
      })

      getByLabelText("Adept").click()

      expect(runnerFromDB(1).powers).toBeUndefined()
      expect(queryByText("Known Adept Powers")).not.toBeInTheDocument()
      expect(queryByText("4/4")).toBeInTheDocument()

      getByLabelText("Add Astral perception").click()

      expect(queryByText("Known Adept Powers")).toBeInTheDocument()
      expect(queryByText("3/4")).toBeInTheDocument()

      await waitFor(() => {
        expect(runnerFromDB(1).powers[0]).toEqual(PowersData[1])
      })
    })

    it("should remove adept power from runner", async () => {
      const { getByLabelText, getByText } = setup("8")

      expect(runnerFromDB(7).powers).toHaveLength(3)

      await waitFor(() => {
        expect(getByLabelText("Remove Improved reflexes")).toBeInTheDocument()
      })
      expect(getByText("2/4")).toBeInTheDocument()

      getByLabelText("Remove Improved reflexes").click()
      expect(getByText("3/4")).toBeInTheDocument()

      await waitFor(() => {
        expect(runnerFromDB(7).powers).toHaveLength(2)
      })
    })

    it("should update the level of an adept power", async () => {
      const { getByTestId } = setup("8")

      const attributeBoostIndex = runnerFromDB(7).powers.findIndex(
        ({ name }) => name === "Attribute boost",
      )
      expect(runnerFromDB(7).powers[attributeBoostIndex].level).toBe(2)
      await waitFor(() => {
        expect(getByTestId("slider-Attribute boost")).toBeInTheDocument()
      })

      SliderHelper.change(getByTestId("slider-Attribute boost"), 6, 1, 6)

      await waitFor(() => {
        expect(runnerFromDB(7).powers[attributeBoostIndex].level).toBe(6)
      })
    })
  })

  describe("Comeplx froms", () => {
    it("should display the complex forms", async () => {
      const { getByText, queryByText } = setup()

      await waitFor(() => {
        expect(getByText("Technomancer")).toBeInTheDocument()
      })
      expect(queryByText("Complex Forms")).not.toBeInTheDocument()
      getByText("Technomancer").click()
      expect(queryByText("Complex Forms")).toBeInTheDocument()

      complexFormData.forEach(({ name }) => {
        expect(getByText(name)).not.toBeVisible()
      })
      getByText("Complex Forms").click()

      complexFormData.forEach(({ name }) => {
        expect(getByText(name)).toBeVisible()
      })
    })

    it("should add a complex form to a runner", async () => {
      const { getByText, getByLabelText } = setup()

      await waitFor(() => {
        expect(getByText("Technomancer")).toBeInTheDocument()
      })

      getByText("Technomancer").click()

      expect(runnerFromDB(1).complexForms).toBeUndefined()

      const complexFormToAdd = complexFormData[0]

      getByLabelText(`Add ${complexFormToAdd.name}`).click()

      await waitFor(() => {
        expect(runnerFromDB(1).complexForms[0]).toEqual(complexFormToAdd)
      })
    })
  })
})
