import { MagResSelection, Props } from "./index"
import { render } from "../../../../test/testUtils"
import { SET_MAGRES } from ".."

describe("Magic and Resonance", () => {
  const setup = ({ selected }: Partial<Props> = {}) => {
    const props: Props = {
      selected,
      dispatch: jest.fn(),
    }
    return { ...render(<MagResSelection {...props} />), props }
  }
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

  it("should dispatch SET_MAGRES when selecting one of the types", () => {
    const { getByLabelText, props } = setup()

    getByLabelText("Full Mage").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: SET_MAGRES,
      payload: { magres: "Full" },
    })

    getByLabelText("Aspected").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: SET_MAGRES,
      payload: { magres: "Aspected" },
    })

    getByLabelText("Mystic Adept").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: SET_MAGRES,
      payload: { magres: "Mystic Adept" },
    })

    getByLabelText("Adept").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: SET_MAGRES,
      payload: { magres: "Adept" },
    })

    getByLabelText("Technomancer").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: SET_MAGRES,
      payload: { magres: "Technomancer" },
    })

    getByLabelText("Mundane").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: SET_MAGRES,
      payload: { magres: "Mundane" },
    })
  })

  it("should check the box  of the selected magres type", () => {
    const { getByLabelText } = setup({ selected: "Technomancer" })

    expect(getByLabelText("Technomancer")).toBeChecked()
  })
})
