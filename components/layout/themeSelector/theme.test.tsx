import { render, userEvent } from "@/test/testUtils"
import { SELECTED_THEME_KEY, ThemeSelector } from "."

describe("<ThemeSelector />", () => {
  const setup = () => render(<ThemeSelector />)

  it("should display a select with different theme names", async () => {
    const { getByText } = setup()
    const selectButton = getByText("CyberTerminal 3.0")
    expect(selectButton).toBeInTheDocument()
    await userEvent.click(selectButton)

    const selection = getByText("Mundane")
    await userEvent.click(selection)

    expect(localStorage.getItem(SELECTED_THEME_KEY)).toEqual("mundane")
  })

  it("should set the valued of the selector based off of localstorage", () => {
    localStorage.setItem(SELECTED_THEME_KEY, "mundane")
    const { getByText } = setup()
    expect(getByText("Mundane")).toBeInTheDocument()
  })
})
