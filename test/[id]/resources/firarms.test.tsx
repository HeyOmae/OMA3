import FirearmsPage from "../../../pages/[id]/resources/firearms"
import { render, setupIndexedDB, withTestRouter } from "../../testUtils"

describe("Firearms Page", () => {
  beforeAll(setupIndexedDB)

  const setup = () =>
    render(withTestRouter(<FirearmsPage />, { query: { id: "1" } }))

  it("should display firearms", async () => {
    const { getByText } = setup()

    expect(getByText("Firearms")).toBeInTheDocument()
  })
})
