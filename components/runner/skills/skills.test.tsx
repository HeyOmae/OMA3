import React from "react"
import Skills from "."
import {
  render,
  withTestRouter,
  setupIndexedDB,
  waitFor,
  SliderHelper,
  runnerFromDB,
  userEvent,
  screen,
} from "@/test/testUtils"

describe("<Skills/>", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "3") =>
    render(withTestRouter(<Skills />, { query: { id } }))

  it("should display a list of skills", async () => {
    setup()

    await screen.findByText("Astral")
    expect(screen.getByText("Athletics")).toBeInTheDocument()
    expect(screen.getByText("Biotech")).toBeInTheDocument()
    expect(screen.getByText("Close combat")).toBeInTheDocument()
    expect(screen.getByText("Con")).toBeInTheDocument()
    expect(screen.getByText("Conjuring")).toBeInTheDocument()
    expect(screen.getByText("Cracking")).toBeInTheDocument()
    expect(screen.getByText("Electronics")).toBeInTheDocument()
    expect(screen.getByText("Enchanting")).toBeInTheDocument()
    expect(screen.getByText("Engineering")).toBeInTheDocument()
    expect(screen.getByText("Exotic weapons")).toBeInTheDocument()
    expect(screen.getByText("Firearms")).toBeInTheDocument()
    expect(screen.getByText("Influence")).toBeInTheDocument()
    expect(screen.getByText("Outdoors")).toBeInTheDocument()
    expect(screen.getByText("Perception")).toBeInTheDocument()
    expect(screen.getByText("Piloting")).toBeInTheDocument()
    expect(screen.getByText("Sorcery")).toBeInTheDocument()
    expect(screen.getByText("Stealth")).toBeInTheDocument()
    expect(screen.getByText("Tasking")).toBeInTheDocument()
  })

  it("should display the remaining skill points", async () => {
    setup("2")

    await screen.findByRole("term")
    expect(screen.getByRole("definition")).toHaveTextContent("4/20")
  })

  it("should add a skill at rating 1 to the runner skills", async () => {
    setup()

    expect(runnerFromDB(2).skills).toBeUndefined()

    expect(
      await screen.findByLabelText("add Firearms skill"),
    ).toBeInTheDocument()

    await userEvent.click(screen.getByLabelText("add Firearms skill"))

    await waitFor(() => {
      expect(runnerFromDB(2).skills.Firearms).toEqual({
        rating: 1,
        attribute: {
          primary: "Agility",
        },
      })
    })
  })

  it("should remove a skill", async () => {
    setup()

    expect(await screen.findByLabelText("add Con skill")).toBeInTheDocument()

    await userEvent.click(screen.getByLabelText("add Con skill"))

    expect(await screen.findByLabelText("remove Con skill")).toBeInTheDocument()

    expect(runnerFromDB(2).skills.Con).toEqual({
      rating: 1,
      attribute: {
        primary: "Charisma",
      },
    })

    await userEvent.click(screen.getByLabelText("remove Con skill"))

    expect(screen.queryByLabelText("remove Con skill")).not.toBeInTheDocument()
    expect(runnerFromDB(2).skills.Con).toBeUndefined()
  })

  describe("rating slider", () => {
    it("should update the rating of the skill", async () => {
      setup()

      expect(
        await screen.findByLabelText("add Cracking skill"),
      ).toBeInTheDocument()

      await userEvent.click(screen.getByLabelText("add Cracking skill"))

      expect(screen.getByTestId("Cracking-rating")).toBeInTheDocument()
      expect(runnerFromDB(2).skills.Cracking).toEqual({
        rating: 1,
        attribute: {
          primary: "Logic",
        },
      })

      SliderHelper.change(screen.getByTestId("Cracking-rating"), 5, 1, 6)

      await waitFor(() => {
        expect(runnerFromDB(2).skills.Cracking).toEqual({
          rating: 5,
          attribute: {
            primary: "Logic",
          },
        })
      })
    })
  })

  describe("specialization", () => {
    it("should set the specialization in indexedDB", async () => {
      setup()

      expect(
        await screen.findByLabelText("add Close combat skill"),
      ).toBeInTheDocument()

      await userEvent.click(screen.getByLabelText("add Close combat skill"))

      expect(screen.getByTestId("Close-combat-rating")).toBeInTheDocument()

      expect(runnerFromDB(2).skills["Close combat"]).toEqual({
        rating: 1,
        attribute: {
          primary: "Agility",
        },
      })

      const specInput = screen.getByLabelText("Close combat specialization")

      await userEvent.click(specInput)
      await userEvent.keyboard("Blades{enter}")

      expect(runnerFromDB(2).skills["Close combat"].specialization).toEqual(
        "Blades",
      )
    })
  })

  it("should warn the user if skill priority isn't set", async () => {
    setup("1")

    expect(
      await screen.findByText("You need to set the skills priority"),
    ).toBeInTheDocument()
  })
})
