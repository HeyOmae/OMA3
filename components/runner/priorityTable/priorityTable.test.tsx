import React from "react"
import {
  render,
  withTestRouter,
  setupIndexedDB,
  waitFor,
} from "../../../test/testUtils"
import { PriorityTable } from "./"

describe("<PriorityTable/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(withTestRouter(<PriorityTable />, { query: { id: "1" } }))
  }

  describe("metatype selection", () => {
    it("should have 5 options", async () => {
      const { getByLabelText } = setup()

      await waitFor(() => {
        expect(getByLabelText("Dwarf, Ork, Troll (13)")).toBeInTheDocument()
        expect(
          getByLabelText("Dwarf, Elf, Ork, Troll (11)")
        ).toBeInTheDocument()
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

    it("should create the priority property for the player when setting metatype", async () => {
      const { getByLabelText } = setup()
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records[0].priority
      ).toBeUndefined()
      await waitFor(() => getByLabelText("Dwarf, Ork, Troll (13)").click())

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[0].value.priority
        ).toEqual({ metatype: "a" })
      })
    })
  })
})
