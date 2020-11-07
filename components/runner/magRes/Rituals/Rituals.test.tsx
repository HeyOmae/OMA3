import { Rituals } from "./index"
import { render } from "../../../../test/testUtils"
import ritualData from "../../../../data/rituals.json"

describe("<Rituals />", () => {
  const setup = () => {
    return render(<Rituals />)
  }

  it("should display the ritual spells", () => {
    const { getByText } = setup()

    ritualData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
