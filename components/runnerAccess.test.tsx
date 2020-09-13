import React from "react"
import { RunnerAccess } from "./runnerAccess"
import { render, screen } from "@testing-library/react"
import { RouterContext } from "next/dist/next-server/lib/router-context"
import { createRouter } from "next/router"

const mockUpdateToIDB = jest.fn()
const mockedRunner = {
  name: "Bull",
  description: "The best ork decker you never met.",
}
jest.mock("react-indexed-db", () => ({
  useIndexedDB: () => ({
    update: mockUpdateToIDB,
    getByID: () => Promise.resolve(mockedRunner),
  }),
}))

describe("<DbAccess/>", () => {
  const router = createRouter("", { id: "1701" }, "", {
    subscription: jest.fn(),
    wrapApp: jest.fn(),
    isFallback: false,
    initialProps: {},
    pageLoader: {},
    Component: jest.fn(),
    initialStyleSheets: [],
    App: jest.fn(),
  })
  const setup = () => {
    return render(
      <RouterContext.Provider value={router}>
        <RunnerAccess>
          {({ runner, update }) => (
            <>
              <p>{runner.name}</p>
              <button onClick={() => update(runner)}>save</button>
            </>
          )}
        </RunnerAccess>
      </RouterContext.Provider>
    )
  }

  it("should get the runner data and pass it down", async () => {
    setup()

    expect(await screen.findByText(/Bull/i)).toBeInTheDocument()
  })

  it("should update with the runner object", async () => {
    const { getByText } = setup()

    expect(await screen.findByText(/Bull/i)).toBeInTheDocument()

    getByText("save").click()
    expect(mockUpdateToIDB).toHaveBeenCalledWith(mockedRunner)
  })
})
