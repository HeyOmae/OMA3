import React from "react"
import Skills from "."
import {
  render,
  withTestRouter,
  setupIndexedDB,
  waitFor,
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
      expect(getByLabelText("add-firearms")).toBeInTheDocument()
    })

    getByLabelText("add-firearms").click()

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
})
