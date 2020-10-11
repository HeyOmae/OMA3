import { render, withTestRouter, waitFor, setupIndexedDB } from "../testUtils"
import { MetatypePage } from "../../pages/[id]/metatype"

describe("Metatype Page", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<MetatypePage />, { query: { id: "3" } }))
  it("should exist", async () => {
    const { getByText } = setup()

    expect(getByText("Metatype")).toBeInTheDocument()

    await waitFor(() => {
      expect(getByText("Metatypes")).toBeInTheDocument()
      expect(getByText("Human")).toBeInTheDocument()
      expect(getByText("Dwarf")).toBeInTheDocument()
      expect(getByText("Elf")).toBeInTheDocument()
      expect(getByText("Ork")).toBeInTheDocument()
      expect(getByText("Troll")).toBeInTheDocument()
    })
  })
})
