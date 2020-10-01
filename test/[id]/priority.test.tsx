import { PriorityPage } from "../../pages/[id]/priority"
import { render, withTestRouter, waitFor, setupIndexedDB } from "../testUtils"

describe("Priority Page", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(withTestRouter(<PriorityPage />, { query: { id: "1" } }))
  }

  it("should exist", async () => {
    const { getByText } = setup()

    expect(getByText("Priority Table")).toBeInTheDocument()

    await waitFor(() => {
      expect(getByText("Metatype")).toBeInTheDocument()
      expect(getByText("Attributes")).toBeInTheDocument()
      expect(getByText("Skills")).toBeInTheDocument()
      expect(getByText("Mag/Res")).toBeInTheDocument()
      expect(getByText("Resources")).toBeInTheDocument()
    })
  })
})
