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
  const setup = () => render(withTestRouter(<MagRes />, { query: { id: "2" } }))
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
    const { getByLabelText, getByTestId } = setup()

    expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)

    await waitFor(() => getByLabelText("Aspected"))
    getByLabelText("Aspected").click()

    await waitFor(() => getByTestId("Magic-attribute-slider"))
    SliderHelper.change(getByTestId("Magic-attribute-slider"), 6, 5, 6)

    await waitFor(() => {
      expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(1)
    })

    getByLabelText("Technomancer").click()

    await waitFor(() => getByTestId("Resonance-attribute-slider"))
    SliderHelper.change(getByTestId("Resonance-attribute-slider"), 5, 4, 6)

    await waitFor(() => {
      expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)
      expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(1)
    })

    getByLabelText("Mystic Adept").click()

    await waitFor(() => {
      expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)
      expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(0)
    })
  })

  describe("setting attribute", () => {
    it("should set magic attribute", async () => {
      const { getByTestId, getByLabelText } = setup()
      expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(0)

      await waitFor(() => getByLabelText("Adept"))
      getByLabelText("Adept").click()

      await waitFor(() => getByTestId("Magic-attribute-slider"))
      SliderHelper.change(getByTestId("Magic-attribute-slider"), 6, 4, 6)

      await waitFor(() => {
        expect(runnerFromDB(1).attributes.Magic.adjustment).toBe(2)
      })
    })
    it("should set resonance attribute", async () => {
      const { getByTestId, getByLabelText } = setup()
      expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(0)

      await waitFor(() => getByLabelText("Technomancer"))
      getByLabelText("Technomancer").click()

      await waitFor(() => getByTestId("Resonance-attribute-slider"))
      SliderHelper.change(getByTestId("Resonance-attribute-slider"), 6, 4, 6)

      await waitFor(() => {
        expect(runnerFromDB(1).attributes.Resonance.adjustment).toBe(2)
      })
    })
  })
})
