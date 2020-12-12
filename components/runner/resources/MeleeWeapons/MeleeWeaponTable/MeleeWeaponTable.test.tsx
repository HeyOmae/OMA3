import { MeleeWeaponTable, Props } from "."
import { BUY_MELEE_WEAPON } from ".."
import { render } from "../../../../../test/testUtils"
import { AddMeleeWeaponButton } from "./AddMeleeWeaponButton"

describe("<WeaponTable/>", () => {
  const setup = ({
    weapons = [
      {
        name: "Combat Axe",
        availability: "4",
        cost: 500,
        useAs: [
          {
            type: "WEAPON CLOSE COMBAT",
            subtype: "BLADES",
          },
          {
            type: "ACCESSORY",
            subtype: "INSTRUMENT WEAPON",
            slot: "INSTRUMENT WEAPON",
            capacity: 1,
            availability: "6",
            cost: 500,
          },
        ],
        weapon: {
          dv: "5P",
          ar: [9, 0, 0, 0, 0],
          skill: "Close Combat",
          specialization: "Blades",
        },
      },
    ],
  }: Partial<Props> = {}) => {
    const props: Props = {
      weapons,
      dispatch: jest.fn(),
      ActionButton: AddMeleeWeaponButton,
    }
    return { ...render(<MeleeWeaponTable {...props} />), props }
  }
  it("should render melee weapon stats", () => {
    const { getByText } = setup()

    expect(getByText("Combat Axe")).toBeInTheDocument()
    expect(getByText("5P")).toBeInTheDocument()
    expect(getByText("9/0/0/0/0")).toBeInTheDocument()
    expect(getByText("4")).toBeInTheDocument()
    expect(getByText("500¥")).toBeInTheDocument()
  })

  it("should dispatch the add action", () => {
    const { getByLabelText, props } = setup()

    getByLabelText("Add Combat Axe").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: BUY_MELEE_WEAPON,
      payload: props.weapons[0],
    })
  })
})
