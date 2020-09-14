import React from "react"
import {
  render,
  fireEvent,
  screen,
  setupIndexedDB,
  withTestRouter,
  waitFor,
} from "./testUtils"
import { Home } from "../pages/index"
import { Runner } from "../types/runner"
import { initDB } from "react-indexed-db"

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
  const setup = () => {
    const push = jest.fn()

    return {
      ...render(
        withTestRouter(<Home />, { push, pathname: "/[id]", asPath: "/4" })
      ),
      push,
    }
  }

  it("should load a list of runners", async () => {
    const { getByText } = setup()

    expect(await screen.findByText("Bull")).toBeInTheDocument()

    mockedRunners.forEach(({ name }) => {
      expect(getByText(name)).toBeTruthy()
    })
  })

  it("should add a new runner to the indexed db", async () => {
    const { getByText, push } = setup()

    expect(await screen.findByText("Create Runner")).toBeInTheDocument()

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records.length
    ).toEqual(3)

    fireEvent.click(getByText("Create Runner"))

    await waitFor(() =>
      expect(push).toHaveBeenCalledWith("/[id]/info", "/4/info")
    )

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records.length
    ).toEqual(4)
  })
})
