import { render } from "../test/testUtils"
import { initRunnerAttributes } from "../types/runner"
import { useSpendPoints } from "./useSpendPoints"

describe("useSpendPoints hook", () => {
  const setup = () => {
    const Test = () => {
      const [adjust, points] = useSpendPoints(1, 2, initRunnerAttributes)

      return (
        <>
          <p>adjustment: {adjust}</p>
          <p>points: {points}</p>
        </>
      )
    }

    return render(<Test />)
  }

  it("should calculate how many points are left", () => {
    const { getByText } = setup()

    expect(getByText("adjustment: 1")).toBeInTheDocument()
    expect(getByText("points: 2")).toBeInTheDocument()
  })
})
