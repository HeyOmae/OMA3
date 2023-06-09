import { negative, positive } from "@/data/qualities"
import {
  renderWithTestRouter,
  screen,
  userEvent,
  setupIndexedDB,
} from "@/test/testUtils"
import Qualities from "."

describe("<Qualities />", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "7") => {
    const user = userEvent.setup()
    renderWithTestRouter(<Qualities />, { query: { id } })
    return user
  }

  test("displayes poitive qualities", async () => {
    setup()

    expect(await screen.findByText("Positive Qualities")).toBeInTheDocument()

    positive.forEach((quality) => {
      const qualityRow = screen.getByText(quality.name).closest("tr")
      expect(qualityRow).toHaveTextContent(quality.karma.toString())
    })
  })

  test("display negative qualities", async () => {
    setup()

    expect(await screen.findByText("Negative Qualities")).toBeInTheDocument()

    negative.forEach((quality) => {
      const qualityRow = screen.getByText(quality.name).closest("tr")
      expect(qualityRow).toHaveTextContent(quality.karma.toString())
    })
  })

  test("should be able to buy a quality", async () => {
    const user = setup()

    // test buy positive
    await user.click(await screen.findByLabelText("Add Astral Chameleon"))

    expect(
      await screen.findByText("Frosty's Positive Qualities"),
    ).toBeInTheDocument()

    expect(
      await screen.findByLabelText("Remove Astral Chameleon"),
    ).toBeInTheDocument()

    // test buy negative
    await user.click(await screen.findByLabelText("Add AR Vertigo"))

    expect(screen.getByLabelText("Remove AR Vertigo")).toBeInTheDocument()
  })

  test("should be able to remove qualities", async () => {
    const user = setup("10")

    await user.click(await screen.findByLabelText("Remove Will To Live"))

    // remove positive
    expect(
      screen.queryByLabelText("Remove Will To Live"),
    ).not.toBeInTheDocument()
    expect(screen.getByLabelText("Remove Guts")).toBeInTheDocument()

    //remove negative
    await user.click(screen.getByLabelText("Remove AR Vertigo"))
    expect(screen.queryByLabelText("Remove AR Vertigo")).not.toBeInTheDocument()
  })
})
