import ToolsPage from "@/pages/[id]/resources/tools"
import { tools } from "@/data/tools"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  userEvent,
  caymansCurrentlySpentNuyen,
  screen,
} from "@/test/testUtils"

describe("Tools page", () => {
  beforeAll(setupIndexedDB)
  it("should be able to buy and sell Tools", async () => {
    render(withTestRouter(<ToolsPage />, { query: { id: "10" } }))

    const currentNuyen = caymansCurrentlySpentNuyen,
      totalNuyen = 275000,
      gearA = tools[0],
      gearB = tools[Math.floor(tools.length / 2)],
      gearC = tools[tools.length - 1]

    await waitFor(() => {
      expect(
        screen.getByText(`${currentNuyen}¥/${totalNuyen}¥`),
      ).toBeInTheDocument()
    })

    await userEvent.click(screen.getAllByText("Astral")[0])
    expect(screen.queryByRole("listbox")).toBeInTheDocument()
    await userEvent.click(screen.getByText("Outdoors"))
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()

    await userEvent.click(screen.getAllByText("Astral")[0])
    expect(screen.queryByRole("listbox")).toBeInTheDocument()
    await userEvent.click(screen.getByText("Stealth"))
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()

    await userEvent.click(screen.getByLabelText(`Add Outdoors ${gearA.name}`))
    await userEvent.click(screen.getByLabelText(`Add Stealth ${gearB.name}`))
    await userEvent.click(screen.getByLabelText(`Add Astral ${gearC.name}`))

    expect(
      screen.getByText(
        `${
          currentNuyen - gearA.cost - gearB.cost - gearC.cost
        }¥/${totalNuyen}¥`,
      ),
    ).toBeInTheDocument()

    await userEvent.click(screen.getByLabelText(`Remove Stealth ${gearB.name}`))

    expect(
      screen.getByText(
        `${currentNuyen - gearA.cost - gearC.cost}¥/${totalNuyen}¥`,
      ),
    ).toBeInTheDocument()
  })
})
