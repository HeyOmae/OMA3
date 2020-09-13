import React from "react"
import { render, fireEvent } from "./testUtils"
import { Home } from "../pages/index"

const mockAddToIDB = jest.fn()
jest.mock("react-indexed-db", () => ({
  useIndexedDB: () => ({ add: mockAddToIDB }),
}))

describe("Home page", () => {
  it("clicking button triggers alert", () => {
    const { getByText } = render(<Home />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText("Test Button"))
    expect(window.alert).toHaveBeenCalledWith("With typescript and Jest")
  })

  xit("should add a new runner to the indexed db", () => {
    const { getByText } = render(<Home />)
    fireEvent.click(getByText("Create Runner"))

    expect(mockAddToIDB).toHaveBeenCalled()
  })
})
