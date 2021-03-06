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
import { mockedRunners } from "./mocks"

describe("Home page", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    const push = jest.fn()

    return {
      ...render(
        withTestRouter(<Home />, { push, pathname: "/[id]", asPath: "/4" }),
      ),
      push,
    }
  }

  it("should load a list of runners", async () => {
    const { getByText } = setup()

    expect(await screen.findByText("Bull")).toBeInTheDocument()

    mockedRunners.forEach(({ name, id }) => {
      expect(getByText(name)).toHaveAttribute("href", `/${id}/info`)
    })
  })

  it("should add a new runner to the indexed db", async () => {
    const { getByText, push } = setup()

    expect(await screen.findByText("Create Runner")).toBeInTheDocument()

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records.length,
    ).toEqual(mockedRunners.length)

    fireEvent.click(getByText("Create Runner"))

    await waitFor(() =>
      expect(push).toHaveBeenCalledWith(
        "/[id]/info",
        `/${mockedRunners.length + 1}/info`,
      ),
    )

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records.length,
    ).toEqual(mockedRunners.length + 1)
  })

  it("should not display the id if there is no name", async () => {
    const { getByText } = setup()
    const runnerId = mockedRunners.length + 1

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records.length,
    ).toEqual(runnerId)

    await waitFor(() =>
      expect(getByText(runnerId.toString())).toHaveAttribute(
        "href",
        `/${runnerId}/info`,
      ),
    )
  })
})
