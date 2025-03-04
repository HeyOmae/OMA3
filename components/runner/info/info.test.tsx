import {
  render,
  withTestRouter,
  setupIndexedDB,
  waitFor,
  runnerFromDB,
} from "../../../test/testUtils"
import { Info } from "./"
import { fireEvent } from "@testing-library/react"
import { mockedRunners } from "../../../test/mocks"

describe("<Info/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(
      withTestRouter(<Info />, {
        pathname: "/[id]",
        asPath: "/1",
        query: { id: "1" },
      }),
    )
  }

  it("should populate the name and description from IndexedDb", async () => {
    const { getByLabelText } = setup()

    await waitFor(() => {
      expect(getByLabelText("Runner's name *")).toHaveValue("Bull")
      expect(getByLabelText("Runner's description")).toHaveValue(
        "The best ork decker you never met.",
      )
    })
  })

  it("should update the indexedDb after an input loses focus", async () => {
    const { getByLabelText } = setup()

    await waitFor(() => {
      expect(getByLabelText("Runner's name *")).toHaveValue("Bull")
      expect(getByLabelText("Runner's description")).toHaveValue(
        "The best ork decker you never met.",
      )
    })

    fireEvent.change(getByLabelText("Runner's name *"), {
      target: { value: "William “Bull” MacCallister" },
    })
    await waitFor(() => {
      expect(getByLabelText("Runner's name *")).toHaveValue(
        "William “Bull” MacCallister",
      )
    })
    fireEvent.blur(getByLabelText("Runner's name *"))

    await waitFor(() => {
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records.length,
      ).toBe(mockedRunners.length)
      expect(runnerFromDB().name).toEqual("William “Bull” MacCallister")
    })

    fireEvent.change(getByLabelText("Runner's description"), {
      target: {
        value:
          "Retired runner. Working as a fixer in the Ork Underground in Seattle.",
      },
    })
    fireEvent.blur(getByLabelText("Runner's description"))

    waitFor(() => {
      expect(runnerFromDB().description).toEqual(
        "Retired runner. Working as a fixer in the Ork Underground in Seattle.",
      )
    })
  })
})
