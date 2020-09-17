import React from "react"
import { AllRunnersAccess } from "./index"
import { render, screen } from "@testing-library/react"
import { Runner } from "../../types/runner"
import { mockedRunners } from "../../test/mocks"

const mockAddToIDB = jest.fn()

jest.mock("react-indexed-db", () => ({
  useIndexedDB: () => ({
    add: mockAddToIDB,
    getAll: () => Promise.resolve(mockedRunners),
  }),
}))

describe("<AllRunnersAccess/>", () => {
  const setup = () => {
    return render(
      <AllRunnersAccess>
        {({ runners, add }) => (
          <ul>
            {runners.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
            <li>
              <button onClick={() => add(new Runner())}>Add Runner</button>
            </li>
          </ul>
        )}
      </AllRunnersAccess>
    )
  }
  it("should return a list of runners", async () => {
    const { getByText } = setup()

    expect(await screen.findByText("Bull")).toBeInTheDocument()

    mockedRunners.forEach(({ name }) => {
      getByText(name)
    })
  })

  it("should be able to add a new runner", async () => {
    const { getByText } = setup()

    expect(await screen.findByText("Bull")).toBeInTheDocument()

    getByText("Add Runner").click()

    expect(mockAddToIDB).toHaveBeenCalledWith(new Runner())
  })
})
