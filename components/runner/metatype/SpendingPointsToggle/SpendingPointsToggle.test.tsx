import { SpendingPointsToggle, Props } from "."
import { render, userEvent, screen } from "@/test/testUtils"

describe("SpendingPointsToggle", () => {
  const setup = ({ pointToSpend = "" }: Partial<Props> = {}) => {
    const props: Props = {
      pointToSpend,
      selectSpending: jest.fn(),
    }
    return { ...render(<SpendingPointsToggle {...props} />), props }
  }

  it("should call the selectSpending with 'Attribute' when switching to spend attribute", async () => {
    const { props } = setup({
      pointToSpend: "Adjustment",
    })

    await userEvent.click(screen.getByLabelText("Attribute"))

    expect(props.selectSpending).toHaveBeenCalledWith("Attribute")
  })

  it("should call the selectSpending with 'Adjustment' when switching to spend adjustment", async () => {
    const { props } = setup({
      pointToSpend: "Attribute",
    })

    await userEvent.click(screen.getByLabelText("Adjustment"))

    expect(props.selectSpending).toHaveBeenCalledWith("Adjustment")
  })

  it('should call selectSpending with "Karma" when switching to spend karma', async () => {
    const { props } = setup({ pointToSpend: "Attribute" })

    await userEvent.click(screen.getByRole("radio", { name: "Karma" }))

    expect(props.selectSpending).toHaveBeenCalledWith("Karma")
  })
})
