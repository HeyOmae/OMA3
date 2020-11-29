import { render } from "../../../../test/testUtils"
import meleeData from "../../../../data/melee.json"
import { MeleeWeapons } from "./index"

describe("<MeleeWeapons/>", () => {
  const setup = () => {
    return render(<MeleeWeapons />)
  }

  it("should display the melee weapons", () => {
    const { getByText } = setup()
    meleeData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
