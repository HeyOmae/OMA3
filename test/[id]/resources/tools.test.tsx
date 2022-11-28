import ToolsPage from "@/pages/[id]/resources/tools"
import { tools } from "@/data/tools"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  userEvent,
  waitForElementToBeRemoved,
  caymansCurrentlySpentNuyen,
} from "@/test/testUtils"

describe("Tools page", () => {
  beforeAll(setupIndexedDB)
  it("should be able to buy and sell Tools", async () => {
    const { getByLabelText, getByText, getAllByText } = render(
        withTestRouter(<ToolsPage />, { query: { id: "10" } }),
      ),
      currentNuyen = caymansCurrentlySpentNuyen,
      totalNuyen = 275000,
      gearA = tools[0],
      gearB = tools[Math.floor(tools.length / 2)],
      gearC = tools[tools.length - 1]

    await waitFor(() => {
      expect(getByText(`${currentNuyen}¥/${totalNuyen}¥`)).toBeInTheDocument()
    })

    await userEvent.click(getAllByText("Astral")[0])
    await userEvent.click(getByText("Outdoors"))

    await waitForElementToBeRemoved(
      // Need to use this because material ui also has a select element with role listbox
      document.body.querySelector("ul[role=listbox]"),
    )

    await userEvent.click(getAllByText("Astral")[0])
    await userEvent.click(getByText("Stealth"))
    await waitForElementToBeRemoved(
      document.body.querySelector("ul[role=listbox]"),
    )

    await userEvent.click(getByLabelText(`Add Outdoors ${gearA.name}`))
    await userEvent.click(getByLabelText(`Add Stealth ${gearB.name}`))
    await userEvent.click(getByLabelText(`Add Astral ${gearC.name}`))

    expect(
      getByText(
        `${
          currentNuyen - gearA.cost - gearB.cost - gearC.cost
        }¥/${totalNuyen}¥`,
      ),
    ).toBeInTheDocument()

    await userEvent.click(getByLabelText(`Remove Stealth ${gearB.name}`))

    expect(
      getByText(`${currentNuyen - gearA.cost - gearC.cost}¥/${totalNuyen}¥`),
    ).toBeInTheDocument()
  })
})
