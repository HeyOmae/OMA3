import { AdeptPowers, Props } from "./index"
import { render, getByText as globalGetByText } from "@/test/testUtils"
import PowersData from "@/data/adeptPowers.json"
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

    const levelPower = getByText("Adrenaline Boost").closest("tr")

    expect(globalGetByText(levelPower, "0.25 per level")).toBeInTheDocument()

    const nonLevelPower = getByText("Astral Perception").closest("tr")

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
})
