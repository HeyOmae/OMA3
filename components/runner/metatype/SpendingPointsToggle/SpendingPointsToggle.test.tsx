import { SpendingPointsToggle, Props } from "."
import { render, userEvent, screen } from "@/test/testUtils"

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
    const { props } = setup({
      isSpendingAdjustmentPoints: true,
    })

    await userEvent.click(screen.getByLabelText("Attribute"))

    expect(props.toggleSpending).toHaveBeenCalledWith(false)
  })

  it("should be unchecked if isSpendingAdjustmentPoints is false", async () => {
    const { props } = setup({
      isSpendingAdjustmentPoints: false,
    })

    await userEvent.click(screen.getByLabelText("Adjustment"))

    expect(props.toggleSpending).toHaveBeenCalledWith(true)
  })
})
