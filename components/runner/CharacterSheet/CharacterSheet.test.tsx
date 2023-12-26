import { renderWithTestRouter, screen, setupIndexedDB } from "@/test/testUtils"
import CharSheet from "./index"

const setup = (id = "10") => {
  renderWithTestRouter(<CharSheet />, { query: { id } })
}

describe("Character Sheet", () => {
  beforeAll(setupIndexedDB)

  test("display character attributes", async () => {
    setup()

    expect(await screen.findByLabelText("Attributes")).toBeInTheDocument()
    expect(screen.getByLabelText("bod")).toHaveTextContent("1")
    expect(screen.getByLabelText("agi")).toHaveTextContent("6")
    expect(screen.getByLabelText("rea")).toHaveTextContent("5")
    expect(screen.getByLabelText("str")).toHaveTextContent("1")
    expect(screen.getByLabelText("cha")).toHaveTextContent("1")
    expect(screen.getByLabelText("wil")).toHaveTextContent("1")
    expect(screen.getByLabelText("log")).toHaveTextContent("3")
    expect(screen.getByLabelText("int")).toHaveTextContent("2")
    expect(screen.getByLabelText("edg")).toHaveTextContent("1")
    expect(screen.getByLabelText("ess")).toHaveTextContent("2.3")
    expect(screen.queryByLabelText("mag")).not.toBeInTheDocument()
    expect(screen.queryByLabelText("res")).not.toBeInTheDocument()
  })

  describe("physical initative", () => {
    test("without ware", async () => {
      setup("7")

      expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

      expect(screen.getByLabelText("Phy Init")).toHaveTextContent("4 + 1d6")
    })
    test("from Wired Reflexes", async () => {
      setup()

      expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

      expect(screen.getByLabelText("Phy Init")).toHaveTextContent("7 + 3d6")
    })

    test("from Synaptic Booster", async () => {
      setup("13")

      expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

      expect(screen.getByLabelText("Phy Init")).toHaveTextContent("2 + 4d6")
    })

    test("from adept power improved reflex", async () => {
      setup("8")

      expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

      expect(screen.getByLabelText("Phy Init")).toHaveTextContent("2 + 2d6")
    })
  })
})
