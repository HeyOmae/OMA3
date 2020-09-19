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
      const [runner, dispatch] = useRunnerAccess((state, { type, payload }) => {
        switch (type) {
          case "updateName":
            return { ...state, name: payload }

          default:
            return state
        }
      })

      return runner ? (
        <div>
          <p>{runner.name}</p>
          <button
            onClick={() =>
              dispatch({
                type: "updateName",
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

    expect(await screen.findByText("Bull")).toBeInTheDocument()
  })

  describe("reducer", () => {
    it("should update a field on the object", async () => {
      const { getByText } = setup()

      await waitFor(() => expect(getByText("Bull")).toBeInTheDocument())
      // expect(
      //   indexedDB._databases.get("omae").rawObjectStores.get("runners").records
      //     .records[0].value.name
      // ).toEqual("Bull")

      await waitFor(() => getByText("update name").click())

      await waitFor(() =>
        expect(getByText("William “Bull” MacCallister")).toBeInTheDocument()
      )

      // await waitFor(() =>
      //   expect(
      //     indexedDB._databases.get("omae").rawObjectStores.get("runners").records
      //       .records[0].value.name
      //   ).toEqual("William “Bull” MacCallister")
      // )
    })
  })
})
