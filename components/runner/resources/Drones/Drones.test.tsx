import { drones } from "@/data/drones"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getByTextInContainer,
  getAllByText as getAllByTextInContainer,
} from "@/test/testUtils"
import Drones from "./index"

describe("<Drones/>", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "9") =>
    render(withTestRouter(<Drones />, { query: { id } }))

  it("should display drone stats", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => {
      expect(getByText("Resources")).toHaveAttribute("href", "/9/resources")
    })

    const buyHeader = getByText("Buy").closest("tr")

    expect(getByTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Type")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Hand")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Accel")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Speed Int")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Top Speed")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Body")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Armor")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Pilot")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Sensor")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    const drone = drones[2],
      droneRow = getByLabelText(`Add ${drone.name}`).closest("tr")

    expect(getByTextInContainer(droneRow, drone.name)).toBeInTheDocument()
    expect(getByTextInContainer(droneRow, drone.type)).toBeInTheDocument()
    expect(
      getAllByTextInContainer(droneRow, drone.vehicle.handling).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(droneRow, drone.vehicle.acceleration).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(droneRow, drone.vehicle.speedInterval).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(droneRow, drone.vehicle.topSpeed).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(droneRow, drone.vehicle.body).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(droneRow, drone.vehicle.armor).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(droneRow, drone.vehicle.pilot).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(droneRow, drone.vehicle.sensor).length,
    ).toBeGreaterThanOrEqual(1)
    expect(getByTextInContainer(droneRow, `${drone.cost}¥`)).toBeInTheDocument()
  })

  it("should have a mod button", async () => {
    const { getByLabelText } = setup("11")

    await waitFor(() => {
      expect(
        getByLabelText("Mod MCT-Nissan Roto Drone (0)"),
      ).toBeInTheDocument()
    })
  })
})
