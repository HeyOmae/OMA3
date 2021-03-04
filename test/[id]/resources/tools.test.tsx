import ToolsPage from "@/pages/[id]/resources/tools"
import { tools } from "@/data/tools"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  fireEvent,
  waitForElementToBeRemoved,
} from "@/test/testUtils"

describe("Tools page", () => {
  beforeAll(setupIndexedDB)
  it("should be able to buy and sell Tools", async () => {
    const { getByLabelText, getByText, getAllByText } = render(
        withTestRouter(<ToolsPage />, { query: { id: "10" } }),
      ),
      currentNuyen = 272230,
      totalNuyen = 275000,
      gearA = tools[0],
      gearB = tools[Math.floor(tools.length / 2)],
      gearC = tools[tools.length - 1]

    await waitFor(() => {
      expect(getByText(`${currentNuyen}¥/${totalNuyen}¥`)).toBeInTheDocument()
    })

    fireEvent.mouseDown(getAllByText("Astral")[0])
    fireEvent.click(getByText("Outdoors"))

    await waitForElementToBeRemoved(
      // Need to use this because material ui also has a select element with role listbox
      document.body.querySelector("ul[role=listbox]"),
    )

    fireEvent.mouseDown(getAllByText("Astral")[0])
    fireEvent.click(getByText("Stealth"))
    await waitForElementToBeRemoved(
      document.body.querySelector("ul[role=listbox]"),
    )

    getByLabelText(`Add Outdoors ${gearA.name}`).click()
    getByLabelText(`Add Stealth ${gearB.name}`).click()
    getByLabelText(`Add Astral ${gearC.name}`).click()

    expect(
      getByText(
        `${
          currentNuyen - gearA.cost - gearB.cost - gearC.cost
        }¥/${totalNuyen}¥`,
      ),
    ).toBeInTheDocument()

    getByLabelText(`Remove Stealth ${gearB.name}`).click()

    expect(
      getByText(`${currentNuyen - gearA.cost - gearC.cost}¥/${totalNuyen}¥`),
    ).toBeInTheDocument()
  })
})
