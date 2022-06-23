import { SpendingPointsToggle, Props } from "."
import { render, userEvent } from "@/test/testUtils"

describe("SpendingPointsToggle", () => {
  const setup = ({
    isSpendingAdjustmentPoints = true,
  }: Partial<Props> = {}) => {
    const props: Props = {
      isSpendingAdjustmentPoints,
      toggleSpending: jest.fn(),
    }
    return { ...render(<SpendingPointsToggle {...props} />), props }
  }
  it("should call the toggleSpending with false callback when switching to spend attribute", async () => {
    const { getByLabelText, props } = setup({
      isSpendingAdjustmentPoints: false,
    })

    const selectAttribute = getByLabelText("Attribute")

    await userEvent.click(selectAttribute)

    expect(props.toggleSpending).toHaveBeenCalledWith(true)
  })

  it("should be unchecked if isSpendingAdjustmentPoints is false", async () => {
    const { getByLabelText, props } = setup({
      isSpendingAdjustmentPoints: true,
    })

    const selectAdjustment = getByLabelText("Adjustment")

    await userEvent.click(selectAdjustment)

    expect(props.toggleSpending).toHaveBeenCalledWith(false)
  })
})
