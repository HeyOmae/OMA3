import {
  render,
  runnerFromDB,
  setupIndexedDB,
  userEvent,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import { imagingMods } from "@/data/mods"
import ImagingMods from "."

describe("ImagingMods", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "10") => {
    return render(
      withTestRouter(<ImagingMods />, { query: { id, gearIndex: "0" } }),
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
    expect(runnerFromDB(9).resources.imaging[0].mods).toHaveLength(1)

    await userEvent.click(getByLabelText("Add Smartlink"))

    await waitFor(() =>
      expect(getByLabelText("Remove Smartlink")).toBeInTheDocument(),
    )
    expect(getByText("3/3")).toBeInTheDocument()
    await waitFor(() =>
      expect(runnerFromDB(9).resources.imaging[0].mods).toHaveLength(2),
    )
  })

  it("should remove a mod from a piece of gear", async () => {
    const { getByText, getByLabelText, queryByLabelText } = setup()

    await waitFor(() => expect(getByText("Sell")).toBeInTheDocument())

    expect(getByText("3/3")).toBeInTheDocument()
    expect(runnerFromDB(9).resources.imaging[0].mods).toHaveLength(2)

    await userEvent.click(getByLabelText("Remove Image Link"))

    expect(queryByLabelText("Remove Image Link")).not.toBeInTheDocument()

    expect(getByText("2/3")).toBeInTheDocument()
    await waitFor(() =>
      expect(runnerFromDB(9).resources.imaging[0].mods).toHaveLength(1),
    )
  })

  it("should create the mods for an unmodified piece of gear", async () => {
    const { getByLabelText } = setup("11")

    expect(runnerFromDB(10).resources.imaging[0].mods).toBeUndefined()

    await waitFor(() =>
      expect(getByLabelText("Add Low Light Vision")).toBeInTheDocument(),
    )

    await userEvent.click(getByLabelText("Add Low Light Vision"))

    await waitFor(() =>
      expect(runnerFromDB(10).resources.imaging[0].mods[0].name).toBe(
        "Low Light Vision",
      ),
    )
  })
})
