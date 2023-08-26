import { render, withTestRouter, setupIndexedDB, screen } from "../testUtils"
import { MetatypePage } from "@/pages/[id]/metatype"

describe("Metatype Page", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<MetatypePage />, { query: { id: "3" } }))
  it("should exist", async () => {
    setup()

    expect(await screen.findByText("Metatypes")).toBeInTheDocument()
    expect(screen.getByText("Human")).toBeInTheDocument()
    expect(screen.getByText("Dwarf")).toBeInTheDocument()
    expect(screen.getByText("Elf")).toBeInTheDocument()
    expect(screen.getByText("Ork")).toBeInTheDocument()
    expect(screen.getByText("Troll")).toBeInTheDocument()
  })
})
