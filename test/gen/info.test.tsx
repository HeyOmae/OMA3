import React from "react"
import { render } from "@testing-library/react"
import { Info } from "../../pages/gen/info"

describe("info page", () => {
  const setup = () => {
    return render(<Info />)
  }
  it("should have an input for the players information", () => {
    const { getByLabelText, getByText } = setup()

    getByLabelText("Runner's name *")
    getByLabelText("Runner's description")
    getByText("Save")
  })
})
