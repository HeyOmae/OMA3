import { render, userEvent, screen } from "@/test/testUtils"
import ReleaseNotes from "./index"
import { githubApiResponse } from "./githubApi.mock"
import { rest } from "msw"
import { setupServer } from "msw/node"

describe("<ReleaseNotes/>", () => {
  let isSuccessful = true
  const server = setupServer(
    rest.get(
      "https://api.github.com/repos/HeyOmae/OMA3/releases",
      (req, res, ctx) =>
        res(
          ctx.status(isSuccessful ? 200 : 403),
          ctx.json(isSuccessful ? githubApiResponse : "Forbidden"),
        ),
    ),
  ) // Establish API mocking before all tests.
  beforeAll(() => server.listen())
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers())
  // Clean up after the tests are finished.
  afterAll(() => server.close())
  const setup = () => render(<ReleaseNotes />)
  it("should display the version, release name, and link to the release", async () => {
    setup()

    expect(await screen.findByText("3.6.1")).toBeInTheDocument()

    expect(screen.getByText("Add Lifestyles")).toBeInTheDocument()
    expect(screen.getByText("3.6.1").closest("a")).toHaveAttribute(
      "href",
      "https://github.com/HeyOmae/OMA3/releases/tag/3.6.1",
    )
  })

  it("should support pagination", async () => {
    setup()

    expect(await screen.findByText("3.6.1")).toBeInTheDocument()

    // This make sure we are **NOT** on the second page
    expect(screen.queryByText("3.5.1")).not.toBeInTheDocument()

    await userEvent.click(screen.getByLabelText("Go to next page"))

    // This make sure we're on the second page
    expect(screen.getByText("3.5.1")).toBeInTheDocument()

    await userEvent.selectOptions(screen.getByLabelText("rows per page"), "10")

    // This should have both page 1 and 2 displayed at the same time now
    expect(await screen.findByText("3.6.1")).toBeInTheDocument()
    expect(screen.getByText("3.5.1")).toBeInTheDocument()
  })

  test("when api fails", async () => {
    isSuccessful = false

    setup()

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Error loading release notes",
    )
    isSuccessful = true
  })
})
