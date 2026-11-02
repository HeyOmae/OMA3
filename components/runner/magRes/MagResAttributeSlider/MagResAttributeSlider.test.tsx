import { defined } from "@/components/util"
import { MagResAttributeSlider, Props } from "./index"
import { render, SliderHelper } from "../../../../test/testUtils"
import { SET_MAGIC, SET_RESONANCE } from ".."
import { mockedRunners } from "../../../../test/mocks"

describe("Magic/Resonance Attribute Slider", () => {
  const setup = ({
    attribute = "Magic",
    attributes = defined(mockedRunners[1].attributes, "attributes"),
    adjustmentPoints = 9,
  }: Partial<Props> = {}) => {
    const props: Props = {
      adjustmentPoints,
      attributes,
      attribute,
      min: 4,
      max: 6,
      dispatch: jest.fn(),
    }
    return { ...render(<MagResAttributeSlider {...props} />), props }
  }
  describe("Magic", () => {
    it("should have a slider, title, and display adjustment points", () => {
      const { getByTestId, getByText } = setup()

      expect(getByText("Magic")).toBeInTheDocument()
      expect(getByTestId("Magic-attribute-slider")).toBeInTheDocument()
      expect(
        defined(
          getByTestId("Magic-attribute-slider").querySelector("input"),
          "slider input",
        ).value,
      ).toEqual("4")
      expect(getByText("9/9")).toBeInTheDocument()
    })

    it("should set value based off adjustment points", () => {
      const { getByTestId, getByText } = setup({
        attributes: {
          ...mockedRunners[1].attributes,
          Magic: { adjustment: 2, points: 0 },
        },
      })

      expect(
        defined(
          getByTestId("Magic-attribute-slider").querySelector("input"),
          "slider input",
        ).value,
      ).toEqual("6")
      expect(getByText("7/9")).toBeInTheDocument()
    })

    it("should dispatch", () => {
      const { getByTestId, props } = setup()

      SliderHelper.change(getByTestId("Magic-attribute-slider"), 5, 4, 6)

      expect(props.dispatch).toHaveBeenCalledWith({
        type: SET_MAGIC,
        payload: { adjustment: 1 },
      })
    })
  })
  describe("Resonance", () => {
    it("should have a slider and title", () => {
      const { getByTestId, getByText } = setup({ attribute: "Resonance" })

      expect(getByText("Resonance")).toBeInTheDocument()
      expect(getByTestId("Resonance-attribute-slider")).toBeInTheDocument()
      expect(
        defined(
          getByTestId("Resonance-attribute-slider").querySelector("input"),
          "slider input",
        ).value,
      ).toEqual("4")
      expect(getByText("9/9")).toBeInTheDocument()
    })

    it("should set value based off adjustment points", () => {
      const { getByTestId, getByText } = setup({
        attribute: "Resonance",
        attributes: {
          ...mockedRunners[1].attributes,
          Resonance: { adjustment: 2, points: 0 },
        },
      })

      expect(
        defined(
          getByTestId("Resonance-attribute-slider").querySelector("input"),
          "slider input",
        ).value,
      ).toEqual("6")
      expect(getByText("7/9")).toBeInTheDocument()
    })

    it("should dispatch", () => {
      const { getByTestId, props } = setup({ attribute: "Resonance" })

      SliderHelper.change(getByTestId("Resonance-attribute-slider"), 5, 4, 6)

      expect(props.dispatch).toHaveBeenCalledWith({
        type: SET_RESONANCE,
        payload: { adjustment: 1 },
      })
    })
  })

  it("should show bad-stuff styling when adjuestmentPoints go negative", () => {
    const { getByText } = setup({
      adjustmentPoints: 1,
      attributes: {
        ...mockedRunners[1].attributes,
        Magic: { adjustment: 2, points: 0 },
      },
    })

    expect(getByText("-1/1")).toHaveClass("bad-stuff")
  })
})
