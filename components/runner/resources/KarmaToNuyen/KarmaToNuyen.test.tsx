import {
  caymansCurrentlySpentNuyen,
  renderWithTestRouter,
  screen,
  setupIndexedDB,
  userEvent,
} from "@/test/testUtils"
import KarmaToNuyen from "./index"

describe("<KarmaToNuyen/>", () => {
  beforeAll(setupIndexedDB)

  const setup = (id = "10") => {
    const user = userEvent.setup()
    renderWithTestRouter(<KarmaToNuyen />, { query: { id } })
    return user
  }

  test("display nuyen and karma", async () => {
    setup()

    expect(
      await screen.findByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("38")
    expect(
      screen.getByRole("definition", { name: "Nuyen Value" }),
    ).toHaveTextContent(`${caymansCurrentlySpentNuyen}¥/275000¥`)
  })

  test("increment karma to nuyen button should reduce karam by 1 and increae nuyen by 2000", async () => {
    const user = setup()

    expect(await screen.findByLabelText("Karma to Nuyen")).toHaveValue(0)

    await user.click(
      screen.getByRole("button", { name: "Increment Karma to Nuyen" }),
    )

    expect(screen.getByLabelText("Karma to Nuyen")).toHaveValue(1)
    expect(
      await screen.findByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("37")
    expect(
      screen.getByRole("definition", { name: "Nuyen Value" }),
    ).toHaveTextContent(`${caymansCurrentlySpentNuyen + 2000}¥/277000¥`)
  })

  test("decrement karam to nuyen button should increase karam by 1 and decrease nuyen by 2000", async () => {
    const user = setup("5")

    expect(await screen.findByLabelText("Karma to Nuyen")).toHaveValue(5)
    expect(
      await screen.findByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("45")
    expect(
      screen.getByRole("definition", { name: "Nuyen Value" }),
    ).toHaveTextContent("18000¥/18000¥")

    await user.click(
      screen.getByRole("button", { name: "Decrement Karma to Nuyen" }),
    )

    expect(screen.getByLabelText("Karma to Nuyen")).toHaveValue(4)
    expect(
      await screen.findByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("46")
    expect(
      screen.getByRole("definition", { name: "Nuyen Value" }),
    ).toHaveTextContent("16000¥/16000¥")
  })

  test("karmaToNuyen when going negative should not throw an error and stop the program", async () => {
    const user = setup("7")

    expect(await screen.findByLabelText("Karma to Nuyen")).toHaveValue(0)
    expect(screen.getByLabelText("Karma to Nuyen")).not.toHaveClass("bad-stuff")
    expect(
      await screen.findByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("50")
    expect(
      screen.getByRole("definition", { name: "Nuyen Value" }),
    ).toHaveTextContent("5750¥/8000¥")

    await user.click(
      screen.getByRole("button", { name: "Decrement Karma to Nuyen" }),
    )

    expect(screen.getByLabelText("Karma to Nuyen")).toHaveValue(-1)
    expect(screen.getByLabelText("Karma to Nuyen")).toHaveClass("bad-stuff")
    expect(
      await screen.findByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("51")
    expect(
      screen.getByRole("definition", { name: "Nuyen Value" }),
    ).toHaveTextContent("3750¥/6000¥")
  })
})
