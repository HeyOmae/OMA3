import { GearMatrixCommlink } from "@/types/Resources"
import { Columns, gearTableConfigOptions } from "../util"

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
