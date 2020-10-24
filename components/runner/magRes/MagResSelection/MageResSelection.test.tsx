import { MagResSelection } from "./index"
import { render } from "../../../../test/testUtils"

describe("Magic and Resonance", () => {
  const setup = () => render(<MagResSelection />)
  it("should display magic types, technomancer, and mundane selection", () => {
    const { getByText, getAllByText } = setup()

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
