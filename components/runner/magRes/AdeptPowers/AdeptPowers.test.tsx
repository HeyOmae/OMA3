import { AdeptPowers, Props } from "./index"
import { render, getByText as globalGetByText, closest } from "@/test/testUtils"
import PowersData from "@/data/adeptPowers"
import { SET_POWER } from ".."

describe("<AdpetPowers/>", () => {
  const setup = () => {
    const props: Props = {
      dispatch: jest.fn(),
    }
    return { ...render(<AdeptPowers {...props} />), props }
  }
  it("should render the adept powers", () => {
    const { getByText } = setup()

    PowersData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  it("should display the cost per level", () => {
    const { getByText } = setup()

    const levelPower = closest(getByText("Adrenaline Boost"), "tr")

    expect(globalGetByText(levelPower, "0.25 per level")).toBeInTheDocument()

    const nonLevelPower = closest(getByText("Astral Perception"), "tr")

    expect(globalGetByText(nonLevelPower, "1")).toBeInTheDocument()
  })

  it("should dispatch the set adept power action", () => {
    const { getByLabelText, props } = setup()

    getByLabelText("Add Astral Perception").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: SET_POWER,
      payload: {
        power: PowersData[1],
      },
    })
  })

  it("should show the page reference for each power", () => {
    const { getByText } = setup()

    const mysticArmor = closest(getByText("Mystic Armor"), "tr")
    expect(globalGetByText(mysticArmor, "SR6 Berlin p.157")).toBeInTheDocument()
  })
})
