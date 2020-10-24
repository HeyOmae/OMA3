import React from "react"
import { Delete } from "./"
import {
  render,
  runnerFromDB,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "../../../test/testUtils"
import { mockedRunners } from "../../../test/mocks"

describe("<Delete/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    const push = jest.fn()
    return {
      ...render(withTestRouter(<Delete />, { query: { id: "1" }, push })),
      push,
    }
  }

  it("should delete a runner", async () => {
    const { getByText, push } = setup()

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records.length
    ).toBe(mockedRunners.length)

    getByText("Retire Runner").click()

    await waitFor(() => {
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records.length
      ).toBe(mockedRunners.length - 1)
      expect(runnerFromDB().id).toBe(2)
    })

    await waitFor(() => {
      expect(push).toBeCalledWith("/")
    })
  })
})
