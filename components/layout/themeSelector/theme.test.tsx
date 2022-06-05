import { render, userEvent } from "@/test/testUtils"
import { ThemeSelector, ThemeingContext } from "."

describe("<ThemeSelector />", () => {
  const setup = (mockState?: string) => {
    const mockUpdater = jest.fn()
    return {
      mockUpdater,
      ...render(
        <ThemeingContext.Provider value={[mockState, mockUpdater]}>
          <ThemeSelector />
        </ThemeingContext.Provider>,
      ),
    }
  }
  it("should display a select with different theme names", async () => {
    const { getByText, mockUpdater } = setup("cyberterminal3")
    const selectButton = getByText("CyberTerminal 3.0")
    expect(selectButton).toBeInTheDocument()
    await userEvent.click(selectButton)

    const selection = getByText("Mundane")
    await userEvent.click(selection)

    expect(mockUpdater).toHaveBeenCalledWith("mundane")
  })

  it("should default to cyberterminal3 if no theme is provided", () => {
    const { getByText } = setup()
    expect(getByText("CyberTerminal 3.0")).toBeInTheDocument()
  })
})
