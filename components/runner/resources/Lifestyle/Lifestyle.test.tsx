import LifeStyle from "."
import { lifestyles } from "@/data/lifestyle"
import {
  setupIndexedDB,
  withTestRouter,
  render,
  screen,
} from "@/test/testUtils"

describe("<LifeStyle />", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "10") =>
    render(withTestRouter(<LifeStyle />, { query: { id } }))
  it("should have some labels and lifestyles", async () => {
    setup()

    expect(await screen.findByText("Buy")).toBeInTheDocument()

    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Cost")).toBeInTheDocument()

    lifestyles.forEach(({ name, cost }) => {
      const row = screen.getByText(name).closest("tr")
      expect(row).toHaveTextContent(`${cost}`)
    })
  })

  test("Sinner quality should raise life style costs by 10%", async () => {
    setup("4")
    expect(await screen.findByText("Buy")).toBeInTheDocument()

    lifestyles.forEach(({ name, cost }) => {
      const row = screen
        .getByRole("button", { name: new RegExp(`Add ${name}`) })
        .closest("tr")
      expect(row).toHaveTextContent(`${cost * 1.1}`)
    })

    const runnerLifestyleHighRow = screen
      .getByRole("button", { name: /Remove high/i })
      .closest("tr")
    expect(runnerLifestyleHighRow).toHaveTextContent("11000¥")

    expect(screen.getByRole("definition")).toHaveTextContent("316000¥")
  })
})
