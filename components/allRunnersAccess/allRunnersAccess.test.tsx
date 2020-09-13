import React from "react"
import { AllRunnersAccess } from "./index"
import { render, screen } from "@testing-library/react"
import { Runner } from "../../types/runner"

const mockAddToIDB = jest.fn()
const mockedRunners: Runner[] = [
  {
    id: 1,
    name: "Bull",
    description: "The best ork decker you never met.",
  },
  {
    id: 2,
    name: "Man-of-many-names",
    description: "Not knowns by any other name",
  },
  {
    id: 3,
    name: "FastJack",
    description:
      "He was born in the 1990's and now has an AI living in his brain.",
  },
]
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
