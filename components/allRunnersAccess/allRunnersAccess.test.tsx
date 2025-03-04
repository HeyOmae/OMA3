import { AllRunnersAccess } from "./index"
import { render, screen, waitFor } from "@testing-library/react"
import { initRunner } from "@/types/runner"
import { mockedRunners } from "@/test/mocks"

const mockAddToIDB = jest.fn()

jest.mock("react-indexed-db-hook", () => ({
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
              <li key={id}>{name || id}</li>
            ))}
            <li>
              <button onClick={() => add(initRunner)}>Add Runner</button>
            </li>
          </ul>
        )}
      </AllRunnersAccess>,
    )
  }
  it("should return a list of runners", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(screen.getByText("Bull")).toBeInTheDocument()
    })

    mockedRunners.forEach(({ name, id }) => {
      expect(getByText(name || id)).toBeInTheDocument()
    })
  })

  it("should be able to add a new runner", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(screen.getByText("Bull")).toBeInTheDocument()
    })

    getByText("Add Runner").click()

    expect(mockAddToIDB).toHaveBeenCalledWith(initRunner)
  })
})
