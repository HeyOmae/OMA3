import { RunnerLayout } from "."
import {
  render,
  waitFor,
  withTestRouter,
  waitForElementToBeRemoved,
  fireEvent,
  userEvent,
} from "@/test/testUtils"

describe("<RunnerLayout />", () => {
  const setup = () => {
    const push = jest.fn()
    return {
      ...render(
        withTestRouter(
          <RunnerLayout>
            <p>Some content</p>
          </RunnerLayout>,
          { query: { id: "1" }, push },
        ),
      ),
      push,
    }
  }

  it("have a home button that goes back to the root", async () => {
    const { getByText, push } = setup()

    getByText("Home").click()

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith("/")
    })
  })

  it("should open a drawer to navigate the runner chargen routes", async () => {
    const { getByText, queryByText } = setup()

    expect(queryByText("Info")).not.toBeInTheDocument()
    expect(queryByText("Delete")).not.toBeInTheDocument()

    getByText("Menu").click()

    await waitFor(() => {
      expect(getByText("Info").closest("a")).toHaveAttribute("href", "/1/info")
      expect(getByText("Priority").closest("a")).toHaveAttribute(
        "href",
        "/1/priority",
      )
      expect(getByText("Metatype & Attributes").closest("a")).toHaveAttribute(
        "href",
        "/1/metatype",
      )
      expect(getByText("Skills").closest("a")).toHaveAttribute(
        "href",
        "/1/skills",
      )
      expect(getByText("Magic & Resonance").closest("a")).toHaveAttribute(
        "href",
        "/1/magres",
      )
      expect(getByText("Resources").closest("a")).toHaveAttribute(
        "href",
        "/1/resources",
      )
      expect(getByText("Delete").closest("a")).toHaveAttribute(
        "href",
        "/1/delete",
      )
    })
  })

  it("should close the drawer when clicking outside of it", async () => {
    const { getByText, queryByText, getByRole, push } = setup()

    expect(queryByText("Info")).not.toBeInTheDocument()

    getByText("Menu").click()

    expect(queryByText("Info")).toBeInTheDocument()

    await waitFor(() => {
      fireEvent.click(getByRole("presentation").firstChild)
    })

    expect(push).not.toHaveBeenCalled()
    await waitForElementToBeRemoved(() => queryByText("Info"))
  })

  describe("theme selector", () => {
    it("should in the drawer when open", async () => {
      const { getByLabelText, getByText } = setup()

      getByText("Menu").click()

      await waitFor(() => {
        expect(getByLabelText("Theme")).toBeInTheDocument()
      })
      expect(document.body).toHaveClass("cyberterminal3")
    })

    it("should change the class on body", async () => {
      const { findByLabelText, getByText, getByLabelText } = setup()
      expect(document.body).toHaveClass("cyberterminal3")

      await userEvent.click(getByText("Menu"))

      expect(await findByLabelText("Theme")).toBeInTheDocument()

      await userEvent.click(getByLabelText("Theme"))
      await userEvent.click(getByText("Mundane"))

      expect(document.body).toHaveClass("mundane")
    })
  })
})
