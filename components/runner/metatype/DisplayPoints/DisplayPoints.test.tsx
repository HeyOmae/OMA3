import { DisplayPoints, Props } from "./"
import { render, searchRegexInNodes } from "../../../../test/testUtils"
import { mockedRunners } from "../../../../test/mocks"
describe("DisplayPoints", () => {
  const setup = (props: Props = { runner: mockedRunners[2] }) =>
    render(<DisplayPoints {...props} />)
  it("should display the number of adjustment points and attribute points to spend", async () => {
    const { getByText } = setup()

    expect(
      getByText(searchRegexInNodes(/Adjustment Points4/))
    ).toBeInTheDocument()

    expect(
      getByText(searchRegexInNodes(/Attribute Points12/))
    ).toBeInTheDocument()
  })

  it("should display what points are left", () => {
    const { getByText } = setup({
      runner: {
        ...mockedRunners[2],
        attributes: {
          ...mockedRunners[2].attributes,
          Body: { adjustment: 1, points: 2 },
          Strength: { adjustment: 2, points: 1 },
          Logic: { adjustment: 0, points: 2 },
        },
      },
    })

    expect(
      getByText(searchRegexInNodes(/Adjustment Points1/))
    ).toBeInTheDocument()
    expect(
      getByText(searchRegexInNodes(/Attribute Points7/))
    ).toBeInTheDocument()
  })

  it("should give highlight negative points as bad-stuff", () => {
    const { getByText } = setup({
      runner: {
        ...mockedRunners[2],
        attributes: {
          ...mockedRunners[2].attributes,
          Body: { adjustment: 1, points: 9 },
          Strength: { adjustment: 2, points: 3 },
          Logic: { adjustment: 2, points: 2 },
        },
      },
    })

    expect(getByText("-1")).toHaveClass("bad-stuff")
    expect(getByText("-2")).toHaveClass("bad-stuff")
  })
})
