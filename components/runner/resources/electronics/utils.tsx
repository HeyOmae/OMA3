import {
  render,
  withTestRouter,
  getByText as getTextInContainer,
  screen,
} from "@/test/testUtils"
import {
  GearElectronic,
  GearMatrixCommlink,
  GearModdableRated,
} from "@/types/Resources"
import { FC } from "react"
import {
  Columns,
  gearModableTableConfigOptions,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
} from "../util"

export type CommlinkCols = Columns<GearMatrixCommlink>[]

export const gearMatrixTableConfigOptions = {
  deviceRating: { label: "DR", display: ({ deviceRating }) => deviceRating },
  slots: {
    label: "Slots",
    display: ({ matrixAttributes }) => matrixAttributes.programs,
  },
}

const baseCols: CommlinkCols = [
  gearTableConfigOptions.name,
  gearMatrixTableConfigOptions.deviceRating,
  {
    label: "D/F",
    display: ({ matrixAttributes: { dataProcessing, firewall } }) =>
      `${dataProcessing}/${firewall}`,
  },
  gearMatrixTableConfigOptions.slots,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export const buyCommlinkCols: CommlinkCols = [
  gearTableConfigOptions.buy,
  ...baseCols,
]

export const sellCommlinkCols: CommlinkCols = [
  gearTableConfigOptions.sell,
  ...baseCols,
]

type electronicCols = Columns<GearElectronic>[]

const baseElectronicCols: electronicCols = [
  gearTableConfigOptions.name,
  gearMatrixTableConfigOptions.deviceRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export const buyElectronicCol: electronicCols = [
  gearTableConfigOptions.buy,
  ...baseElectronicCols,
]
export const sellElectronicCol: electronicCols = [
  gearTableConfigOptions.sell,
  ...baseElectronicCols,
]

type SensorDeviceCols = Columns<GearModdableRated>[]

export const buySensorCols: SensorDeviceCols = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.setRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export const sellSensorCols: SensorDeviceCols = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearModableTableConfigOptions.mod,
]

export const expectGearToDisplayMatrixDeviceTable =
  (MatrixComponent: FC, ListOfMatrixGear: GearMatrixCommlink[]) => async () => {
    render(withTestRouter(<MatrixComponent />, { query: { id: "10" } }))

    expect(await screen.findByText("Buy")).toBeInTheDocument()

    // Header
    const buyHeader = screen.getByText("Buy").closest("thead")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "DR")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "D/F")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Slots")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    // Stats of a commlink
    const device = ListOfMatrixGear[0],
      deviceRow = screen.getByLabelText(`Add ${device.name}`).closest("tr")

    expect(getTextInContainer(deviceRow, device.name)).toBeInTheDocument()
    expect(
      getTextInContainer(deviceRow, device.deviceRating),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(
        deviceRow,
        `${device.matrixAttributes.dataProcessing}/${device.matrixAttributes.firewall}`,
      ),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(deviceRow, device.matrixAttributes.programs),
    ).toBeInTheDocument()
    expect(
      getTextInContainer(deviceRow, device.availability),
    ).toBeInTheDocument()
    expect(getTextInContainer(deviceRow, `${device.cost}¥`)).toBeInTheDocument()
  }
