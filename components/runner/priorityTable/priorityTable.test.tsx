import React from "react"
import { render, withTestRouter } from "../../../test/testUtils"
import { PriorityTable } from "./"

describe("<PriorityTable/>", () => {
  const setup = () => {
    return render(withTestRouter(<PriorityTable />, { query: { id: "1" } }))
  }

  describe("metatype selection", () => {
    it("should have 5 options", () => {
      const { getByLabelText } = setup()

      expect(getByLabelText("Dwarf, Ork, Troll (13)")).toBeInTheDocument()
      expect(getByLabelText("Dwarf, Elf, Ork, Troll (11)")).toBeInTheDocument()
      expect(
        getByLabelText("Dwarf, Elf, Human, Ork, Troll (9)")
      ).toBeInTheDocument()
      expect(
        getByLabelText("Dwarf, Elf, Human, Ork, Troll (4)")
      ).toBeInTheDocument()
      expect(
        getByLabelText("Dwarf, Elf, Human, Ork, Troll (1)")
      ).toBeInTheDocument()
    })
  })
})
