import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import { imagingMods } from "@/data/mods"
import ImagingMods from "."

describe("ImagingMods", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(withTestRouter(<ImagingMods />, { query: { id: "10" } }))
  }
  it("should display a list of imaging mods", async () => {
    const { getByText } = setup()

    await waitFor(() => expect(getByText("Name")).toBeInTheDocument())
    imagingMods.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
