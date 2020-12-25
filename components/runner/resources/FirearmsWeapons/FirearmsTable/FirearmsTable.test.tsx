import { FirearmsRow, FirearmsTable, Props } from "."
import { render } from "../../../../../test/testUtils"
import FirearmsData from "../../../../../data/firearms"
import { AddFirearmsButton } from "./AddFirearmsButton"

describe("<FirearmsTable/>", () => {
  describe("table", () => {
    const setup = () => {
      const props: Props = {
        weapons: FirearmsData,
        dispatch: jest.fn(),
        ActionButton: AddFirearmsButton,
      }
      return { ...render(<FirearmsTable {...props} />), props }
    }
    it("should display all the gunz", () => {
      const { getByText } = setup()

      FirearmsData.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument()
      })
    })

    it("should dispatch the add gun action", () => {
      const { getByLabelText, props } = setup()

      getByLabelText("Add Ares Predator VI").click()

      expect(props.dispatch).toHaveBeenCalledWith({
        type: undefined,
        payload: {
          availability: "2L",
          cost: 750,
          name: "Ares Predator VI",
          useAs: [
            {
              type: "WEAPON FIREARMS",
              subtype: "PISTOLS HEAVY",
            },
          ],
          modifications: {
            itemhookmod: [
              {
                hook: "BARREL",
              },
              {
                hook: "TOP",
              },
            ],
            moditemmod: {
              ref: "smartgun System Internal",
            },
          },
          weapon: {
            ar: [10, 10, 8, 0, 0],
            ammo: "15(c)",
            dv: "3P",
            mode: "SA/BF",
            skill: "Firearms",
            specialization: "pistols",
          },
        },
      })
    })
  })

  describe("row", () => {
    it("should render firearm attributes", () => {
      const { getByText } = render(
        <table>
          <tbody>
            <FirearmsRow weapon={FirearmsData[0]}>
              <button>+</button>
            </FirearmsRow>
          </tbody>
        </table>,
      )

      expect(getByText("Defiance Super Shock")).toBeInTheDocument()
      expect(getByText("6S(e)")).toBeInTheDocument()
      expect(getByText("SS")).toBeInTheDocument()
      expect(getByText("10/6/0/0/0")).toBeInTheDocument()
      expect(getByText("4(m)")).toBeInTheDocument()
      expect(getByText("1")).toBeInTheDocument()
      expect(getByText("340¥")).toBeInTheDocument()
    })
  })
})
