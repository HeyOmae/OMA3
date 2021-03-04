import Tools from "./index"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getTextInContainer,
} from "@/test/testUtils"
import { tools } from "@/data/tools"

describe("<Tools />", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "9") =>
    render(withTestRouter(<Tools />, { query: { id } }))

  it("should add a tool to a runner", async () => {
    const { getByText, getByLabelText } = setup()

    await waitFor(() => {
      expect(getByText("Resources")).toHaveAttribute("href", "/9/resources")
    })

    const buyHeader = getByText("Buy").closest("tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    const tool = tools[2],
      toolRow = getByLabelText(`Add Astral ${tool.name}`).closest("tr")

    expect(
      getTextInContainer(toolRow, `Astral ${tool.name}`),
    ).toBeInTheDocument()
    expect(getTextInContainer(toolRow, tool.availability)).toBeInTheDocument()
    expect(getTextInContainer(toolRow, `${tool.cost}¥`)).toBeInTheDocument()
  })
})
