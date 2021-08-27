import { vehicles } from "@/data/vehicles"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getByTextInContainer,
  getAllByText as getAllByTextInContainer,
} from "@/test/testUtils"
import Vehicles from "./index"

describe("<Vehicles/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<Vehicles />, { query: { id: "9" } }))

  it("should display vehicle stats", async () => {
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
    expect(getByTextInContainer(buyHeader, "Seat")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getByTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    const vehcile = vehicles[2],
      vehicleRow = getByLabelText(`Add ${vehcile.name}`).closest("tr")

    expect(getByTextInContainer(vehicleRow, vehcile.name)).toBeInTheDocument()
    expect(
      getByTextInContainer(vehicleRow, vehcile.subtype),
    ).toBeInTheDocument()
    expect(
      getAllByTextInContainer(vehicleRow, vehcile.vehicle.handling).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(vehicleRow, vehcile.vehicle.acceleration).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(vehicleRow, vehcile.vehicle.speedInterval).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(vehicleRow, vehcile.vehicle.topSpeed).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(vehicleRow, vehcile.vehicle.body).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(vehicleRow, vehcile.vehicle.armor).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(vehicleRow, vehcile.vehicle.pilot).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(vehicleRow, vehcile.vehicle.sensor).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getAllByTextInContainer(vehicleRow, vehcile.vehicle.seat).length,
    ).toBeGreaterThanOrEqual(1)
    expect(
      getByTextInContainer(vehicleRow, `${vehcile.cost}¥`),
    ).toBeInTheDocument()
  })
})
