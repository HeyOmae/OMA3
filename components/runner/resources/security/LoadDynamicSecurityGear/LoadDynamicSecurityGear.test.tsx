import * as securityData from "@/data/security"
import {
  render,
  getByText as getTextInContainer,
  getByTestId as getTestIdInContainer,
  setupIndexedDB,
  withTestRouter,
  waitFor,
} from "@/test/testUtils"
import LoadDynamicSecurityGear from "./"

describe("LoadDynamicSecurityGear Component", () => {
  beforeAll(setupIndexedDB)
  const setup = (securityType: string) =>
    render(
      withTestRouter(<LoadDynamicSecurityGear />, {
        query: { id: "10", securityType },
      }),
    )
  Object.entries(securityData).forEach(([securityType, securityGearData]) => {
    it(`should render ${securityType} gear`, async () => {
      const { getByText, getByLabelText } = setup(securityType)

      await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

      const buyHeader = getByText("Buy").closest("tr")

      expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
      expect(getTextInContainer(buyHeader, "Rating")).toBeInTheDocument()
      expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
      expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

      //stats
      const gear =
          securityGearData.find(({ rating }) => rating) ?? securityGearData[0],
        gearRow = getByLabelText(`Add ${gear.name}`).closest("tr")

      expect(getTextInContainer(gearRow, gear.name)).toBeInTheDocument()
      if (gear.rating) {
        expect(
          getTestIdInContainer(gearRow, `${gear.name}-rating`),
        ).toBeInTheDocument()
      } else {
        expect(getTextInContainer(gearRow, "N/A")).toBeInTheDocument()
      }
      expect(getTextInContainer(gearRow, gear.availability)).toBeInTheDocument()
      expect(getTextInContainer(gearRow, `${gear.cost}¥`)).toBeInTheDocument()
    })
  })
})
