import { MagResAttributeSlider, Props } from "./index"
import { render, SliderHelper } from "../../../../test/testUtils"
import { SET_MAGIC, SET_RESONANCE } from ".."
import { mockedRunners } from "../../../../test/mocks"

describe("Magic/Resonance Attribute Slider", () => {
  const setup = ({
    attribute = "Magic",
    attributes = mockedRunners[1].attributes,
  }: Partial<Props> = {}) => {
    const props: Props = {
      attributes,
      attribute,
      min: 4,
      max: 6,
      dispatch: jest.fn(),
    }
    return { ...render(<MagResAttributeSlider {...props} />), props }
  }
  describe("Magic", () => {
    it("should have a slider and title", () => {
      const { getByTestId, getByText } = setup()

      expect(getByText("Magic")).toBeInTheDocument()
      expect(getByTestId("Magic-attribute-slider")).toBeInTheDocument()
      expect(
        getByTestId("Magic-attribute-slider").querySelector("input").value
      ).toEqual("4")
    })

    it("should set value based off adjustment points", () => {
      const { getByTestId } = setup({
        attributes: {
          ...mockedRunners[1].attributes,
          Magic: { adjustment: 2, points: 0 },
        },
      })

      expect(
        getByTestId("Magic-attribute-slider").querySelector("input").value
      ).toEqual("6")
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
        getByTestId("Resonance-attribute-slider").querySelector("input").value
      ).toEqual("4")
    })

    it("should set value based off adjustment points", () => {
      const { getByTestId } = setup({
        attribute: "Resonance",
        attributes: {
          ...mockedRunners[1].attributes,
          Resonance: { adjustment: 2, points: 0 },
        },
      })

      expect(
        getByTestId("Resonance-attribute-slider").querySelector("input").value
      ).toEqual("6")
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
})
