import MeleePage from "../../../pages/[id]/resources/melee"
import { render, withTestRouter } from "../../testUtils"
import MeleeData from "../../../data/melee"

describe("Melee Page", () => {
  const setup = () => render(withTestRouter(<MeleePage />))
  it("should display the melee weapons", () => {
    const { getByText } = setup()

    expect(getByText("Melee Weapons")).toBeInTheDocument()
    MeleeData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
