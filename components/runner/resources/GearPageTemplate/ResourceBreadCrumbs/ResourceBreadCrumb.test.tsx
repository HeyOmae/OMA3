import { render, withTestRouter } from "@/test/testUtils"
import { ResourceBreadCrumbs, Props } from "."

describe("<ResourceBreadCrumbs/>", () => {
  const setup = (props: Props) => {
    return render(
      withTestRouter(<ResourceBreadCrumbs {...props} />, {
        query: { id: "1" },
      }),
    )
  }
  it("should have links to the resource page", () => {
    const { getByText } = setup({ activePage: "Melee Weapons" })

    expect(getByText("Resources")).toHaveAttribute("href", "/1/resources")
    expect(getByText("Melee Weapons")).toBeInTheDocument()
  })
})
