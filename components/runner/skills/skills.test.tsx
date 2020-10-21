import React from "react"
import Skills from "."
import {
  render,
  withTestRouter,
  setupIndexedDB,
  waitFor,
  SliderHelper,
  fireEvent,
} from "../../../test/testUtils"

describe("<Skills/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(withTestRouter(<Skills />, { query: { id: "3" } }))
  }

  it("should display a list of skills", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      getByText("astral")
      getByText("athletics")
      getByText("biotech")
      getByText("close combat")
      getByText("con")
      getByText("conjuring")
      getByText("cracking")
      getByText("electronics")
      getByText("enchanting")
      getByText("engineering")
      getByText("exotic weapons")
      getByText("firearms")
      getByText("influence")
      getByText("outdoors")
      getByText("perception")
      getByText("piloting")
      getByText("sorcery")
      getByText("stealth")
      getByText("tasking")
    })
  })

  it("should add a skill at rating 1 to the runner skills", async () => {
    const { getByLabelText } = setup()

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records[2].value.skills
    ).toBeUndefined()

    await waitFor(() => {
      expect(getByLabelText("add firearms skill")).toBeInTheDocument()
    })

    getByLabelText("add firearms skill").click()

    await waitFor(() => {
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records[2].value.skills.firearms
      ).toEqual({
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
      expect(getByLabelText("add con skill")).toBeInTheDocument()
    })

    getByLabelText("add con skill").click()

    await waitFor(() => {
      expect(getByLabelText("remove con skill")).toBeInTheDocument()
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records[2].value.skills.con
      ).toEqual({
        rating: 1,
        attribute: {
          primary: "Charisma",
        },
      })
    })

    getByLabelText("remove con skill").click()

    await waitFor(() => {
      expect(queryByLabelText("remove con skill")).not.toBeInTheDocument()
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records[2].value.skills.con
      ).toBeUndefined()
    })
  })

  describe("rating slider", () => {
    it("should update the rating of the skill", async () => {
      const { getByTestId, getByLabelText } = setup()

      await waitFor(() => {
        expect(getByLabelText("add cracking skill")).toBeInTheDocument()
      })

      getByLabelText("add cracking skill").click()

      await waitFor(() => {
        expect(getByTestId("cracking-rating")).toBeInTheDocument()
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.skills.cracking
        ).toEqual({
          rating: 1,
          attribute: {
            primary: "Logic",
          },
        })
      })

      SliderHelper.change(getByTestId("cracking-rating"), 5, 1, 6)

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.skills.cracking
        ).toEqual({
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
        expect(getByLabelText("add close combat skill")).toBeInTheDocument()
      })

      getByLabelText("add close combat skill").click()

      await waitFor(() => {
        expect(getByTestId("close-combat-rating")).toBeInTheDocument()
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.skills["close combat"]
        ).toEqual({
          rating: 1,
          attribute: {
            primary: "Agility",
          },
        })
      })

      const specInput = getByLabelText("close combat specialization")

      fireEvent.change(specInput, { target: { value: "blades" } })
      fireEvent.keyDown(specInput, { key: "Enter" })

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.skills["close combat"].specialization
        ).toEqual("blades")
      })
    })
  })
})
