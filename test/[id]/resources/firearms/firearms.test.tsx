import FirearmsPage from "@/pages/[id]/resources/firearms"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "../../../testUtils"
import FirearmsData from "@/data/firearms"

describe("Firearms Page", () => {
  beforeAll(setupIndexedDB)

  const setup = () =>
    render(withTestRouter(<FirearmsPage />, { query: { id: "8" } }))

  it("should display firearms", async () => {
    const { getByText } = setup()

    expect(getByText("Firearms")).toBeInTheDocument()

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })
    FirearmsData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
