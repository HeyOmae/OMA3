import { MagRes } from "./index"
import {
  render,
  waitFor,
  setupIndexedDB,
  withTestRouter,
  runnerFromDB,
  SliderHelper,
} from "../../../test/testUtils"

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
  })
})
