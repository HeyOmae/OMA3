import { DisplayPoints, Props } from "./"
import { render, screen } from "@/test/testUtils"
import { mockedRunners } from "@/test/mocks"

describe("DisplayPoints", () => {
  const setup = (props: Props = { runner: mockedRunners[1] }) =>
    render(<DisplayPoints {...props} />)

  it("should display the number of adjustment points and attribute points to spend", async () => {
    setup()

    expect(
      screen.getByRole("definition", { name: "Adjustment Points Value" }),
    ).toHaveTextContent("1")
    expect(
      screen.getByRole("definition", { name: "Attribute Points Value" }),
    ).toHaveTextContent("10")
  })

  test("display karma cost", () => {
    setup()

    expect(
      screen.getByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("50")
  })

  it("should display what points are left", () => {
    setup({
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
      screen.getByRole("definition", { name: "Adjustment Points Value" }),
    ).toHaveTextContent("1")
    expect(
      screen.getByRole("definition", { name: "Attribute Points Value" }),
    ).toHaveTextContent("7")
  })

  it("should give highlight negative points as bad-stuff", () => {
    setup({
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

    expect(
      screen.getByRole("definition", { name: "Adjustment Points Value" }),
    ).toHaveTextContent("-1")
    expect(
      screen.getByRole("definition", { name: "Adjustment Points Value" }),
    ).toHaveClass("bad-stuff")
    expect(
      screen.getByRole("definition", { name: "Attribute Points Value" }),
    ).toHaveTextContent("-2")
    expect(
      screen.getByRole("definition", { name: "Attribute Points Value" }),
    ).toHaveClass("bad-stuff")
  })
})
