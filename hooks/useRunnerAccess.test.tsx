import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  screen,
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
})
