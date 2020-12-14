import { render } from "../../../../test/testUtils"
import { ResourceBreadCrumbs, Props } from "."

describe("<ResourceBreadCrumbs/>", () => {
  const setup = (props: Props) => {
    return render(<ResourceBreadCrumbs {...props} />)
  }
  it("should have links to the resource page", () => {
    const { getByText } = setup({ activePage: "Melee Weapons" })

    expect(getByText("Resources")).toHaveAttribute("href", "/")
    expect(getByText("Melee Weapons")).toBeInTheDocument()
  })
})
