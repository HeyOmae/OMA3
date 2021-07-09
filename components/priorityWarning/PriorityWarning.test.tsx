import { PriorityWarning, Props } from "./"
import { render, withTestRouter } from "../../test/testUtils"

describe("<Priority Warning", () => {
  const setup = (props: Props = { requirement: "metatype" }) =>
    render(
      withTestRouter(<PriorityWarning {...props} />, { query: { id: "2" } }),
    )
  it("should let the user known that the priority needs to be set", () => {
    const { getByText } = setup()
    expect(
      getByText("You need to set the metatype priority"),
    ).toBeInTheDocument()
  })

  it("should have a link to the priority table", () => {
    const { getByText } = setup()

    expect(getByText("Go to Priority Table").closest("a")).toHaveAttribute(
      "href",
      "/2/priority",
    )
  })
})
