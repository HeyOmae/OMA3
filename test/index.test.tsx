import {
  render,
  screen,
  setupIndexedDB,
  withTestRouter,
  waitFor,
  userEvent,
} from "./testUtils"
import { Home } from "@/pages/index"
import { mockedRunners } from "./mocks"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { githubApiResponse } from "@/components/ReleaseNotes/githubApi.mock"

describe("Home page", () => {
  const server = setupServer(
    rest.get(
      "https://api.github.com/repos/HeyOmae/OMA3/releases",
      (req, res, ctx) => res(ctx.status(200), ctx.json(githubApiResponse)),
    ),
  ) // Establish API mocking before all tests.
  beforeAll(() => server.listen())
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers())
  // Clean up after the tests are finished.
  afterAll(() => server.close())
  beforeAll(setupIndexedDB)
  const setup = () => {
    const user = userEvent.setup()
    const push = jest.fn()
    render(withTestRouter(<Home />, { push, pathname: "/[id]", asPath: "/4" }))
    return {
      user,
      push,
    }
  }

  it("should load a list of runners", async () => {
    setup()

    await waitFor(() => {
      expect(screen.getByText("Bull")).toBeInTheDocument()
    })

    mockedRunners.forEach(({ name, id }) => {
      expect(screen.getByText(name || id)).toHaveAttribute(
        "href",
        `/${id}/info`,
      )
    })
  })

  it("should add a new runner to the indexed db", async () => {
    const { user, push } = setup()

    expect(
      await screen.findByRole("button", { name: "Create Runner" }),
    ).toBeInTheDocument()

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records.length,
    ).toEqual(mockedRunners.length)

    await user.click(screen.getByText("Create Runner"))

    await waitFor(() =>
      expect(push).toHaveBeenCalledWith(
        "/[id]/info",
        `/${mockedRunners.length + 1}/info`,
      ),
    )

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records.length,
    ).toEqual(mockedRunners.length + 1)
  })

  it("should not display the id if there is no name", async () => {
    setup()
    const runnerId = mockedRunners.length + 1

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records.length,
    ).toEqual(runnerId)

    await waitFor(() =>
      expect(screen.getByText(runnerId.toString())).toHaveAttribute(
        "href",
        `/${runnerId}/info`,
      ),
    )
  })

  test("download runner", async () => {
    const { user } = setup()

    await user.click(
      await screen.findByRole("button", { name: "Open Download for Bull" }),
    )

    expect(screen.getByRole("textbox", { name: "Bull" })).toHaveValue(
      JSON.stringify(mockedRunners[0]),
    )
  })

  test("fail to upload same runner", async () => {
    const { user } = setup()

    await user.click(
      await screen.findByRole("button", { name: "Upload Runner" }),
    )
    await user.click(
      screen.getByRole("textbox", { name: "Copy Runner JSON here" }),
    )
    await user.keyboard(
      JSON.stringify(mockedRunners[0]).replace(
        /[{]/g,
        (match) => match + match,
      ),
    )
    await user.click(screen.getByRole("button", { name: "Add Runner" }))

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "ConstraintError: A mutation operation in the transaction failed because a constraint was not satisfied. For example, an object such as an object store or index already exists and a request attempted to create a new one.",
    )
  })

  test("upload a runner with an id that is already used", async () => {
    const { user, push } = setup()

    await user.click(
      await screen.findByRole("button", { name: "Upload Runner" }),
    )
    await user.click(
      screen.getByRole("textbox", { name: "Copy Runner JSON here" }),
    )

    await user.keyboard(
      '{{"name": "Turbobunny", "description": "Nova hot latina rigger", "id": 3}',
    )
    await user.click(screen.getByRole("button", { name: "Add Runner" }))

    expect(push).toHaveBeenCalledWith(
      "/[id]/info",
      `/${mockedRunners.length + 2}/info`,
    )
  })
})
