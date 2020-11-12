import { AdeptPowers } from "./index"
import { render } from "../../../../test/testUtils"
import PowersData from "../../../../data/adeptPowers.json"

describe("<AdpetPowers/>", () => {
  const setup = () => {
    return render(<AdeptPowers />)
  }
  it("should render the adept powers", () => {
    const { getByText } = setup()

    PowersData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
