import { MeleeWeaponTable, Props } from "."
import { render } from "../../../../../test/testUtils"
import { DispatchContext } from "../../ulti"

describe("<WeaponTable/>", () => {
  const setup = ({
    listOfGear = [
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
    isForSelling,
  }: Partial<Props> = {}) => {
    const props: Props = {
        listOfGear,
        isForSelling,
      },
      dispatch = jest.fn()
    return {
      ...render(
        <DispatchContext.Provider value={dispatch}>
          <MeleeWeaponTable {...props} />
        </DispatchContext.Provider>,
      ),
      props,
      dispatch,
    }
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
    const { getByLabelText, props, dispatch } = setup()

    getByLabelText("Add Combat Axe").click()

    expect(dispatch).toHaveBeenCalledWith({
      type: undefined,
      payload: props.listOfGear[0],
    })
  })

  it("should dispatch the remove action", () => {
    const { getByLabelText, dispatch } = setup({
      isForSelling: true,
    })

    getByLabelText("Remove Combat Axe").click()

    expect(dispatch).toHaveBeenCalledWith({
      type: undefined,
      payload: 0,
    })
  })
})
