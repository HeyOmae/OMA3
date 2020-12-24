import FirearmsPage from "../../../pages/[id]/resources/firearms"
import { render, setupIndexedDB, withTestRouter } from "../../testUtils"
import FirearmsData from "../../../data/firearms"

describe("Firearms Page", () => {
  beforeAll(setupIndexedDB)

  const setup = () =>
    render(withTestRouter(<FirearmsPage />, { query: { id: "1" } }))

  it("should display firearms", async () => {
    const { getByText } = setup()

    expect(getByText("Firearms")).toBeInTheDocument()

    FirearmsData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
