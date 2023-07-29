import { RemainingNuyen, Props } from "."
import { caymansCurrentlySpentNuyen, render, screen } from "@/test/testUtils"
import { mockedRunners } from "@/test/mocks"

describe("<RemainingNuyen/>", () => {
  const setup = ({ runner = mockedRunners[9] }: Partial<Props> = {}) => {
    const props: Props = {
      runner,
    }
    return render(<RemainingNuyen {...props} />)
  }

  it("should display the max nuyen if there are not resources purchased yet", () => {
    setup({ runner: mockedRunners[8] })
    expect(
      screen.getByRole("definition", { name: "Nuyen Value" }),
    ).toHaveTextContent("8000¥/8000¥")
  })

  it("should display total nuyen and remaining nuyen", () => {
    setup()

    expect(screen.getByRole("term", { name: "Nuyen" })).toHaveTextContent(
      "Nuyen:",
    )
    expect(
      screen.getByRole("definition", { name: "Nuyen Value" }),
    ).toHaveTextContent(`${caymansCurrentlySpentNuyen}¥/275000¥`)
  })

  test("in debt raises max nuyen by 5000¥", () => {
    setup({ runner: mockedRunners[3] })

    expect(
      screen.getByRole("definition", { name: "Nuyen Value" }),
    ).toHaveTextContent("455000")
  })
})
