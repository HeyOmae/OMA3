import {
  render,
  runnerFromDB,
  setupIndexedDB,
  SliderHelper,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import { audioMods } from "@/data/mods"
import AudioMods from "."

describe("AudioMods", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "11") => {
    return render(
      withTestRouter(<AudioMods />, { query: { id, gearIndex: "0" } }),
    )
  }
  it("should display a list of audio mods", async () => {
    const { getAllByText } = setup()

    await waitFor(() => expect(getAllByText("Buy").length).toBeGreaterThan(0))
    audioMods.forEach(({ name }) => {
      expect(getAllByText(name).length).toBeGreaterThan(0)
    })
  })

  it("should add a mod to a piece of gear", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())
    expect(getByText("2/3")).toBeInTheDocument()
    expect(runnerFromDB(10).resources.audio[0].mods).toHaveLength(1)

    getByLabelText("Add Audio Enhancement").click()

    expect(getByText("3/3")).toBeInTheDocument()
    await waitFor(() =>
      expect(runnerFromDB(10).resources.audio[0].mods).toHaveLength(2),
    )
  })

  it("should remove a mod from a piece of gear", async () => {
    const { getByText, getByLabelText, queryByLabelText } = setup()

    await waitFor(() => expect(getByText("Sell")).toBeInTheDocument())

    expect(getByText("3/3")).toBeInTheDocument()
    expect(runnerFromDB(10).resources.audio[0].mods).toHaveLength(2)

    getByLabelText("Remove Spatial Recognizer").click()

    expect(
      queryByLabelText("Remove Spatial Recognizer"),
    ).not.toBeInTheDocument()

    expect(getByText("1/3")).toBeInTheDocument()
    await waitFor(() =>
      expect(runnerFromDB(10).resources.audio[0].mods).toHaveLength(1),
    )
  })

  it("should create the mods for an unmodified piece of gear", async () => {
    const { getByText, getByLabelText, getByTestId } = setup("10")

    expect(runnerFromDB(9).resources.audio[0].mods).toBeUndefined()

    await waitFor(() =>
      expect(getByLabelText("Add Select Sound Filter")).toBeInTheDocument(),
    )

    SliderHelper.change(getByTestId("Select Sound Filter-rating"), 3, 1, 3)

    getByLabelText("Add Select Sound Filter").click()

    expect(getByText("3/3")).toBeInTheDocument()

    await waitFor(() =>
      expect(runnerFromDB(9).resources.audio[0].mods[0].name).toBe(
        "Select Sound Filter",
      ),
    )
    expect(runnerFromDB(9).resources.audio[0].mods[0].cost).toBe(750)
  })
})
