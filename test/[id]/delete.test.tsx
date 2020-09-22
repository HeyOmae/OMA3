import React from "react"
import { render, withTestRouter, waitFor, setupIndexedDB } from "../testUtils"
import { DeletePage } from "../../pages/[id]/delete"

describe("delete page", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(withTestRouter(<DeletePage />))
  }

  it("should have a warning message and delete button", async () => {
    const { getByText } = setup()

    expect(getByText("Do you want to delete your runner?")).toBeInTheDocument()

    await waitFor(() => {
      expect(getByText("Retire Runner")).toBeInTheDocument()
    })
  })
})
