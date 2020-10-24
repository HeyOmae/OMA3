import { MagRes } from "./index"
import {
  render,
  waitFor,
  setupIndexedDB,
  withTestRouter,
  runnerFromDB,
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

  it("should set the magres on the runner", async () => {
    const { getByLabelText } = setup()

    await waitFor(() => {
      getByLabelText("Full Mage").click()
    })

    await waitFor(() => {
      expect(getByLabelText("Full Mage")).toBeChecked()
      expect(runnerFromDB(1).magres).toEqual("Full")
    })
  })
})
