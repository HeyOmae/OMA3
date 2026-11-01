import {
  setupIndexedDB,
  withTestRouter,
  getByText as getTextInContainer,
  waitFor,
  render,
  SliderHelper,
  runnerFromDB,
  userEvent,
  within,
} from "@/test/testUtils"
import Software from "./"

// Buy, Name, Choice, Category, Rating, Avail, Cost
const AVAIL_CELL = 5

describe("<Software/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<Software />, { query: { id: "10" } }))

  it("should display the software stats", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = getByText("Buy").closest("tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Choice")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Category")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Rating")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    const browseRow = getByLabelText("Add Browse").closest("tr")

    expect(getTextInContainer(browseRow, "Browse")).toBeInTheDocument()
    expect(getTextInContainer(browseRow, "BASIC PROGRAM")).toBeInTheDocument()
    // no choice and no rating
    expect(within(browseRow).getAllByText("N/A")).toHaveLength(2)
    expect(getTextInContainer(browseRow, "1")).toBeInTheDocument()
    expect(getTextInContainer(browseRow, "60¥")).toBeInTheDocument()

    const exploitRow = getByLabelText("Add Exploit").closest("tr")

    expect(
      getTextInContainer(exploitRow, "HACKING PROGRAM"),
    ).toBeInTheDocument()
    expect(getTextInContainer(exploitRow, "4I")).toBeInTheDocument()
    expect(getTextInContainer(exploitRow, "250¥")).toBeInTheDocument()
  })

  it("should list electronic warfare as an autosoft", async () => {
    const { getByText, getByLabelText } = setup()
    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const row = getByLabelText("Add Electronic Warfare").closest("tr")

    expect(getTextInContainer(row, "AUTOSOFT")).toBeInTheDocument()
  })

  it("should multiply the cost and availability of an autosoft by its rating", async () => {
    const { getByText, getByLabelText, getByTestId } = setup()
    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const clearsightRow = getByLabelText("Add Clearsight").closest("tr")

    expect(getTextInContainer(clearsightRow, "500¥")).toBeInTheDocument()

    SliderHelper.change(getByTestId("Clearsight-rating"), 4, 1, 9)

    await waitFor(() =>
      expect(getTextInContainer(clearsightRow, "2000¥")).toBeInTheDocument(),
    )
    expect(clearsightRow.querySelectorAll("td")[AVAIL_CELL]).toHaveTextContent(
      /^4$/,
    )
  })

  it("should divide the availability of a tutorsoft by 3", async () => {
    const { getByText, getByLabelText, getByTestId } = setup()
    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const tutorsoftRow = getByLabelText(/Add .*Tutorsoft/).closest("tr")

    SliderHelper.change(getByTestId(/Tutorsoft-rating/), 6, 1, 6)

    await waitFor(() =>
      expect(getTextInContainer(tutorsoftRow, "2400¥")).toBeInTheDocument(),
    )
    expect(tutorsoftRow.querySelectorAll("td")[AVAIL_CELL]).toHaveTextContent(
      /^2$/,
    )
  })

  it("should save the software", async () => {
    const { getByLabelText, findByLabelText, getByText } = setup()
    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    await userEvent.click(getByLabelText("Add Browse"))

    expect(await findByLabelText("Remove Browse")).toBeInTheDocument()
    await waitFor(() => {
      expect(runnerFromDB(9).resources?.software[0].name).toEqual("Browse")
    })
  })
  describe("named software", () => {
    it("should put the typed name on the software", async () => {
      const { getByLabelText, findByLabelText, getByText } = setup()
      await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

      await userEvent.type(getByLabelText("Select Mapsoft Name"), "Seattle")
      await userEvent.click(getByLabelText("Add Seattle Mapsoft"))

      expect(
        await findByLabelText("Remove Seattle Mapsoft"),
      ).toBeInTheDocument()
      await waitFor(() => {
        expect(
          runnerFromDB(9).resources.software.map(({ name }) => name),
        ).toContain("Seattle Mapsoft")
      })
    })

    it("should multiply the cost of a named software with a rating", async () => {
      const { getByLabelText, getByTestId, findByLabelText, getByText } =
        setup()
      await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

      await userEvent.type(getByLabelText("Select Linguasoft Name"), "Spanish")
      SliderHelper.change(getByTestId(/Linguasoft-rating/), 3, 1, 6)

      const row = (await findByLabelText("Add Spanish Linguasoft")).closest(
        "tr",
      )
      await waitFor(() =>
        expect(getTextInContainer(row, "4500¥")).toBeInTheDocument(),
      )

      await userEvent.click(getByLabelText("Add Spanish Linguasoft"))

      expect(
        await findByLabelText("Remove Spanish Linguasoft"),
      ).toBeInTheDocument()
      await waitFor(() => {
        expect(
          runnerFromDB(9).resources.software.find(
            ({ name }) => name === "Spanish Linguasoft",
          ).currentRating,
        ).toEqual(3)
      })
    })
  })
  describe("weapon choice", () => {
    it("should name a targeting autosoft after one of the runner's weapons", async () => {
      const { getByLabelText, findByLabelText, getByTestId } = setup()

      const addButton = await findByLabelText("Add Yamaha Pulsar 1 Targeting")
      SliderHelper.change(getByTestId(/Targeting-rating/), 2, 1, 9)

      await waitFor(() =>
        expect(
          getTextInContainer(addButton.closest("tr"), "1000¥"),
        ).toBeInTheDocument(),
      )

      await userEvent.click(getByLabelText("Add Yamaha Pulsar 1 Targeting"))

      expect(
        await findByLabelText("Remove Yamaha Pulsar 1 Targeting"),
      ).toBeInTheDocument()
      await waitFor(() => {
        expect(
          runnerFromDB(9).resources.software.find(
            ({ name }) => name === "Yamaha Pulsar 1 Targeting",
          ).currentRating,
        ).toEqual(2)
      })
    })
  })

  describe("skill choice", () => {
    it("should only offer skills that are not magic or resonance for an activesoft", async () => {
      const {
        getByLabelText,
        findByLabelText,
        getByRole,
        queryByRole,
        getByTestId,
      } = setup()

      const addButton = await findByLabelText("Add Athletics Activesoft")
      const row = addButton.closest("tr")

      await userEvent.click(within(row).getByRole("combobox"))

      expect(queryByRole("option", { name: "Astral" })).not.toBeInTheDocument()
      expect(
        queryByRole("option", { name: "Conjuring" }),
      ).not.toBeInTheDocument()
      await userEvent.click(getByRole("option", { name: "Firearms" }))

      SliderHelper.change(getByTestId(/Activesoft-rating/), 2, 1, 6)

      await waitFor(() =>
        expect(getTextInContainer(row, "10000¥")).toBeInTheDocument(),
      )

      await userEvent.click(getByLabelText("Add Firearms Activesoft"))

      expect(
        await findByLabelText("Remove Firearms Activesoft"),
      ).toBeInTheDocument()
    })
  })
})
