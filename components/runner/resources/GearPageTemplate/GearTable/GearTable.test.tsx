import { render } from "@/test/testUtils"
import { GearWeaponMelee } from "@/types/Resources"
import {
  addMeleeTableConfig,
  removeMeleeTableConfig,
} from "../../MeleeWeapons/meleeTableConfig"
import { DispatchContext } from "../../util"
import { GearTable, Props } from "."

describe("<GearTable />", () => {
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
      cols = addMeleeTableConfig,
    }: Partial<Props<GearWeaponMelee>> = {}) => {
      const props: Props<GearWeaponMelee> = {
          listOfGear,
          cols,
        },
        dispatch = jest.fn()
      return {
        ...render(
          <DispatchContext.Provider value={dispatch}>
            <GearTable<GearWeaponMelee> {...props} />
          </DispatchContext.Provider>,
        ),
        props,
        dispatch,
      }
    }
    it("should render the table header labels", () => {
      const { getByText } = setup()

      expect(getByText("Buy")).toBeInTheDocument()
      expect(getByText("Name")).toBeInTheDocument()
      expect(getByText("DV")).toBeInTheDocument()
      expect(getByText("AR")).toBeInTheDocument()
      expect(getByText("Avail")).toBeInTheDocument()
      expect(getByText("Cost")).toBeInTheDocument()
    })
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
        cols: removeMeleeTableConfig,
      })

      getByLabelText("Remove Combat Axe").click()

      expect(dispatch).toHaveBeenCalledWith({
        type: undefined,
        payload: 0,
      })
    })
  })
})
