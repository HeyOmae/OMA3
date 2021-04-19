import SensorPage from "@/pages/[id]/resources/sensor"
import {
  caymansCurrentlySpentNuyen,
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import { sensors as sensorData } from "@/data/sensors"

describe("sensor page", () => {
  beforeAll(setupIndexedDB)
  it("should be able to buy and sell sensor devices", async () => {
    const { getByLabelText, getAllByLabelText, getByText } = render(
        withTestRouter(<SensorPage />, {
          query: { id: "10", gearIndex: "0" },
        }),
      ),
      totalNuyen = 275_000,
      gearA = sensorData[0],
      gearB = sensorData[Math.floor(sensorData.length / 2)],
      gearC = sensorData[sensorData.length - 1]

    await waitFor(() => {
      expect(
        getByText(`${caymansCurrentlySpentNuyen}¥/${totalNuyen}¥`),
      ).toBeInTheDocument()
    })

    getByLabelText(`Add ${gearA.name}`).click()
    getByLabelText(`Add ${gearB.name}`).click()
    getByLabelText(`Add ${gearC.name}`).click()

    expect(
      getByText(
        `${
          caymansCurrentlySpentNuyen -
          gearA.cost -
          gearB.cost * gearB.minRating -
          gearC.cost
        }¥/${totalNuyen}¥`,
      ),
    ).toBeInTheDocument()

    getAllByLabelText(`Remove ${gearB.name}`)[0].click()

    expect(
      getByText(
        `${
          caymansCurrentlySpentNuyen - gearA.cost - gearC.cost
        }¥/${totalNuyen}¥`,
      ),
    ).toBeInTheDocument()
  })
})
