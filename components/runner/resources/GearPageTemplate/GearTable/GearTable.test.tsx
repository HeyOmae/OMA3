import { render, SliderHelper, userEvent } from "@/test/testUtils"
import { GearTools, GearTyped, GearWeaponMelee } from "@/types/Resources"
import {
  addMeleeTableConfig,
  removeMeleeTableConfig,
} from "../../MeleeWeapons/meleeTableConfig"
import {
  DispatchContext,
  gearRatingTableConfigOption,
  gearTableConfigOptions,
  gearToolsConfigOptionSetSkill,
} from "../../util"
import { GearTable, Props } from "."
import { otherElectronics } from "@/data/electronics"
import { tools } from "@/data/tools"

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

    it("should dispatch the add action", async () => {
      const { getByLabelText, props, dispatch } = setup()

      await userEvent.click(getByLabelText("Add Combat Axe"))

      expect(dispatch).toHaveBeenCalledWith({
        type: undefined,
        payload: props.listOfGear[0],
      })
    })

    it("should dispatch the remove action", async () => {
      const { getByLabelText, dispatch } = setup({
        cols: removeMeleeTableConfig,
      })

      await userEvent.click(getByLabelText("Remove Combat Axe"))

      expect(dispatch).toHaveBeenCalledWith({
        type: undefined,
        payload: 0,
      })
    })
  })

  describe("gear with rating", () => {
    const headJammer = otherElectronics[2],
      bugScanner = otherElectronics[0]
    const setup = () => {
      const dispatch = jest.fn()
      const props: Props<GearTyped> = {
        listOfGear: [headJammer, bugScanner],
        cols: [
          gearTableConfigOptions.buy,
          gearRatingTableConfigOption.setRating,
        ],
      }
      return {
        ...render(
          <DispatchContext.Provider value={dispatch}>
            <GearTable<GearTyped> {...props} />
          </DispatchContext.Provider>,
        ),
        dispatch,
        props,
      }
    }
    it("should display a slider for gear with rating and while buying", async () => {
      const { getByLabelText, queryByTestId, dispatch } = setup()

      expect(getByLabelText("Add Headjammer")).toBeInTheDocument()
      expect(queryByTestId("Headjammer-rating")).toBeInTheDocument()

      SliderHelper.change(queryByTestId("Headjammer-rating"), 6, 1, 6)
      await userEvent.click(getByLabelText("Add Headjammer"))
      expect(dispatch).toHaveBeenCalledWith({
        type: undefined,
        payload: { ...headJammer, currentRating: 6, cost: 900 },
      })

      expect(getByLabelText("Add Bug Scanner")).toBeInTheDocument()
      expect(queryByTestId("Bug Scanner-rating")).not.toBeInTheDocument()
      await userEvent.click(getByLabelText("Add Bug Scanner"))
      expect(dispatch).toHaveBeenCalledWith({
        type: undefined,
        payload: bugScanner,
      })
    })
  })

  describe("tools", () => {
    const setup = () => {
      const props: Props<GearTools> = {
          listOfGear: tools,
          cols: [
            gearTableConfigOptions.buy,
            gearTableConfigOptions.name,
            gearToolsConfigOptionSetSkill,
          ],
        },
        dispatch = jest.fn()
      return {
        ...render(
          <DispatchContext.Provider value={dispatch}>
            <GearTable<GearTools> {...props} />
          </DispatchContext.Provider>,
        ),
        props,
        dispatch,
      }
    }

    it("should display a skill name in the tool's name", async () => {
      const { getByText, getAllByText, getByLabelText, props, dispatch } =
        setup()

      await userEvent.click(getAllByText("Astral")[1])
      await userEvent.click(getByText("Engineering"))
      await userEvent.click(getByLabelText("Add Engineering Shop"))

      expect(dispatch).toHaveBeenCalledWith({
        type: undefined,
        payload: {
          ...props.listOfGear[1],
          name: "Engineering Shop",
        },
      })
    })
  })
})
