import React from "react"
import { RunnerAccess } from "./runnerAccess"
import { render, screen } from "@testing-library/react"
import { mockedRunners } from "../test/mocks"
import { withTestRouter } from "../test/testUtils"

const mockUpdateToIDB = jest.fn()
const mockedRunner = mockedRunners[0]
jest.mock("react-indexed-db", () => ({
  useIndexedDB: () => ({
    update: mockUpdateToIDB,
    getByID: () => Promise.resolve(mockedRunner),
  }),
}))

describe("<RunnerAccess/>", () => {
  const setup = () => {
    return render(
      withTestRouter(
        <RunnerAccess>
          {({ runner, update }) => (
            <>
              <p>{runner.name}</p>
              <button onClick={() => update(runner)}>save</button>
            </>
          )}
        </RunnerAccess>,
        { query: { id: "1701" } }
      )
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
