import {
  GearElectronic,
  GearMatrixCommlink,
  GearModdableRated,
} from "@/types/Resources"
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
