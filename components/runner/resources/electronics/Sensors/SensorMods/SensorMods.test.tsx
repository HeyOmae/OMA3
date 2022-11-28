import {
  render,
  runnerFromDB,
  setupIndexedDB,
  SliderHelper,
  userEvent,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import { sensorMods } from "@/data/mods"
import SensorMods from "."

describe("SensorMods", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "10") => {
    return render(
      withTestRouter(<SensorMods />, { query: { id, gearIndex: "0" } }),
    )
  }
  it("should display a list of sensor mods", async () => {
    const { getAllByText } = setup()

    await waitFor(() => expect(getAllByText("Buy").length).toBeGreaterThan(0))
    sensorMods.forEach(({ name }) => {
      expect(getAllByText(name).length).toBeGreaterThan(0)
    })
  })

  it("should add a mod to a piece of gear", async () => {
    const { getByText, getByLabelText, getByTestId } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())
    expect(getByText("4/6")).toBeInTheDocument()
    expect(runnerFromDB(9).resources.sensor[0].mods).toHaveLength(2)

    SliderHelper.change(
      getByTestId("Omnidirectional Microphone Function-rating"),
      2,
      1,
      6,
    )

    await userEvent.click(
      getByLabelText("Add Omnidirectional Microphone Function"),
    )

    expect(getByText("6/6")).toBeInTheDocument()
    await waitFor(() =>
      expect(runnerFromDB(9).resources.sensor[0].mods).toHaveLength(3),
    )
  })

  it("should remove a mod from a piece of gear", async () => {
    const { getByText, getByLabelText, queryByLabelText } = setup()

    await waitFor(() => expect(getByText("Sell")).toBeInTheDocument())

    expect(getByText("6/6")).toBeInTheDocument()
    expect(runnerFromDB(9).resources.sensor[0].mods).toHaveLength(3)

    await userEvent.click(getByLabelText("Remove Camera Function"))

    expect(queryByLabelText("Remove Camera Function")).not.toBeInTheDocument()

    expect(getByText("3/6")).toBeInTheDocument()
    await waitFor(() =>
      expect(runnerFromDB(9).resources.sensor[0].mods).toHaveLength(2),
    )
  })

  it("should create the mods for an unmodified piece of gear and allow rating to be set for a mod", async () => {
    const { getByText, getByLabelText } = setup("11")

    expect(runnerFromDB(10).resources.sensor[0].mods).toBeUndefined()

    await waitFor(() =>
      expect(getByLabelText("Add OlFactory Sensor")).toBeInTheDocument(),
    )
    expect(getByText("0/1")).toBeInTheDocument()

    await userEvent.click(getByLabelText("Add OlFactory Sensor"))

    // Should use up all the capacity
    expect(getByText("1/1")).toBeInTheDocument()
    // Should display the capacity of the sound filter
    expect(getByLabelText("Remove OlFactory Sensor")).toBeInTheDocument()

    await waitFor(() =>
      expect(runnerFromDB(10).resources.sensor[0].mods[0].name).toBe(
        "OlFactory Sensor",
      ),
    )
  })
})
