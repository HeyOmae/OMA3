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

  it("should offer the Astral Plane theme", async () => {
    localStorage.removeItem(SELECTED_THEME_KEY)
    const { getByText, findByText } = setup()
    await userEvent.click(getByText("CyberTerminal 3.0"))

    await userEvent.click(await findByText("Astral Plane"))

    expect(localStorage.getItem(SELECTED_THEME_KEY)).toEqual("astral")
    expect(document.body).toHaveClass("astral")
  })

  it("should set the valued of the selector based off of localstorage", () => {
    localStorage.setItem(SELECTED_THEME_KEY, "mundane")
    const { getByText } = setup()
    expect(getByText("Mundane")).toBeInTheDocument()
  })
})
