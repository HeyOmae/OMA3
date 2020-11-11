import React from "react"
import Skills from "."
import {
  render,
  withTestRouter,
  setupIndexedDB,
  waitFor,
  SliderHelper,
  fireEvent,
  searchRegexInNodes,
  runnerFromDB,
} from "../../../test/testUtils"

describe("<Skills/>", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "3") => {
    return render(withTestRouter(<Skills />, { query: { id } }))
  }

  it("should display a list of skills", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      getByText("Astral")
      getByText("Athletics")
      getByText("Biotech")
      getByText("Close combat")
      getByText("Con")
      getByText("Conjuring")
      getByText("Cracking")
      getByText("Electronics")
      getByText("Enchanting")
      getByText("Engineering")
      getByText("Exotic weapons")
      getByText("Firearms")
      getByText("Influence")
      getByText("Outdoors")
      getByText("Perception")
      getByText("Piloting")
      getByText("Sorcery")
      getByText("Stealth")
      getByText("Tasking")
    })
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

    getByLabelText("add Firearms skill").click()

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

    getByLabelText("add Con skill").click()

    await waitFor(() => {
      expect(getByLabelText("remove Con skill")).toBeInTheDocument()
      expect(runnerFromDB(2).skills.Con).toEqual({
        rating: 1,
        attribute: {
          primary: "Charisma",
        },
      })
    })

    getByLabelText("remove Con skill").click()

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

      getByLabelText("add Cracking skill").click()

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

      getByLabelText("add Close combat skill").click()

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

      fireEvent.change(specInput, { target: { value: "Blades" } })
      fireEvent.keyDown(specInput, { key: "Enter" })

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
