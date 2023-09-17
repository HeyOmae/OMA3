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
  function setup(id = "12") {
    const user = userEvent.setup()
    renderWithTestRouter(<Submersion />, { query: { id } })
    return user
  }

  test("should display echos", async () => {
    setup("9")

    expect(await screen.findByText("Learn")).toBeInTheDocument()

    echoes.forEach(({ name }) => {
      expect(
        screen.getByRole("button", { name: `Learn ${name}` }),
      ).toBeInTheDocument()
    })
  })

  test("learn and forget echo", async () => {
    const user = setup()

    const karma = await screen.findByRole("definition", {
      name: "Available Karma Value",
    })
    const submersion = screen.getByRole("definition", {
      name: "Submersion Level Value",
    })

    expect(karma).toHaveTextContent("40")
    expect(submersion).toHaveTextContent("1")

    await user.click(screen.getByRole("button", { name: "Learn Skin Link" }))

    const removeButton = screen.getByRole("button", {
      name: "Forget Skin Link",
    })

    expect(removeButton).toBeInTheDocument()
    expect(karma).toHaveTextContent("29")
    expect(submersion).toHaveTextContent("2")

    await user.click(removeButton)

    expect(removeButton).not.toBeInTheDocument()
    expect(karma).toHaveTextContent("40")
    expect(submersion).toHaveTextContent("1")
  })

  test("adding an echo to a runner without submersion should work", async () => {
    const user = setup("9")

    const karma = await screen.findByRole("definition", {
      name: "Available Karma Value",
    })
    const submersion = screen.getByRole("definition", {
      name: "Submersion Level Value",
    })

    expect(karma).toHaveTextContent("7")
    expect(submersion).toHaveTextContent("0")

    await user.click(screen.getByRole("button", { name: "Learn Skin Link" }))

    const removeButton = screen.getByRole("button", {
      name: "Forget Skin Link",
    })

    expect(removeButton).toBeInTheDocument()
    expect(karma).toHaveTextContent("-3")
    expect(submersion).toHaveTextContent("1")
  })
})
