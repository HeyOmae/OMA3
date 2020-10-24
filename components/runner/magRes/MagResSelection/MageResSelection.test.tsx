import { MagResSelection, Props } from "./index"
import { render } from "../../../../test/testUtils"
import { SET_MAGRES } from ".."
import priorityData from "../../../../data/priorityTable.json"
import { MagResPriorityTableOptions } from "../../../../types/PriorityRating"

describe("Magic and Resonance", () => {
  const setup = ({
    selected,
    priority = priorityData["mag/res"].A as MagResPriorityTableOptions,
  }: Partial<Props> = {}) => {
    const props: Props = {
      selected,
      priority,
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
  })

  it("should check the box  of the selected magres type", () => {
    const { getByLabelText } = setup({ selected: "Technomancer" })

    expect(getByLabelText("Technomancer")).toBeChecked()
  })

  it("should disable mundane when they have magres priority over E", () => {
    const { getByLabelText } = setup({
      priority: {
        Full: ["Magic", 1],
        Aspected: ["Magic", 2],
        "Mystic Adept": ["Magic", 1],
        Adept: ["Magic", 1],
        Technomancer: ["Resonance", 1],
      },
    })

    expect(getByLabelText("Mundane")).toBeDisabled()
  })

  it("should disable the other mag/res options if priority is set to E", () => {
    const { getByLabelText, props } = setup({
      priority: priorityData["mag/res"].E as MagResPriorityTableOptions,
    })

    expect(getByLabelText("Full Mage")).toBeDisabled()
    expect(getByLabelText("Aspected")).toBeDisabled()
    expect(getByLabelText("Mystic Adept")).toBeDisabled()
    expect(getByLabelText("Adept")).toBeDisabled()
    expect(getByLabelText("Technomancer")).toBeDisabled()

    getByLabelText("Mundane").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: SET_MAGRES,
      payload: { magres: "Mundane" },
    })
  })
})
