import { cyberware } from "@/data/cyberware"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import Cyberware from "."

describe("<Cyberware />", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<Cyberware />, { query: { id: "9" } }))

  it("should display cyberware", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      return expect(getByText("Buy")).toBeInTheDocument()
    })

    expect(getByText("Essence")).toBeInTheDocument()
    expect(getByText(6)).toBeInTheDocument()

    cyberware.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
