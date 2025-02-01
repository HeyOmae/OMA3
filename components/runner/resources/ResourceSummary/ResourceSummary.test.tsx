import { mockedRunners } from "@/test/mocks"
import {
  render,
  setupIndexedDB,
  withTestRouter,
  screen,
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
    const { gear } = setup()

    // Grab the first category and make sure it appears
    await screen.findByText(gear[0][0])

    gear.forEach(([resourceKey, gearArray]) => {
      expect(screen.getByRole("link", { name: resourceKey })).toHaveAttribute(
        "href",
        `/10/resources/${resourceKey}`,
      )

      gearArray.forEach(({ name }) =>
        expect(screen.getByText(name)).toBeInTheDocument(),
      )
    })
  })

  it("should not die if the runner has no resources yet", async () => {
    setup(0)

    expect(await screen.findByText("Gear Summary")).toBeInTheDocument()
  })

  describe("resources with dedicated sub-path", () => {
    it("security devices should have a security path added to their url routes", async () => {
      setup(6)

      expect(await screen.findByRole("link", { name: "bne" })).toHaveAttribute(
        "href",
        "/7/resources/security/bne",
      )
    })
    it("some magic stuff should have a magic path added to their url routes", async () => {
      setup(6)

      expect(
        await screen.findByRole("link", { name: "focusFormula" }),
      ).toHaveAttribute("href", "/7/resources/magic/focusFormula")
    })
  })

  describe("gear with resourceKeys that do not map correctly to URI", () => {
    test("commlinks", async () => {
      setup(6)

      expect(
        await screen.findByRole("link", { name: "commlink" }),
      ).toHaveAttribute("href", "/7/resources/commlinks")
    })

    test("rigger consoles", async () => {
      setup(13)

      expect(
        await screen.findByRole("link", { name: "riggerConsole" }),
      ).toHaveAttribute("href", "/14/resources/consoles")
    })
  })
})
