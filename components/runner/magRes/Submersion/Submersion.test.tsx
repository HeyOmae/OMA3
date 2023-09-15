import {
  renderWithTestRouter,
  screen,
  setupIndexedDB,
  userEvent,
} from "@/test/testUtils"
import Submersion from "./index"
import { echoes } from "@/data/echoes"

describe("<Submersion />", () => {
  beforeAll(setupIndexedDB)
  function setup() {
    const user = userEvent.setup()
    renderWithTestRouter(<Submersion />, { query: { id: "9" } })
    return user
  }

  test("should display echos", async () => {
    setup()

    expect(await screen.findByText("Learn")).toBeInTheDocument()

    echoes.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  test("learn and forget echo", async () => {
    const user = setup()

    await user.click(
      await screen.findByRole("button", { name: "Learn Skin Link" }),
    )

    const removeButton = screen.getByRole("button", {
      name: "Forget Skin Link",
    })

    expect(removeButton).toBeInTheDocument()

    await user.click(removeButton)

    expect(removeButton).not.toBeInTheDocument()
  })
})
