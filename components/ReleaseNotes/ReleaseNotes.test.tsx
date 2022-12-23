import { render, waitFor, userEvent } from "@/test/testUtils"
import ReleaseNotes from "./index"
import { rest } from "msw"
import { githubApiResponse } from "./githubApi.mock"

describe("<ReleaseNotes/>", () => {
  const setup = () => {
    rest.get(
      "https://api.github.com/repos/HeyOmae/OMA3/releases",
      (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(githubApiResponse))
      },
    )
    return render(<ReleaseNotes />)
  }
  it("should display the version, release name, and link to the release", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("3.6.1")).toBeInTheDocument()
    })

    expect(getByText("Add Lifestyles")).toBeInTheDocument()
    expect(getByText("3.6.1").closest("a")).toHaveAttribute(
      "href",
      "https://api.github.com/repos/HeyOmae/OMA3/releases/86888694",
    )
  })

  it("should support pagination", async () => {
    const { getByText, queryByText, getByLabelText } = setup()

    await waitFor(() => {
      expect(getByText("3.6.1")).toBeInTheDocument()
    })

    // This make sure we are **NOT** on the second page
    expect(queryByText("3.5.1")).not.toBeInTheDocument()

    await userEvent.click(getByLabelText("Go to next page"))

    // This make sure we're on the second page
    expect(getByText("3.5.1")).toBeInTheDocument()

    await userEvent.selectOptions(getByLabelText("rows per page"), "10")

    // This should have both page 1 and 2 displayed at the same time now
    expect(getByText("3.6.1")).toBeInTheDocument()
    expect(getByText("3.5.1")).toBeInTheDocument()
  })
})
