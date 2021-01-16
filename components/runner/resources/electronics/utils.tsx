import {
  render,
  waitFor,
  withTestRouter,
  getByText as getTextInContainer,
} from "@/test/testUtils"
import { GearMatrixCommlink } from "@/types/Resources"
import { FC } from "react"
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

export const TestMatrixDeviceTable = (
  MatrixComponent: FC,
  ListOfMatrixGear: GearMatrixCommlink[],
) => async () => {
  const { getByText, getByLabelText } = render(
    withTestRouter(<MatrixComponent />, { query: { id: "10" } }),
  )
  await waitFor(() => {
    expect(getByText("Buy")).toBeInTheDocument()
  })

  // Header
  const buyHeader = getByText("Buy").closest("thead")

  expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
  expect(getTextInContainer(buyHeader, "DR")).toBeInTheDocument()
  expect(getTextInContainer(buyHeader, "D/F")).toBeInTheDocument()
  expect(getTextInContainer(buyHeader, "Slots")).toBeInTheDocument()
  expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
  expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

  // Stats of a commlink
  const device = ListOfMatrixGear[0],
    deviceRow = getByLabelText(`Add ${device.name}`).closest("tr")

  expect(getTextInContainer(deviceRow, device.name)).toBeInTheDocument()
  expect(getTextInContainer(deviceRow, device.deviceRating)).toBeInTheDocument()
  expect(
    getTextInContainer(
      deviceRow,
      `${device.matrixAttributes.dataProcessing}/${device.matrixAttributes.firewall}`,
    ),
  ).toBeInTheDocument()
  expect(
    getTextInContainer(deviceRow, device.matrixAttributes.programs),
  ).toBeInTheDocument()
  expect(getTextInContainer(deviceRow, device.availability)).toBeInTheDocument()
  expect(getTextInContainer(deviceRow, `${device.cost}¥`)).toBeInTheDocument()
}
