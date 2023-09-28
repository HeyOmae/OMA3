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
  const setup = (id = "3") => {
    const user = userEvent.setup()
    render(withTestRouter(<Skills />, { query: { id } }))
    return user
  }

  it("should display a list of skills", async () => {
    setup()

    expect(await screen.findByText("Astral")).toBeInTheDocument()
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

    await screen.findByRole("term", { name: "Skill Points" })
    expect(
      screen.getByRole("definition", { name: "Skill Points Value" }),
    ).toHaveTextContent("4/20")
  })

  it("should add a skill at rating 1 to the runner skills", async () => {
    const user = setup()

    expect(runnerFromDB(2).skills).toBeUndefined()

    await user.click(await screen.findByLabelText("add Firearms skill"))

    await waitFor(() => {
      expect(runnerFromDB(2).skills.Firearms).toEqual({
        rating: 1,
        karmaRating: 0,
        attribute: {
          primary: "Agility",
        },
      })
    })
  })

  it("should remove a skill", async () => {
    const user = setup()

    await user.click(await screen.findByLabelText("add Con skill"))

    expect(await screen.findByLabelText("remove Con skill")).toBeInTheDocument()

    expect(runnerFromDB(2).skills.Con).toEqual({
      rating: 1,
      karmaRating: 0,
      attribute: {
        primary: "Charisma",
      },
    })

    await user.click(screen.getByLabelText("remove Con skill"))

    expect(screen.queryByLabelText("remove Con skill")).not.toBeInTheDocument()
    expect(runnerFromDB(2).skills.Con).toBeUndefined()
  })

  describe("rating slider", () => {
    it("should update the rating of the skill", async () => {
      const user = setup()

      await user.click(await screen.findByLabelText("add Cracking skill"))

      expect(screen.getByTestId("Cracking-rating")).toBeInTheDocument()
      expect(runnerFromDB(2).skills.Cracking).toEqual({
        rating: 1,
        karmaRating: 0,
        attribute: {
          primary: "Logic",
        },
      })

      SliderHelper.change(screen.getByTestId("Cracking-rating"), 5, 1, 6)

      await waitFor(() => {
        expect(runnerFromDB(2).skills.Cracking).toEqual({
          rating: 5,
          karmaRating: 0,
          attribute: {
            primary: "Logic",
          },
        })
      })
    })

    test("Aptitude should raise the max for a skill", async () => {
      const user = setup("4")

      await user.click(await screen.findByLabelText("add Cracking skill"))

      SliderHelper.change(screen.getByTestId("Cracking-rating"), 7, 1, 7)

      await waitFor(() => {
        expect(runnerFromDB(3).skills.Cracking).toEqual({
          rating: 7,
          karmaRating: 0,
          attribute: {
            primary: "Logic",
          },
        })
      })
    })
  })

  describe("specialization", () => {
    it("should set the specialization in indexedDB", async () => {
      const user = setup()

      expect(
        await screen.findByLabelText("add Close combat skill"),
      ).toBeInTheDocument()

      await user.click(screen.getByLabelText("add Close combat skill"))

      expect(screen.getByTestId("Close-combat-rating")).toBeInTheDocument()

      expect(runnerFromDB(2).skills["Close combat"]).toEqual({
        rating: 1,
        karmaRating: 0,
        attribute: {
          primary: "Agility",
        },
      })

      const specInput = screen.getByLabelText("Close combat specialization")

      await user.click(specInput)
      await user.keyboard("Blades{enter}")

      expect(runnerFromDB(2).skills["Close combat"].specialization).toEqual(
        "Blades",
      )
    })
  })

  test("expertise", async () => {
    const user = setup("10")

    expect(
      await screen.findByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("38")

    await user.click(screen.getByRole("button", { name: "add Firearms skill" }))

    expect(
      screen.queryByRole("combobox", { name: "Firearms expertise" }),
    ).not.toBeInTheDocument()

    SliderHelper.change(screen.getByTestId("Firearms-rating"), 5, 1, 6)

    const expertise = screen.getByRole("combobox", {
      name: "Firearms expertise",
    })
    expect(expertise).toBeInTheDocument()

    await user.click(expertise)
    await user.click(screen.getByRole("option", { name: "Automatics" }))

    expect(runnerFromDB(9).skills["Firearms"].expertise).toEqual("Automatics")
    expect(
      screen.getByRole("definition", { name: "Available Karma Value" }),
    ).toHaveTextContent("28")

    SliderHelper.change(screen.getByTestId("Firearms-rating"), 4, 1, 6)
    expect(expertise).toBeInTheDocument()
    // TODO: figure out how to know if the bad-stuff class works
    // expect(expertise).toHaveClass("bad-stuff")
  })

  it("should warn the user if skill priority isn't set", async () => {
    setup("1")

    expect(
      await screen.findByText("You need to set the skills priority"),
    ).toBeInTheDocument()
  })

  describe("Spending Karma", () => {
    test("clicking the karma radio button should spend karma when buying and raising a skill", async () => {
      const user = setup()

      expect(
        await screen.findByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("50")
      expect(
        screen.getByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("16/24")

      await user.click(screen.getByRole("radio", { name: "Karma" }))

      await user.click(screen.getByRole("button", { name: "add Astral skill" }))

      expect(
        screen.getByRole("button", { name: "remove Astral skill" }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("16/24")
      expect(
        screen.getByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("45")

      SliderHelper.change(screen.getByTestId("Astral-rating"), 3, 1, 6)

      expect(
        screen.getByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("16/24")
      expect(
        screen.getByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("20")
    })

    test("should be able to mix between karma and skill point useage", async () => {
      const user = setup()

      expect(
        await screen.findByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("20")
      expect(
        screen.getByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("16/24")

      await user.click(screen.getByRole("radio", { name: "Skill Points" }))

      SliderHelper.change(screen.getByTestId("Astral-rating"), 4, 1, 6)

      expect(
        screen.getByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("15/24")
      expect(
        screen.getByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("5")
      expect(
        screen.getByRole("slider", { name: "Astral rating slider" }),
      ).toHaveValue("4")

      await user.click(screen.getByRole("radio", { name: "Karma" }))

      SliderHelper.change(screen.getByTestId("Astral-rating"), 3, 1, 6)

      expect(
        screen.getByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("15/24")
      expect(
        screen.getByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("25")
      expect(
        screen.getByRole("slider", { name: "Astral rating slider" }),
      ).toHaveValue("3")
    })

    test("runner missing karmaRating in a skill shouldn't crash the program", async () => {
      const user = setup("2")

      expect(
        await screen.findByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("4/20")
      expect(
        screen.getByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("50")
      expect(
        screen.getByRole("slider", { name: "Conjuring rating slider" }),
      ).toHaveValue("6")

      SliderHelper.change(screen.getByTestId("Conjuring-rating"), 5, 1, 6)

      expect(
        screen.getByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("5/20")
      expect(
        screen.getByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("50")
      expect(
        screen.getByRole("slider", { name: "Conjuring rating slider" }),
      ).toHaveValue("5")

      await user.click(screen.getByRole("radio", { name: "Karma" }))

      SliderHelper.change(screen.getByTestId("Conjuring-rating"), 6, 1, 6)

      expect(
        screen.getByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("5/20")
      expect(
        screen.getByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("20")
      expect(
        screen.getByRole("slider", { name: "Conjuring rating slider" }),
      ).toHaveValue("6")
    })

    test("should not be able to go negative in points", async () => {
      const user = setup("9")

      expect(
        await screen.findByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("15/24")
      expect(
        screen.getByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("7")
      expect(
        screen.getByRole("slider", { name: "Tasking rating slider" }),
      ).toHaveValue("3")
      expect(
        screen.getByRole("slider", { name: "Electronics rating slider" }),
      ).toHaveValue("3")

      await user.click(screen.getByRole("radio", { name: "Karma" }))

      SliderHelper.change(screen.getByTestId("Electronics-rating"), 1, 1, 6)

      expect(
        screen.getByRole("slider", { name: "Electronics rating slider" }),
      ).toHaveValue("2")
      expect(
        screen.getByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("22")
      expect(
        screen.getByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("15/24")
      expect(
        screen.getByRole("slider", { name: "Tasking rating slider" }),
      ).toHaveValue("3")

      await user.click(screen.getByRole("radio", { name: "Skill Points" }))

      SliderHelper.change(screen.getByTestId("Tasking-rating"), 1, 1, 6)

      expect(
        screen.getByRole("slider", { name: "Tasking rating slider" }),
      ).toHaveValue("2")
      expect(
        screen.getByRole("definition", {
          name: "Available Karma Value",
        }),
      ).toHaveTextContent("32")
      expect(
        screen.getByRole("definition", { name: "Skill Points Value" }),
      ).toHaveTextContent("16/24")
      expect(
        screen.getByRole("slider", { name: "Electronics rating slider" }),
      ).toHaveValue("2")
    })
  })
})
