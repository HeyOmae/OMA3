import React from "react"
import { Delete } from "./"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "../../../test/testUtils"

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
    ).toBe(3)

    getByText("Retire Runner").click()

    await waitFor(() => {
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records.length
      ).toBe(2)
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records[0].value.id
      ).toBe(2)
    })

    await waitFor(() => {
      expect(push).toBeCalledWith("/")
    })
  })
})
