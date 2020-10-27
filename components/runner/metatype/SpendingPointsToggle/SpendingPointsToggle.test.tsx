import { SpendingPointsToggle, Props } from "."
import { render } from "@testing-library/react"

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
  it("should call the toggleSpending callback when clicked", () => {
    const { getByLabelText, props } = setup()

    const switchEl = getByLabelText("Spend Points") as HTMLInputElement

    expect(switchEl.checked).toBe(true)

    switchEl.click()

    expect(props.toggleSpending).toHaveBeenCalled()
  })
  it("should be unchecked if isSpendingAdjustmentPoints is false", () => {
    const { getByLabelText } = setup({ isSpendingAdjustmentPoints: false })

    expect((getByLabelText("Spend Points") as HTMLInputElement).checked).toBe(
      false,
    )
  })
})
