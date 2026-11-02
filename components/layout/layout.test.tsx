import { PointsHud, RunnerLayout, useNotify } from "."
import {
  render,
  withTestRouter,
  waitForElementToBeRemoved,
  userEvent,
  screen,
  within,
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

    expect(screen.getByRole("link", { name: "Info" })).toHaveAttribute(
      "href",
      "/1/info",
    )

    expect(screen.getByRole("link", { name: "Priority" })).toHaveAttribute(
      "href",
      "/1/priority",
    )
    expect(
      screen.getByRole("link", { name: "Metatype & Attributes" }),
    ).toHaveAttribute("href", "/1/metatype")
    expect(screen.getByRole("link", { name: "Active Skills" })).toHaveAttribute(
      "href",
      "/1/skills",
    )
    expect(
      screen.getByRole("link", { name: "Knowledge Skills" }),
    ).toHaveAttribute("href", "/1/knowledge")
    expect(
      screen.getByRole("link", { name: "Magic & Resonance" }),
    ).toHaveAttribute("href", "/1/magres")
    expect(screen.getByRole("link", { name: "Qualities" })).toHaveAttribute(
      "href",
      "/1/qualities",
    )
    expect(screen.getByRole("link", { name: "Resources" })).toHaveAttribute(
      "href",
      "/1/resources",
    )
    expect(
      screen.getByRole("link", { name: "Character Sheet" }),
    ).toHaveAttribute("href", "/1/sheet")
    expect(screen.getByRole("link", { name: "Delete" })).toHaveAttribute(
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

describe("<RunnerLayout /> points and notices", () => {
  const Notifier = () => {
    const notify = useNotify()
    return (
      <button
        onClick={() => notify({ message: "Added Guts", target: "my-stuff" })}
      >
        add guts
      </button>
    )
  }

  const setup = () => {
    const user = userEvent.setup()
    render(
      withTestRouter(
        <RunnerLayout>
          <PointsHud>
            <span>Karma 42</span>
          </PointsHud>
          <Notifier />
          <section id="my-stuff">My stuff</section>
        </RunnerLayout>,
        { query: { id: "1" } },
      ),
    )
    return { user }
  }

  it("should keep the points in the bottom bar, always on screen", () => {
    setup()

    expect(
      within(screen.getByRole("banner")).getByText("Karma 42"),
    ).toBeInTheDocument()
  })

  it("should tell the user what they added and take them to it", async () => {
    const scrollIntoView = jest.fn()
    Element.prototype.scrollIntoView = scrollIntoView
    const { user } = setup()

    await user.click(screen.getByText("add guts"))

    expect(await screen.findByText("Added Guts")).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "Show" }))

    expect(scrollIntoView).toHaveBeenCalled()
    expect(scrollIntoView.mock.contexts[0]).toBe(screen.getByText("My stuff"))
  })

  it("should stay up while adding more, and close with escape", async () => {
    const { user } = setup()

    await user.click(screen.getByText("add guts"))
    await user.click(screen.getByText("add guts"))
    expect(await screen.findByText("Added Guts")).toBeInTheDocument()

    await user.keyboard("{Escape}")

    await waitForElementToBeRemoved(() => screen.queryByText("Added Guts"))
  })
})
