import { mockedRunners } from "@/test/mocks"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import ResourceSummary from "./index"

describe("<ResourceSummary />", () => {
  beforeAll(setupIndexedDB)
  const setup = (runnerIndex = 9) => {
    const runnerId = runnerIndex + 1
    return {
      ...render(
        withTestRouter(<ResourceSummary />, {
          query: { id: runnerId.toString() },
          asPath: `${runnerId}/resources`,
        }),
      ),
      gear: Object.entries(mockedRunners[runnerIndex]?.resources ?? {}),
    }
  }

  it("should render all of the gear a runner has", async () => {
    const { getByText, gear } = setup()

    // Grab the first category and make sure it appears
    await waitFor(() => getByText(gear[0][0]))

    gear.forEach(([resourceKey, gearArray]) => {
      const resourceType = getByText(resourceKey)
      expect(resourceType.closest("a")).toHaveAttribute(
        "href",
        `/10/resources/${resourceKey}`,
      )

      gearArray.forEach(({ name }) =>
        expect(getByText(name)).toBeInTheDocument(),
      )
    })
  })

  it("should not die if the runner has no resources yet", async () => {
    const { getByText } = setup(0)

    await waitFor(() => expect(getByText("Gear Summary")).toBeInTheDocument())
  })

  describe("resources with dedicated sub-path", () => {
    it("security devices should have a securtiy path added to their url routes", async () => {
      const { getByText, gear } = setup(6)

      // Grab the first category and make sure it appears
      await waitFor(() => getByText(gear[0][0]))

      expect(getByText("bne").closest("a")).toHaveAttribute(
        "href",
        "/7/resources/security/bne",
      )
    })
    it("some magic stuff should have a magic path added to their url routes", async () => {
      const { getByText, gear } = setup(6)

      // Grab the first category and make sure it appears
      await waitFor(() => getByText(gear[0][0]))

      expect(getByText("focusFormula").closest("a")).toHaveAttribute(
        "href",
        "/7/resources/magic/focusFormula",
      )
    })
  })
})
