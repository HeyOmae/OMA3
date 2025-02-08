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

  describe("physical initiative", () => {
    test("without ware or adept powers", async () => {
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

  describe("matrix initiative", () => {
    test("technomancers should have init based of mental attributes", async () => {
      setup("9")

      expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

      expect(screen.getByLabelText("Mat Cold Init")).toHaveTextContent(
        "DP + 1 + 2d6",
      )
      expect(screen.getByLabelText("Mat Hot Init")).toHaveTextContent(
        "DP + 1 + 3d6",
      )
    })

    test("runners that are not TM or without DNI and hot sim do not have Matrix init", async () => {
      setup("8")
      expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

      expect(screen.getByLabelText("Mat Cold Init")).toHaveTextContent("N/A")
      expect(screen.getByLabelText("Mat Hot Init")).toHaveTextContent("N/A")
    })

    test("runners with a deck and cyberjack get Matrix Init", async () => {
      setup("4")

      expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

      expect(screen.getByLabelText("Mat Cold Init")).toHaveTextContent(
        "DP + 1 + 2d6",
      )
      expect(screen.getByLabelText("Mat Hot Init")).toHaveTextContent(
        "DP + 1 + 3d6",
      )
    })

    test("runners with basic simmod on a commlink and trodes should get cold init", async () => {
      setup("13")

      expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

      expect(screen.getByLabelText("Mat Cold Init")).toHaveTextContent(
        "DP + 1 + 2d6",
      )
      expect(screen.getByLabelText("Mat Hot Init")).toHaveTextContent("N/A")
    })

    test("runners that are riggers get hot and cold init", async () => {
      setup("14")

      expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

      expect(screen.getByLabelText("Mat Cold Init")).toHaveTextContent(
        "DP + 3 + 2d6",
      )
      expect(screen.getByLabelText("Mat Hot Init")).toHaveTextContent(
        "DP + 3 + 3d6",
      )
    })

    test("runners with hot sim mod and data jack get cold and hot init", async () => {
      setup("11")

      expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

      expect(screen.getByLabelText("Mat Cold Init")).toHaveTextContent(
        "DP + 1 + 2d6",
      )
      expect(screen.getByLabelText("Mat Hot Init")).toHaveTextContent(
        "DP + 1 + 3d6",
      )
    })

    test("runner with electronic accessory and no sim mod do not get matrix init", async () => {
      setup("7")

      expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

      expect(screen.getByLabelText("Mat Cold Init")).toHaveTextContent("N/A")
      expect(screen.getByLabelText("Mat Hot Init")).toHaveTextContent("N/A")
    })
  })

  test("Astral initiative", async () => {
    setup("14")

    expect(await screen.findByLabelText("Initiative")).toBeInTheDocument()

    expect(screen.getByLabelText("Ast Init")).toHaveTextContent("8 + 2d6")
  })

  test("render skills and dicepools", async () => {
    setup()

    await screen.findAllByRole("heading", { name: "Skills" })

    expect(screen.getByText("Firearms")).toBeInTheDocument()
    expect(screen.getByLabelText("Firearms-rating")).toHaveTextContent("6")
    expect(screen.getByLabelText("Firearms-att")).toHaveTextContent("Agility")
    expect(screen.getByLabelText("Firearms-dp")).toHaveTextContent("12")
    expect(screen.getByLabelText("Firearms-spec")).toHaveTextContent(
      "Pistols (14)",
    )
    expect(screen.getByLabelText("Firearms-exp")).toHaveTextContent(
      "Automatics (15)",
    )

    expect(screen.getByText("Stealth")).toBeInTheDocument()
    expect(screen.getByLabelText("Stealth-rating")).toHaveTextContent("5")
    expect(screen.getByLabelText("Stealth-att")).toHaveTextContent("Agility")
    expect(screen.getByLabelText("Stealth-dp")).toHaveTextContent("11")
    expect(screen.getByLabelText("Stealth-spec")).toHaveTextContent("N/A")
    expect(screen.getByLabelText("Stealth-exp")).toHaveTextContent("N/A")

    expect(screen.getByText("Perception")).toBeInTheDocument()
    expect(screen.getByLabelText("Perception-rating")).toHaveTextContent("3")
    expect(screen.getByLabelText("Perception-att")).toHaveTextContent(
      "Intuition",
    )
    expect(screen.getByLabelText("Perception-dp")).toHaveTextContent("5")
    expect(screen.getByLabelText("Perception-spec")).toHaveTextContent("N/A")
    expect(screen.getByLabelText("Perception-exp")).toHaveTextContent("N/A")
  })
})
