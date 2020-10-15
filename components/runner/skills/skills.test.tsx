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

  it("should display a list of skills", () => {
    const { getByText } = setup()

    waitFor(() => {
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
})
