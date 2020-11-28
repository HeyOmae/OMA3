import { render, withTestRouter } from "../testUtils"
import ResourcePage from "../../pages/[id]/resources"
import { waitFor } from "@testing-library/react"

describe("Resource Page", () => {
  const setup = () =>
    render(
      withTestRouter(<ResourcePage />, {
        query: { id: "1" },
        pathname: "/1/resources",
      }),
    )

  it("should exist", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Resources")).toBeInTheDocument()
    })

    expect(getByText("weapons").closest("a")).toHaveAttribute(
      "href",
      "/1/resources/weapons",
    )
  })
})
