import { AttributeSelection, Props } from "./"
import { render, SliderHelper, screen } from "@/test/testUtils"
import { mockedRunners, orkRunner } from "@/test/mocks"
import { SPEND_ADJUSTMENT_POINTS, SPEND_ATTRIBUTE_POINTS } from ".."
import { ADJUSTMENT, ATTRIBUTE } from "../SpendingPointsToggle"

describe("AttributeSelection", () => {
  const setup = ({
    pointToSpend: isSpendingAdjustmentPoints = ADJUSTMENT,
    runner = orkRunner,
  }: Partial<Props> = {}) => {
    const props: Props = {
      dispatch: jest.fn(),
      runner,
      pointToSpend: isSpendingAdjustmentPoints,
    }
    render(<AttributeSelection {...props} />)
    return { props }
  }
  it("should should have sliders for the runner attributes", () => {
    setup()
    expect(screen.getByText("Body")).toBeInTheDocument()
    expect(screen.getByText("Agility")).toBeInTheDocument()
    expect(screen.getByText("Reaction")).toBeInTheDocument()
    expect(screen.getByText("Strength")).toBeInTheDocument()
    expect(screen.getByText("Willpower")).toBeInTheDocument()
    expect(screen.getByText("Logic")).toBeInTheDocument()
    expect(screen.getByText("Intuition")).toBeInTheDocument()
    expect(screen.getByText("Charisma")).toBeInTheDocument()
    expect(screen.getByText("Edge")).toBeInTheDocument()
  })

  it("should get the value from combining the adjustment and attribute points", () => {
    setup({
      runner: {
        ...orkRunner,
        attributes: {
          ...orkRunner.attributes,
          Body: { adjustment: 2, points: 3 },
        },
      },
    })

    expect(
      screen.getByTestId("Body-slider").querySelector("input").value,
    ).toEqual("6")
  })

  describe("Adjustment Points", () => {
    it("should dispatch SPEND_ADJUSTMENT_POINTS when pointToSpend is Adjustment", () => {
      const { props } = setup()

      SliderHelper.change(screen.getByTestId("Body-slider"), 3, 1, 9)

      expect(props.dispatch).toHaveBeenCalledWith({
        type: SPEND_ADJUSTMENT_POINTS,
        payload: { key: "Body", value: 2 },
      })
    })

    it("should disable sliders for non-metatype or edge attributes", () => {
      setup()
      expect(screen.getByTestId("Body-slider")).not.toHaveClass("Mui-disabled")
      expect(screen.getByTestId("Agility-slider")).toHaveClass("Mui-disabled")
      expect(screen.getByTestId("Reaction-slider")).toHaveClass("Mui-disabled")
      expect(screen.getByTestId("Strength-slider")).not.toHaveClass(
        "Mui-disabled",
      )
      expect(screen.getByTestId("Willpower-slider")).toHaveClass("Mui-disabled")
      expect(screen.getByTestId("Logic-slider")).toHaveClass("Mui-disabled")
      expect(screen.getByTestId("Intuition-slider")).toHaveClass("Mui-disabled")
      expect(screen.getByTestId("Charisma-slider")).toHaveClass("Mui-disabled")
      expect(screen.getByTestId("Edge-slider")).not.toHaveClass("Mui-disabled")
    })
  })

  describe("Attribute Points", () => {
    it("should dispatch SPEND_ATTRIBUTE_POINTS when pointToSpend is Attribute", () => {
      const { props } = setup({
        pointToSpend: ATTRIBUTE,
      })

      SliderHelper.change(screen.getByTestId("Agility-slider"), 4, 1, 6)

      expect(props.dispatch).toHaveBeenCalledWith({
        type: SPEND_ATTRIBUTE_POINTS,
        payload: { key: "Agility", value: 3 },
      })
    })

    it("should disable the edge slider", () => {
      setup({
        pointToSpend: ATTRIBUTE,
      })
      expect(screen.getByTestId("Body-slider")).not.toHaveClass("Mui-disabled")
      expect(screen.getByTestId("Agility-slider")).not.toHaveClass(
        "Mui-disabled",
      )
      expect(screen.getByTestId("Reaction-slider")).not.toHaveClass(
        "Mui-disabled",
      )
      expect(screen.getByTestId("Strength-slider")).not.toHaveClass(
        "Mui-disabled",
      )
      expect(screen.getByTestId("Willpower-slider")).not.toHaveClass(
        "Mui-disabled",
      )
      expect(screen.getByTestId("Logic-slider")).not.toHaveClass("Mui-disabled")
      expect(screen.getByTestId("Intuition-slider")).not.toHaveClass(
        "Mui-disabled",
      )
      expect(screen.getByTestId("Charisma-slider")).not.toHaveClass(
        "Mui-disabled",
      )
      expect(screen.getByTestId("Edge-slider")).toHaveClass("Mui-disabled")
    })
  })

  describe("qualities", () => {
    test("Exceptional Attribute should raise the max value of an attribute", () => {
      const { props } = setup({
        runner: mockedRunners[3],
        pointToSpend: ATTRIBUTE,
      })

      SliderHelper.change(screen.getByTestId("Logic-slider"), 7, 1, 7)

      expect(props.dispatch).toHaveBeenCalledWith({
        type: SPEND_ATTRIBUTE_POINTS,
        payload: { key: "Logic", value: 6 },
      })
    })

    test("Impaired should lower the max value of an attribute", () => {
      const { props } = setup({
        runner: mockedRunners[3],
        pointToSpend: ATTRIBUTE,
      })

      SliderHelper.change(screen.getByTestId("Reaction-slider"), 5, 1, 5)

      expect(props.dispatch).toHaveBeenCalledWith({
        type: SPEND_ATTRIBUTE_POINTS,
        payload: { key: "Reaction", value: 4 },
      })
    })

    test("should not be able to use adjustment points on exceptional attributes that are not for that metatype", () => {
      setup({
        runner: mockedRunners[3],
        pointToSpend: ADJUSTMENT,
      })

      expect(screen.getByTestId("Logic-slider")).toHaveClass("Mui-disabled")
    })
  })
})
