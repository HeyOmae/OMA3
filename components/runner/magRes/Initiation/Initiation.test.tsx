import {
  renderWithTestRouter,
  screen,
  setupIndexedDB,
  userEvent,
} from "@/test/testUtils"
import Initiation from "./index"
import { metamagic } from "@/data/metamagic"

describe("<Initiation/>", () => {
  beforeAll(setupIndexedDB)
  function setup() {
    const user = userEvent.setup()
    renderWithTestRouter(<Initiation />, { query: { id: "5" } })
    return user
  }

  test("should display the metamagics", async () => {
    setup()

    expect(await screen.findByText("Learn")).toBeInTheDocument()

    metamagic.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  test("Add and remove a metamagic, which should raise or lower initiation grade and karma", async () => {
    const user = setup()

    expect(
      await screen.findByRole("definition", { name: "Initiation Grade Value" }),
    ).toHaveTextContent("0")
    expect(
      await screen.findByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("45")

    await user.click(screen.getByRole("button", { name: "Add Centering" }))

    expect(
      screen.getByRole("definition", { name: "Initiation Grade Value" }),
    ).toHaveTextContent("1")
    expect(
      await screen.findByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("35")

    await user.click(screen.getByRole("button", { name: "Add Masking" }))

    expect(
      screen.getByRole("definition", { name: "Initiation Grade Value" }),
    ).toHaveTextContent("2")
    expect(
      await screen.findByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("24")

    expect(
      screen.getByRole("button", { name: "Remove Centering" }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Remove Masking" }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "Remove Centering" }))

    expect(
      screen.queryByRole("button", { name: "Remove Centering" }),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Remove Masking" }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("definition", { name: "Initiation Grade Value" }),
    ).toHaveTextContent("1")
    expect(
      await screen.findByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("35")
  })
})
