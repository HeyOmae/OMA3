import React from "react"
import {
  render,
  withTestRouter,
  setupIndexedDB,
  waitFor,
  screen,
} from "../testUtils"
import { Info } from "../../pages/[id]/info"
import { fireEvent } from "@testing-library/react"

describe("info page", () => {
  beforeAll((done) => {
    setupIndexedDB(done)
  })
  const setup = () => {
    return render(
      withTestRouter(<Info />, {
        pathname: "/[id]",
        asPath: "/1",
        query: { id: "1" },
      })
    )
  }

  xit("should populate the name and description from IndexedDb", async () => {
    const { getByLabelText } = setup()

    await waitFor(() => {
      // expect(screen.getByLabelText("Runner's name *")).toHaveValue("Bull")
      expect(getByLabelText("Runner's name *")).toHaveValue("Bull")
      //   expect(getByLabelText("Runner's description")).toHaveValue(
      //     "The best ork decker you never met."
      //   )
    })
  })

  xit("should update the indexedDb after an input loses focus", async () => {
    const { getByLabelText } = setup()

    await waitFor(() => {
      expect(getByLabelText("Runner's name *")).toHaveValue("Bull")
      expect(getByLabelText("Runner's description")).toHaveValue(
        "The best ork decker you never met."
      )
    })

    fireEvent.change(getByLabelText("Runner's name *"), {
      target: { value: "William “Bull” MacCallister" },
    })
    fireEvent.blur(getByLabelText("Runner's name *"))
    // console.log(
    //   indexedDB._databases.get("omae").rawObjectStores.get("runners").records
    //     .records
    // )
    await waitFor(() => {
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records[0].value.name
      ).toEqual("William “Bull” MacCallister")
    })
  })
})
