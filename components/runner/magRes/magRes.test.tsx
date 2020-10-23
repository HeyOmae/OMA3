import { MagRes } from "./index"
import { render } from "../../../test/testUtils"

describe("Magic and Resonance", () => {
  const setup = () => render(<MagRes />)
  it("should exist", () => {
    const { getByText } = setup()

    expect(getByText("Awakened")).toBeInTheDocument()
    expect(getByText("Emergent")).toBeInTheDocument()
    expect(getByText("Mundane")).toBeInTheDocument()
  })
})
