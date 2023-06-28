import { RunnerLayout } from "."
import {
  render,
  withTestRouter,
  waitForElementToBeRemoved,
  userEvent,
  screen,
} from "@/test/testUtils"

describe("<RunnerLayout />", () => {
  const setup = () => {
    const user = userEvent.setup()
    const push = jest.fn()
    render(
      withTestRouter(
        <RunnerLayout>
          <p>Some content</p>
        </RunnerLayout>,
        { query: { id: "1" }, push },
      ),
    )
    return {
      user,
      push,
    }
  }

  it("have a home button that goes back to the root", async () => {
    const { user, push } = setup()

    await user.click(screen.getByText("Home"))

    expect(push).toHaveBeenCalledWith("/")
  })

  it("should open a drawer to navigate the runner chargen routes", async () => {
    const { user } = setup()

    expect(screen.queryByText("Info")).not.toBeInTheDocument()
    expect(screen.queryByText("Delete")).not.toBeInTheDocument()

    await user.click(screen.getByText("Menu"))

    expect(screen.getByText("Info").closest("a")).toHaveAttribute(
      "href",
      "/1/info",
    )

    expect(screen.getByText("Priority").closest("a")).toHaveAttribute(
      "href",
      "/1/priority",
    )
    expect(
      screen.getByText("Metatype & Attributes").closest("a"),
    ).toHaveAttribute("href", "/1/metatype")
    expect(screen.getByText("Active Skills").closest("a")).toHaveAttribute(
      "href",
      "/1/skills",
    )
    expect(screen.getByText("Knowledge Skills").closest("a")).toHaveAttribute(
      "href",
      "/1/knowledge",
    )
    expect(screen.getByText("Magic & Resonance").closest("a")).toHaveAttribute(
      "href",
      "/1/magres",
    )
    expect(screen.getByText("Qualities").closest("a")).toHaveAttribute(
      "href",
      "/1/qualities",
    )
    expect(screen.getByText("Resources").closest("a")).toHaveAttribute(
      "href",
      "/1/resources",
    )
    expect(screen.getByText("Delete").closest("a")).toHaveAttribute(
      "href",
      "/1/delete",
    )
  })

  it("should close the drawer when clicking outside of it", async () => {
    const { user, push } = setup()

    expect(screen.queryByText("Info")).not.toBeInTheDocument()

    await user.click(screen.getByText("Menu"))

    expect(screen.queryByText("Info")).toBeInTheDocument()

    await user.click(screen.getByRole("presentation").firstChild as Element) // TODO: figure out how to either target the parent or get rid of type casting

    expect(push).not.toHaveBeenCalled()
    await waitForElementToBeRemoved(() => screen.queryByText("Info"))
  })

  describe("theme selector", () => {
    it("should in the drawer when open", async () => {
      const { user } = setup()

      await user.click(screen.getByText("Menu"))

      expect(screen.getByLabelText("Theme")).toBeInTheDocument()

      expect(document.body).toHaveClass("cyberterminal3")
    })

    it("should change the class on body", async () => {
      const { user } = setup()
      expect(document.body).toHaveClass("cyberterminal3")

      await user.click(screen.getByText("Menu"))

      expect(screen.getByLabelText("Theme")).toBeInTheDocument()

      await user.click(screen.getByLabelText("Theme"))
      await user.click(screen.getByText("Mundane"))

      expect(document.body).toHaveClass("mundane")
    })
  })
})
