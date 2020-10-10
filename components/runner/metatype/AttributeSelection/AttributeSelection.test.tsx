import { AttributeSelection, Props } from "./"
import { render, SliderHelper } from "../../../../test/testUtils"
import { orkRunner } from "../../../../test/mocks"
import { SPEND_ADJUSTMENT_POINTS, SPEND_ATTRIBUTE_POINTS } from ".."

describe("AttributeSelection", () => {
  const setup = ({
    isSpendingAdjustmentPoints = true,
  }: Partial<Props> = {}) => {
    const props: Props = {
      dispatch: jest.fn(),
      runner: orkRunner,
      isSpendingAdjustmentPoints,
    }
    return { ...render(<AttributeSelection {...props} />), props }
  }
  it("should should have sliders for the runner attributes", () => {
    const { getByText } = setup()
    expect(getByText("Body")).toBeInTheDocument()
    expect(getByText("Agility")).toBeInTheDocument()
    expect(getByText("Reaction")).toBeInTheDocument()
    expect(getByText("Strength")).toBeInTheDocument()
    expect(getByText("Willpower")).toBeInTheDocument()
    expect(getByText("Logic")).toBeInTheDocument()
    expect(getByText("Intuition")).toBeInTheDocument()
    expect(getByText("Charisma")).toBeInTheDocument()
    expect(getByText("Edge")).toBeInTheDocument()
  })

  describe("Adjustment Points", () => {
    it("should dispatch SPEND_ADJUSTMENT_POINTS when isSpendingAdjustmentPoints is true", () => {
      const { props, getByTestId } = setup()

      SliderHelper.change(getByTestId("Body-slider"), 3, 1, 9)

      expect(props.dispatch).toHaveBeenCalledWith({
        type: SPEND_ADJUSTMENT_POINTS,
        payload: { key: "Body", value: 2 },
      })
    })

    it("should disable sliders for non-metatype or edge attributes", () => {
      const { getByTestId } = setup()
      expect(getByTestId("Body-slider")).not.toHaveClass("Mui-disabled")
      expect(getByTestId("Agility-slider")).toHaveClass("Mui-disabled")
      expect(getByTestId("Reaction-slider")).toHaveClass("Mui-disabled")
      expect(getByTestId("Strength-slider")).not.toHaveClass("Mui-disabled")
      expect(getByTestId("Willpower-slider")).toHaveClass("Mui-disabled")
      expect(getByTestId("Logic-slider")).toHaveClass("Mui-disabled")
      expect(getByTestId("Intuition-slider")).toHaveClass("Mui-disabled")
      expect(getByTestId("Charisma-slider")).toHaveClass("Mui-disabled")
      expect(getByTestId("Edge-slider")).not.toHaveClass("Mui-disabled")
    })
  })

  describe("Attribute Points", () => {
    it("should dispatch SPEND_ATTRIBUTE_POINTS when isSpendingAdjustmentPoints is false", () => {
      const { props, getByTestId } = setup({
        isSpendingAdjustmentPoints: false,
      })

      SliderHelper.change(getByTestId("Agility-slider"), 4, 1, 6)

      expect(props.dispatch).toHaveBeenCalledWith({
        type: SPEND_ATTRIBUTE_POINTS,
        payload: { key: "Agility", value: 3 },
      })
    })

    it("should disable the edge slider", () => {
      const { getByTestId } = setup({
        isSpendingAdjustmentPoints: false,
      })
      expect(getByTestId("Body-slider")).not.toHaveClass("Mui-disabled")
      expect(getByTestId("Agility-slider")).not.toHaveClass("Mui-disabled")
      expect(getByTestId("Reaction-slider")).not.toHaveClass("Mui-disabled")
      expect(getByTestId("Strength-slider")).not.toHaveClass("Mui-disabled")
      expect(getByTestId("Willpower-slider")).not.toHaveClass("Mui-disabled")
      expect(getByTestId("Logic-slider")).not.toHaveClass("Mui-disabled")
      expect(getByTestId("Intuition-slider")).not.toHaveClass("Mui-disabled")
      expect(getByTestId("Charisma-slider")).not.toHaveClass("Mui-disabled")
      expect(getByTestId("Edge-slider")).toHaveClass("Mui-disabled")
    })
  })
})
