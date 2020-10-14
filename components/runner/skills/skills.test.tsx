import React from "react"
import Skills from "."
import {
  render,
  withTestRouter,
  setupIndexedDB,
  waitFor,
} from "../../../test/testUtils"

describe("<Skills/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(withTestRouter(<Skills />, { query: { id: "3" } }))
  }

  // placeholder test, remove later, this is stupid in retrospective
  it("should get the runner data", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      getByText("FastJack").click()
      expect(getByText("FastJack")).toBeInTheDocument()
    })
  })
})
