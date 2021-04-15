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
    return render(
      withTestRouter(<ImagingMods />, { query: { id: "10", gearIndex: "0" } }),
    )
  }
  it("should display a list of imaging mods", async () => {
    const { getAllByText } = setup()

    await waitFor(() => expect(getAllByText("Buy").length).toBeGreaterThan(0))
    imagingMods.forEach(({ name }) => {
      expect(getAllByText(name).length).toBeGreaterThan(0)
    })
  })

  it("should add a mod to a piece of gear", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())
    expect(getByText("1/3")).toBeInTheDocument()

    getByLabelText("Add Smartlink").click()

    await waitFor(() =>
      expect(getByLabelText("Remove Smartlink")).toBeInTheDocument(),
    )
    expect(getByText("3/3")).toBeInTheDocument()
  })

  it("should remove a mod from a piece of gear", async () => {
    const { getByText, getByLabelText, queryByLabelText } = setup()

    await waitFor(() => expect(getByText("Sell")).toBeInTheDocument())

    expect(getByText("3/3")).toBeInTheDocument()

    getByLabelText("Remove Image Link").click()

    expect(queryByLabelText("Remove Image Link")).not.toBeInTheDocument()

    expect(getByText("2/3")).toBeInTheDocument()
  })
})
