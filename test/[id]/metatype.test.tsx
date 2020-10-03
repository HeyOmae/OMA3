import { render, withTestRouter } from "../testUtils"
import { MetatypePage } from "../../pages/[id]/metatype"

describe("Metatype Page", () => {
  const setup = () => render(withTestRouter(<MetatypePage />))
  it("should exist", () => {
    const { getByText } = setup()

    expect(getByText("Metatype")).toBeInTheDocument()
  })
})
