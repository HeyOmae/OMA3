import { render } from "../../../../test/testUtils"
import FirearmsWeapons from "./"
import FirearmsData from "../../../../data/firearms"

describe("<FirearmsWeapon />", () => {
  const setup = () => render(<FirearmsWeapons />)
  it("should render the guns", () => {
    const { getByText } = setup()

    FirearmsData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
