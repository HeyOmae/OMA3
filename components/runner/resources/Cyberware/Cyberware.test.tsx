import { cyberware } from "@/data/cyberware"
import {
  caymansNuyen,
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import Cyberware from "."

describe("<Cyberware />", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<Cyberware />, { query: { id: "10" } }))

  it("should display cyberware", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      return expect(getByText(caymansNuyen)).toBeInTheDocument()
    })

    cyberware.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
