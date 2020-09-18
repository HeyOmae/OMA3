import {
  render,
  setupIndexedDB,
  withTestRouter,
  screen,
  waitFor,
} from "../test/testUtils"
import { useRunnerAccess } from "./useRunnerAccess"

describe("useRunnerAccess hook", () => {
  beforeAll((done) => {
    setupIndexedDB(done)
  })
  const setup = () => {
    const Test = () => {
      const [runner, updateRunner] = useRunnerAccess()

      return runner ? (
        <div>
          <p>{runner.name}</p>
          <button
            onClick={() =>
              updateRunner({ ...runner, name: "William “Bull” MacCallister" })
            }
          >
            update
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )
    }
    return render(withTestRouter(<Test />, { query: { id: "1" } }))
  }

  it("should get the runner data", async () => {
    setup()

    expect(await screen.findByText("Bull")).toBeInTheDocument()
  })

  it("should update indexedDb", async () => {
    const { getByText } = setup()

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records[0].value.name
    ).toEqual("Bull")

    await waitFor(() => getByText("update").click())

    await waitFor(() =>
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records[0].value.name
      ).toEqual("William “Bull” MacCallister")
    )
  })
})
