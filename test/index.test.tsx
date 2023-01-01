import React from "react"
import {
  render,
  screen,
  setupIndexedDB,
  withTestRouter,
  waitFor,
  userEvent,
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

    await waitFor(() => {
      expect(screen.getByText("Bull")).toBeInTheDocument()
    })

    mockedRunners.forEach(({ name, id }) => {
      expect(getByText(name || id)).toHaveAttribute("href", `/${id}/info`)
    })
  })

  it("should add a new runner to the indexed db", async () => {
    const { getByText, push } = setup()

    await waitFor(() => {
      expect(screen.getByText("Create Runner")).toBeInTheDocument()
    })

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records.length,
    ).toEqual(mockedRunners.length)

    await userEvent.click(getByText("Create Runner"))

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
