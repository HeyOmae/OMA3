import { AdeptPowers } from "./index"
import {
  render,
  getByText as globalGetByText,
} from "../../../../test/testUtils"
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

  it("should display the cost per level", () => {
    const { getByText } = setup()

    const levelPower = getByText("Adrenaline boost").closest("tr")

    expect(globalGetByText(levelPower, "0.25 per level")).toBeInTheDocument()

    const nonLevelPower = getByText("Astral perception").closest("tr")

    expect(globalGetByText(nonLevelPower, "1")).toBeInTheDocument()
  })
})
