import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getByTextInContainer,
  caymansCurrentlySpentNuyen,
} from "@/test/testUtils"
import { GearMod } from "@/types/Resources"
import { GearModPageTemplate } from "./GearModPageTemplate"
import { buyCols, sellCols } from "../electronics/Imaging/ImagingMods"
import { imagingMods } from "@/data/mods"

describe("GearModPageTemplate", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = 10) => {
    return render(
      withTestRouter(
        <GearModPageTemplate<GearMod>
          gearIndex={0}
          resourceKey="imaging"
          previousPath={{ label: "Imaging", categoryPath: "imaging" }}
          gearLabel="Imaging Mods"
          listOfGear={imagingMods}
          addGearTableConfig={buyCols}
          removeGearTableConfig={sellCols}
        />,
        { query: { id: id.toString() } },
      ),
    )
  }
  it("should have some breadcrumbs", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Resources")).toBeInTheDocument()
    })
    expect(getByText("Resources")).toHaveAttribute("href", "/10/resources")
    expect(getByText("Imaging")).toHaveAttribute(
      "href",
      "/10/resources/imaging",
    )
    expect(getByText("Contacts (0)")).toBeInTheDocument()
  })

  it("should display remaining nuyen", async () => {
    const { getByText } = setup()

    await waitFor(() =>
      expect(
        getByText(`${caymansCurrentlySpentNuyen}¥/275000¥`),
      ).toBeInTheDocument(),
    )
  })

  it("should display remaining capacity", async () => {
    const { getByText } = setup()

    await waitFor(() => expect(getByText("1/3")).toBeInTheDocument())
  })

  it("should display a list of mods for a piece of gear", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    imagingMods.forEach(
      ({ name, availability, cost, useAs: [{ capacity }] }) => {
        const testRow = getByLabelText(`Add ${name}`).closest("tr")
        expect(getByTextInContainer(testRow, name)).toBeInTheDocument()
        expect(
          getByTextInContainer(testRow, `[${capacity}]`),
        ).toBeInTheDocument()
        expect(getByTextInContainer(testRow, availability)).toBeInTheDocument()
        expect(getByTextInContainer(testRow, `${cost}¥`)).toBeInTheDocument()
      },
    )
  })

  it("should display mods already on a piece of gear", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => expect(getByText("Sell")).toBeInTheDocument())

    const testRow = getByLabelText("Remove Image Link").closest("tr")
    expect(getByTextInContainer(testRow, "Image Link")).toBeInTheDocument()
    expect(getByTextInContainer(testRow, `[1]`)).toBeInTheDocument()
    expect(getByTextInContainer(testRow, "1")).toBeInTheDocument()
    expect(getByTextInContainer(testRow, `25¥`)).toBeInTheDocument()
  })

  it("should display not modded table if piece of gear has no mods installed", async () => {
    const { queryByText } = setup(11)

    await waitFor(() => expect(queryByText("Buy")).toBeInTheDocument())

    expect(queryByText("Sell")).not.toBeInTheDocument()
  })

  it("should buy or sell stuff...I don't know. I'll figure it out later", async () => {
    const { getByLabelText } = setup()

    await waitFor(() =>
      expect(getByLabelText("Add Flare Compensation")).toBeInTheDocument(),
    )

    getByLabelText("Add Flare Compensation").click()
    getByLabelText("Remove Image Link").click()
  })
})
