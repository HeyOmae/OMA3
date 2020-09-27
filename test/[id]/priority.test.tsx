import { PriorityPage } from "../../pages/[id]/priority"
import { render, withTestRouter } from "../testUtils"

describe("Priority Page", () => {
  const setup = () => {
    return render(withTestRouter(<PriorityPage />, { query: { id: "1" } }))
  }

  xit("should exist", () => {
    const { getByText } = setup()

    expect(getByText("Priority Table")).toBeInTheDocument()
  })
})
