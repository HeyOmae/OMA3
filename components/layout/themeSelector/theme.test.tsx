import { render, userEvent } from "@/test/testUtils"
import { ThemeSelector, ThemeingContext } from "."

describe("<ThemeSelector />", () => {
  const setup = () => {
    const mockUpdater = jest.fn()
    return {
      mockUpdater,
      ...render(
        <ThemeingContext.Provider value={mockUpdater}>
          <ThemeSelector />
        </ThemeingContext.Provider>,
      ),
    }
  }
  it("should display a select with different theme names", () => {
    const { getByText, mockUpdater } = setup()
    const selectButton = getByText("CyberTerminal 3.0")
    expect(selectButton).toBeInTheDocument()
    userEvent.click(selectButton)

    const selection = getByText("Mundane")
    userEvent.click(selection)

    expect(mockUpdater).toHaveBeenCalledWith("mundane")
  })
})
