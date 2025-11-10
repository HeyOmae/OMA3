import { render, screen, within } from "@testing-library/react"
import { QualitiesTable } from "./QualitiesTable"
import { mockedRunners } from "@/test/mocks"

// Runner 4 (/dev/grrl) has both positive and negative qualities
const runnerWithQualities = mockedRunners[3]

// Runner 2 (Man-of-many-names) has no qualities property
const runnerWithoutQualities = mockedRunners[1]

describe("QualitiesTable", () => {
  test("should render the qualities section heading", () => {
    render(<QualitiesTable runner={runnerWithQualities} />)

    expect(
      screen.getByRole("heading", { level: 2, name: /qualities/i }),
    ).toBeInTheDocument()
  })

  test("should display positive qualities in a table with proper headers", () => {
    render(<QualitiesTable runner={runnerWithQualities} />)

    const positiveRegion = screen.getByRole("region", {
      name: /positive qualities/i,
    })

    // Find table within positive section
    const table = within(positiveRegion).getByRole("table")

    // Check column headers (no karma column)
    expect(
      within(table).getByRole("columnheader", { name: /name/i }),
    ).toBeInTheDocument()
    expect(
      within(table).getByRole("columnheader", { name: /level/i }),
    ).toBeInTheDocument()
    expect(
      within(table).getByRole("columnheader", { name: /selected/i }),
    ).toBeInTheDocument()

    // Verify karma column does NOT exist
    expect(
      within(table).queryByRole("columnheader", { name: /karma/i }),
    ).not.toBeInTheDocument()
  })

  test("should display positive quality data", () => {
    render(<QualitiesTable runner={runnerWithQualities} />)

    const positiveRegion = screen.getByRole("region", {
      name: /positive qualities/i,
    })
    const table = within(positiveRegion).getByRole("table")

    // Check for quality rows
    const rows = within(table).getAllByRole("row")
    // First row is header, so data starts at index 1
    expect(rows.length).toBeGreaterThan(1)

    // Check specific quality data using cells
    const exceptionalRow = within(positiveRegion).getByRole("cell", {
      name: /exceptional attribute/i,
    })
    expect(exceptionalRow).toBeInTheDocument()

    const aptitudeRow = within(positiveRegion).getByRole("cell", {
      name: /aptitude/i,
    })
    expect(aptitudeRow).toBeInTheDocument()
  })

  test("should display negative qualities in a table with proper headers", () => {
    render(<QualitiesTable runner={runnerWithQualities} />)

    const negativeRegion = screen.getByRole("region", {
      name: /negative qualities/i,
    })
    const table = within(negativeRegion).getByRole("table")

    expect(
      within(table).getByRole("columnheader", { name: /name/i }),
    ).toBeInTheDocument()
    expect(
      within(table).queryByRole("columnheader", { name: /karma/i }),
    ).not.toBeInTheDocument()
  })

  test("should display negative quality data", () => {
    render(<QualitiesTable runner={runnerWithQualities} />)

    const negativeRegion = screen.getByRole("region", {
      name: /negative qualities/i,
    })

    // Check for specific negative qualities
    expect(
      within(negativeRegion).getByRole("cell", { name: /impaired/i }),
    ).toBeInTheDocument()
    expect(
      within(negativeRegion).getByRole("cell", { name: /in debt/i }),
    ).toBeInTheDocument()
    expect(
      within(negativeRegion).getByRole("cell", { name: /sensitive system/i }),
    ).toBeInTheDocument()
  })

  test("should display selected values in proper cells", () => {
    render(<QualitiesTable runner={runnerWithQualities} />)

    const positiveRegion = screen.getByRole("region", {
      name: /positive qualities/i,
    })

    // Using within and getAllByRole to find cells, then checking content
    const cells = within(positiveRegion).getAllByRole("cell")

    // Exceptional Attribute should show "Logic"
    const logicCell = cells.find((cell) => cell.textContent === "Logic")
    expect(logicCell).toBeInTheDocument()

    // Aptitude should show "Cracking"
    const crackingCell = cells.find((cell) => cell.textContent === "Cracking")
    expect(crackingCell).toBeInTheDocument()
  })

  test("should display current level when quality has levels", () => {
    // Runner 10 (Cayman) has "Will To Live" with currentLevel: 2
    const caymanRunner = mockedRunners[9]
    render(<QualitiesTable runner={caymanRunner} />)

    const positiveRegion = screen.getByRole("region", {
      name: /positive qualities/i,
    })
    const table = within(positiveRegion).getByRole("table")
    const rows = within(table).getAllByRole("row")

    // Find Will To Live row and check level column
    const willToLiveRow = rows.find((row) =>
      within(row).queryByRole("cell", { name: /will to live/i }),
    )

    const cells = within(willToLiveRow).getAllByRole("cell")
    const levelCell = cells.find((cell) => cell.textContent === "2")
    expect(levelCell).toBeInTheDocument()
  })

  test("should display N/A for qualities without level or selection", () => {
    // Runner 8 (Ma'Fan) has "Gremlins" quality without level or selection
    const maFanRunner = mockedRunners[7]
    render(<QualitiesTable runner={maFanRunner} />)

    const negativeRegion = screen.getByRole("region", {
      name: /negative qualities/i,
    })
    const table = within(negativeRegion).getByRole("table")
    const rows = within(table).getAllByRole("row")

    const gremlinsRow = rows.find((row) =>
      within(row).queryByRole("cell", { name: /gremlins/i }),
    )

    // Should have N/A cells for level and selected
    const cells = within(gremlinsRow).getAllByRole("cell")
    const naCells = cells.filter((cell) => cell.textContent === "N/A")
    expect(naCells.length).toBe(2) // Level and Selected columns
  })

  test("should not render when runner has no qualities", () => {
    // Runner 2 (Man-of-many-names) has no qualities property
    const { container } = render(
      <QualitiesTable runner={runnerWithoutQualities} />,
    )

    expect(container).toBeEmptyDOMElement()
  })

  test("should render only positive section when no negative qualities", () => {
    // Runner 9 (Netcat) has only positive qualities
    const netcatRunner = mockedRunners[8]
    render(<QualitiesTable runner={netcatRunner} />)

    expect(
      screen.getByRole("region", { name: /positive qualities/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("region", { name: /negative qualities/i }),
    ).not.toBeInTheDocument()
  })

  test("should render only negative section when no positive qualities", () => {
    // Runner 8 (Ma'Fan) has only negative qualities
    const maFanRunner = mockedRunners[7]
    render(<QualitiesTable runner={maFanRunner} />)

    expect(
      screen.getByRole("region", { name: /negative qualities/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("region", { name: /positive qualities/i }),
    ).not.toBeInTheDocument()
  })
})
