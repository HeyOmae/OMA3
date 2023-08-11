import { AttributeSelection, Props } from "./"
import { render, SliderHelper, screen } from "@/test/testUtils"
import { mockedRunners, orkRunner } from "@/test/mocks"
import {
  SPEND_ADJUSTMENT_POINTS,
  SPEND_ATTRIBUTE_POINTS,
  SPEND_KARMA,
} from ".."
import { ADJUSTMENT, ATTRIBUTE, KARMA } from "../SpendingPointsToggle"

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
    expect(screen.getByRole("slider", { name: "Body" })).toBeInTheDocument()
    expect(screen.getByRole("slider", { name: "Agility" })).toBeInTheDocument()
    expect(screen.getByRole("slider", { name: "Reaction" })).toBeInTheDocument()
    expect(screen.getByRole("slider", { name: "Strength" })).toBeInTheDocument()
    expect(
      screen.getByRole("slider", { name: "Willpower" }),
    ).toBeInTheDocument()
    expect(screen.getByRole("slider", { name: "Logic" })).toBeInTheDocument()
    expect(
      screen.getByRole("slider", { name: "Intuition" }),
    ).toBeInTheDocument()
    expect(screen.getByRole("slider", { name: "Charisma" })).toBeInTheDocument()
    expect(screen.getByRole("slider", { name: "Edge" })).toBeInTheDocument()
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

    expect(screen.getByRole("slider", { name: "Body" })).toHaveValue("6")
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

  describe("karma buy", () => {
    test("All sliders should be enabled", () => {
      setup({
        pointToSpend: KARMA,
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
      expect(screen.getByTestId("Edge-slider")).not.toHaveClass("Mui-disabled")
    })

    test("dispatch SPEND_KARMA when pointToSpend is Karma", () => {
      const { props } = setup({
        pointToSpend: KARMA,
      })

      SliderHelper.change(screen.getByTestId("Agility-slider"), 4, 1, 6)

      expect(props.dispatch).toHaveBeenCalledWith({
        type: SPEND_KARMA,
        payload: { key: "Agility", value: 3 },
      })
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

  describe("special attributes", () => {
    test("awaken characters should have a magic slider", () => {
      setup({ runner: mockedRunners[4] })

      expect(screen.getByRole("slider", { name: "Magic" })).toHaveValue("4")
      expect(
        screen.queryByRole("slider", { name: "Resonance" }),
      ).not.toBeInTheDocument()
    })

    test("mundance characters should not have magic or resonence", () => {
      setup({ runner: mockedRunners[9] })

      expect(
        screen.queryByRole("slider", { name: "Magic" }),
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole("slider", { name: "Resonance" }),
      ).not.toBeInTheDocument()
    })

    test("runner's with no mag/res selected should not display magic or resonance", () => {
      setup({ runner: mockedRunners[3] })

      expect(
        screen.queryByRole("slider", { name: "Magic" }),
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole("slider", { name: "Resonance" }),
      ).not.toBeInTheDocument()
    })
  })
})
