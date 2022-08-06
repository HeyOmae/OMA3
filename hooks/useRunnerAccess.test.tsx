import { mockedRunners } from "../test/mocks"
import {
  render,
  setupIndexedDB,
  withTestRouter,
  screen,
  waitFor,
  runnerFromDB,
} from "../test/testUtils"
import { useRunnerAccess } from "./useRunnerAccess"

describe("useRunnerAccess hook", () => {
  beforeAll(setupIndexedDB)
  const UPDATE_NAME = Symbol("updateName")
  const setup = () => {
    const Test = () => {
      const [runner, dispatch] = useRunnerAccess<string>(
        (state, { type, payload }) => {
          switch (type) {
            case UPDATE_NAME:
              return { ...state, name: payload }

            default:
              return state
          }
        },
      )

      return runner ? (
        <div>
          <p>{runner.name}</p>
          <button
            onClick={() =>
              dispatch({
                type: UPDATE_NAME,
                payload: "William “Bull” MacCallister",
              })
            }
          >
            update name
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )
    }
    return render(withTestRouter(<Test />, { query: { id: "1" } }))
  }

  it("should get the runner data from indexedDb", async () => {
    setup()

    await waitFor(() => {
      expect(screen.getByText("Bull")).toBeInTheDocument()
    })
  })

  it("should not do bad stuff if component is unmounted while getting runner from indexedDB", () => {
    const { getByText, unmount } = setup()

    expect(getByText("Loading...")).toBeInTheDocument()
    unmount()
    // There should be a big ugly error log in the console if this test fails
  })

  it("should update indexedDb when there are changes made to the runner", async () => {
    const { getByText } = setup()

    await waitFor(() => expect(getByText("Bull")).toBeInTheDocument())

    expect(runnerFromDB().name).toEqual("Bull")
    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records.length,
    ).toBe(mockedRunners.length)

    getByText("update name").click()

    await waitFor(() => {
      expect(getByText("William “Bull” MacCallister")).toBeInTheDocument()
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records.length,
      ).toBe(mockedRunners.length)
      expect(runnerFromDB().name).toEqual("William “Bull” MacCallister")
    })
  })
})
