import { RunnerLayout } from "./layout"
import { render, waitFor, withTestRouter } from "../test/testUtils"

describe("<RunnerLayout />", () => {
  const setup = () => {
    const push = jest.fn()
    return {
      ...render(
        withTestRouter(
          <RunnerLayout>
            <p>Some content</p>
          </RunnerLayout>,
          { query: { id: "1" }, push }
        )
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
      expect(getByText("Info")).toHaveAttribute("href", "/1/info")
      expect(getByText("Delete")).toHaveAttribute("href", "/1/delete")
    })
  })
})
