import React from "react"
import { render, withTestRouter, setupIndexedDB } from "../testUtils"
import { Info } from "../../pages/[id]/info"

describe("info page", () => {
  beforeAll((done) => {
    setupIndexedDB(done)
  })
  const setup = () => {
    return render(withTestRouter(<Info />, { pathname: "/[id]", asPath: "/3" }))
  }
  it("should have an input for the players information", () => {
    const { getByLabelText } = setup()

    getByLabelText("Runner's name *")
    getByLabelText("Runner's description")
  })
})
