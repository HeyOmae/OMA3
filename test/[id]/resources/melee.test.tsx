import MeleePage from "../../../pages/[id]/resources/melee"
import {
  render,
  withTestRouter,
  waitFor,
  setupIndexedDB,
} from "../../testUtils"
import MeleeData from "../../../data/melee"

describe("Melee Page", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<MeleePage />, { query: { id: "8" } }))
  it("should display the melee weapons", async () => {
    const { getByText } = setup()

    expect(getByText("Melee Weapons")).toBeInTheDocument()
    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })
    MeleeData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
