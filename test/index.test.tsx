import React from "react"
import { render, fireEvent, screen, setupIndexedDB } from "./testUtils"
import { Home } from "../pages/index"
import { Runner } from "../types/runner"
import { initDB } from "react-indexed-db"

const mockAddToIDB = jest.fn(() => Promise.resolve(new Runner()))
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
// jest.mock("next/dynamic", () => () => ({ children }) =>
//   children({ runners: mockedRunners, add: mockAddToIDB })
// )

describe("Home page", () => {
  beforeAll((done) => {
    initDB({
      name: "omae",
      version: 1,
      objectStoresMeta: [
        {
          store: "runners",
          storeConfig: { keyPath: "id", autoIncrement: true },
          storeSchema: [
            { name: "name", keypath: "name", options: { unique: true } },
            {
              name: "description",
              keypath: "description",
              options: { unique: false },
            },
          ],
        },
      ],
    })

    setupIndexedDB(done, { payload: mockedRunners })
  })
  xit("clicking button triggers alert", () => {
    const { getByText } = render(<Home />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText("Test Button"))
    expect(window.alert).toHaveBeenCalledWith("With typescript and Jest")
  })

  it("should load a list of runners", async () => {
    const { getByText } = render(<Home />)

    expect(await screen.findByText("Bull")).toBeInTheDocument()

    mockedRunners.forEach(({ name }) => {
      expect(getByText(name)).toBeTruthy()
    })
  })

  xit("should add a new runner to the indexed db", async (done) => {
    const { getByText } = render(<Home />)
    expect(await screen.findByText("Create Runner")).toBeInTheDocument()

    fireEvent.click(getByText("Create Runner"))

    expect(mockAddToIDB).toHaveBeenCalledWith(new Runner())
    done()
  })
})
