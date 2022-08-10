import React from "react"
import Skills from "."
import {
  render,
  withTestRouter,
  setupIndexedDB,
  waitFor,
  SliderHelper,
  searchRegexInNodes,
  runnerFromDB,
  userEvent,
} from "@/test/testUtils"

describe("<Skills/>", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "3") => {
    return render(withTestRouter(<Skills />, { query: { id } }))
  }

  it("should display a list of skills", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Astral")).toBeInTheDocument()
    })
    expect(getByText("Athletics")).toBeInTheDocument()
    expect(getByText("Biotech")).toBeInTheDocument()
    expect(getByText("Close combat")).toBeInTheDocument()
    expect(getByText("Con")).toBeInTheDocument()
    expect(getByText("Conjuring")).toBeInTheDocument()
    expect(getByText("Cracking")).toBeInTheDocument()
    expect(getByText("Electronics")).toBeInTheDocument()
    expect(getByText("Enchanting")).toBeInTheDocument()
    expect(getByText("Engineering")).toBeInTheDocument()
    expect(getByText("Exotic weapons")).toBeInTheDocument()
    expect(getByText("Firearms")).toBeInTheDocument()
    expect(getByText("Influence")).toBeInTheDocument()
    expect(getByText("Outdoors")).toBeInTheDocument()
    expect(getByText("Perception")).toBeInTheDocument()
    expect(getByText("Piloting")).toBeInTheDocument()
    expect(getByText("Sorcery")).toBeInTheDocument()
    expect(getByText("Stealth")).toBeInTheDocument()
    expect(getByText("Tasking")).toBeInTheDocument()
  })

  it("should display the remaining skill points", async () => {
    const { getByText } = setup("2")

    await waitFor(() => {
      expect(
        getByText(searchRegexInNodes(/Skill Points:4\/20/)),
      ).toBeInTheDocument()
    })
  })

  it("should add a skill at rating 1 to the runner skills", async () => {
    const { getByLabelText } = setup()

    expect(runnerFromDB(2).skills).toBeUndefined()

    await waitFor(() => {
      expect(getByLabelText("add Firearms skill")).toBeInTheDocument()
    })

    await userEvent.click(getByLabelText("add Firearms skill"))

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
    const { getByLabelText, queryByLabelText } = setup()

    await waitFor(() => {
      expect(getByLabelText("add Con skill")).toBeInTheDocument()
    })

    await userEvent.click(getByLabelText("add Con skill"))

    await waitFor(() => {
      expect(getByLabelText("remove Con skill")).toBeInTheDocument()
      expect(runnerFromDB(2).skills.Con).toEqual({
        rating: 1,
        attribute: {
          primary: "Charisma",
        },
      })
    })

    await userEvent.click(getByLabelText("remove Con skill"))

    await waitFor(() => {
      expect(queryByLabelText("remove Con skill")).not.toBeInTheDocument()
      expect(runnerFromDB(2).skills.Con).toBeUndefined()
    })
  })

  describe("rating slider", () => {
    it("should update the rating of the skill", async () => {
      const { getByTestId, getByLabelText } = setup()

      await waitFor(() => {
        expect(getByLabelText("add Cracking skill")).toBeInTheDocument()
      })

      await userEvent.click(getByLabelText("add Cracking skill"))

      await waitFor(() => {
        expect(getByTestId("Cracking-rating")).toBeInTheDocument()
        expect(runnerFromDB(2).skills.Cracking).toEqual({
          rating: 1,
          attribute: {
            primary: "Logic",
          },
        })
      })

      SliderHelper.change(getByTestId("Cracking-rating"), 5, 1, 6)

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
      const { getByLabelText, getByTestId } = setup()

      await waitFor(() => {
        expect(getByLabelText("add Close combat skill")).toBeInTheDocument()
      })

      await userEvent.click(getByLabelText("add Close combat skill"))

      await waitFor(() => {
        expect(getByTestId("Close-combat-rating")).toBeInTheDocument()
        expect(runnerFromDB(2).skills["Close combat"]).toEqual({
          rating: 1,
          attribute: {
            primary: "Agility",
          },
        })
      })

      const specInput = getByLabelText("Close combat specialization")

      await userEvent.click(specInput)
      userEvent.keyboard("Blades{enter}")

      await waitFor(() => {
        expect(runnerFromDB(2).skills["Close combat"].specialization).toEqual(
          "Blades",
        )
      })
    })
  })

  it("should warn the user if skill priority isn't set", async () => {
    const { getByText } = setup("1")

    await waitFor(() => {
      expect(
        getByText("You need to set the skills priority"),
      ).toBeInTheDocument()
    })
  })
})
