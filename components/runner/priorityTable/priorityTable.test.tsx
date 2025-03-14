import {
  render,
  withTestRouter,
  setupIndexedDB,
  waitFor,
  getByLabelText,
  runnerFromDB,
} from "../../../test/testUtils"
import { PriorityTable } from "./"

describe("<PriorityTable/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(withTestRouter(<PriorityTable />, { query: { id: "1" } }))
  }

  describe("metatype selection", () => {
    it("should have 5 options", async () => {
      const { getByLabelText } = setup()

      await waitFor(() => {
        expect(getByLabelText("Dwarf, Ork, Troll (13)")).toBeInTheDocument()
        expect(
          getByLabelText("Dwarf, Elf, Ork, Troll (11)"),
        ).toBeInTheDocument()
        expect(
          getByLabelText("Dwarf, Elf, Human, Ork, Troll (9)"),
        ).toBeInTheDocument()
        expect(
          getByLabelText("Dwarf, Elf, Human, Ork, Troll (4)"),
        ).toBeInTheDocument()
        expect(
          getByLabelText("Dwarf, Elf, Human, Ork, Troll (1)"),
        ).toBeInTheDocument()
      })
    })

    it("should create the priority property for the player", async () => {
      const { getByLabelText } = setup()
      expect(runnerFromDB().priority).toBeUndefined()
      await waitFor(() => getByLabelText("Dwarf, Ork, Troll (13)").click())

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[0].value.priority,
        ).toEqual({ metatype: "A" })
      })
    })
  })

  describe("attributes selection", () => {
    it("should have 5 options", async () => {
      const { getByRole } = setup()

      await waitFor(() => {
        const attributeRadioInputs = getByRole("radiogroup", {
          name: "attributes",
        })
        expect(getByLabelText(attributeRadioInputs, "24")).toBeInTheDocument()
        expect(getByLabelText(attributeRadioInputs, "16")).toBeInTheDocument()
        expect(getByLabelText(attributeRadioInputs, "12")).toBeInTheDocument()
        expect(getByLabelText(attributeRadioInputs, "8")).toBeInTheDocument()
        expect(getByLabelText(attributeRadioInputs, "2")).toBeInTheDocument()
      })
    })

    it("should create the priority property for the player", async () => {
      const { getByRole } = setup()
      expect(runnerFromDB().attributes).toBeUndefined()

      await waitFor(() => {
        const attributeRadioInputs = getByRole("radiogroup", {
          name: "attributes",
        })
        getByLabelText(attributeRadioInputs, "16").click()
      })

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[0].value.priority.attributes,
        ).toEqual("B")
      })
    })
  })

  describe("skills selection", () => {
    it("should have 5 options", async () => {
      const { getByRole } = setup()

      await waitFor(() => {
        const skillRadioInputs = getByRole("radiogroup", {
          name: "skills",
        })
        expect(getByLabelText(skillRadioInputs, "32")).toBeInTheDocument()
        expect(getByLabelText(skillRadioInputs, "24")).toBeInTheDocument()
        expect(getByLabelText(skillRadioInputs, "20")).toBeInTheDocument()
        expect(getByLabelText(skillRadioInputs, "16")).toBeInTheDocument()
        expect(getByLabelText(skillRadioInputs, "10")).toBeInTheDocument()
      })
    })

    it("should create the priority property for the player", async () => {
      const { getByRole } = setup()
      expect(runnerFromDB().priority.skills).toBeUndefined()
      await waitFor(() => {
        const skillRadioInputs = getByRole("radiogroup", {
          name: "skills",
        })
        getByLabelText(skillRadioInputs, "20").click()
      })

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[0].value.priority.skills,
        ).toEqual("C")
      })
    })
  })

  describe("Magic and Resonance selection", () => {
    it("should have 5 options", async () => {
      const { getByRole } = setup()

      await waitFor(() => {
        const magresRadioInputs = getByRole("radiogroup", {
          name: "mag/res",
        })
        expect(
          getByLabelText(
            magresRadioInputs,
            "Full: 4 Magic, Aspected: 5 Magic, Mystic Adept: 4 Magic, Adept: 4 Magic, Technomancer: 4 Resonance",
          ),
        ).toBeInTheDocument()
        expect(
          getByLabelText(
            magresRadioInputs,
            "Full: 3 Magic, Aspected: 4 Magic, Mystic Adept: 3 Magic, Adept: 3 Magic, Technomancer: 3 Resonance",
          ),
        ).toBeInTheDocument()
        expect(
          getByLabelText(
            magresRadioInputs,
            "Full: 2 Magic, Aspected: 3 Magic, Mystic Adept: 2 Magic, Adept: 2 Magic, Technomancer: 2 Resonance",
          ),
        ).toBeInTheDocument()
        expect(
          getByLabelText(
            magresRadioInputs,
            "Full: 1 Magic, Aspected: 2 Magic, Mystic Adept: 1 Magic, Adept: 1 Magic, Technomancer: 1 Resonance",
          ),
        ).toBeInTheDocument()
        expect(getByLabelText(magresRadioInputs, "Mundane")).toBeInTheDocument()
      })
    })

    it("should create the priority property for the player", async () => {
      const { getByRole } = setup()
      expect(runnerFromDB().priority["mag/res"]).toBeUndefined()
      await waitFor(() => {
        const magresRadioInputs = getByRole("radiogroup", {
          name: "mag/res",
        })
        getByLabelText(
          magresRadioInputs,
          "Full: 1 Magic, Aspected: 2 Magic, Mystic Adept: 1 Magic, Adept: 1 Magic, Technomancer: 1 Resonance",
        ).click()
      })

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[0].value.priority["mag/res"],
        ).toEqual("D")
      })
    })
  })

  describe("Resources selection", () => {
    it("should have 5 options", async () => {
      const { getByRole } = setup()

      await waitFor(() => {
        const resourcesRadioInputs = getByRole("radiogroup", {
          name: "resources",
        })
        expect(
          getByLabelText(resourcesRadioInputs, "450000¥"),
        ).toBeInTheDocument()
        expect(
          getByLabelText(resourcesRadioInputs, "275000¥"),
        ).toBeInTheDocument()
        expect(
          getByLabelText(resourcesRadioInputs, "150000¥"),
        ).toBeInTheDocument()
        expect(
          getByLabelText(resourcesRadioInputs, "50000¥"),
        ).toBeInTheDocument()
        expect(
          getByLabelText(resourcesRadioInputs, "8000¥"),
        ).toBeInTheDocument()
      })
    })

    it("should create the priority property for the player", async () => {
      const { getByRole } = setup()
      expect(runnerFromDB().priority.resources).toBeUndefined()
      await waitFor(() => {
        const skillRadioInputs = getByRole("radiogroup", {
          name: "resources",
        })
        getByLabelText(skillRadioInputs, "8000¥").click()
      })

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[0].value.priority.resources,
        ).toEqual("E")
      })
    })
  })
})
