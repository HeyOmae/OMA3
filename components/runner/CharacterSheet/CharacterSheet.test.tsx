import { renderWithTestRouter, screen, setupIndexedDB } from "@/test/testUtils"
import CharSheet from "./index"

const setup = () => {
  renderWithTestRouter(<CharSheet />, { query: { id: "10" } })
}

describe("Character Sheet", () => {
  beforeAll(setupIndexedDB)

  test("display character attributes", async () => {
    setup()

    expect(await screen.findByLabelText("Attributes")).toBeInTheDocument()
    expect(screen.getByLabelText("bod")).toHaveTextContent("1")
    expect(screen.getByLabelText("agi")).toHaveTextContent("1")
    expect(screen.getByLabelText("rea")).toHaveTextContent("1")
    expect(screen.getByLabelText("str")).toHaveTextContent("1")
    expect(screen.getByLabelText("cha")).toHaveTextContent("1")
    expect(screen.getByLabelText("wil")).toHaveTextContent("1")
    expect(screen.getByLabelText("log")).toHaveTextContent("3")
    expect(screen.getByLabelText("int")).toHaveTextContent("1")
    expect(screen.getByLabelText("edg")).toHaveTextContent("1")
    expect(screen.queryByLabelText("mag")).not.toBeInTheDocument()
    expect(screen.queryByLabelText("res")).not.toBeInTheDocument()
  })
})
