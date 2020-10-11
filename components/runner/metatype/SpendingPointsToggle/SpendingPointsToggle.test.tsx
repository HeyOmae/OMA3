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

    getByLabelText("Spend Points").click()

    expect(props.toggleSpending).toHaveBeenCalled()
  })
})
