import {
  setupIndexedDB,
  render,
  withTestRouter,
  waitFor,
  runnerFromDB,
} from "@/test/testUtils"
import meleeData from "@/data/melee"
import { GearPageTemplate } from "."
import { GearWeaponMelee } from "types/Resources"
import {
  addMeleeTableConfig,
  removeMeleeTableConfig,
} from "../MeleeWeapons/meleeTableConfig"

describe("<GearPageTemplate/>", () => {
  describe("<MeleeWeapons/>", () => {
    beforeAll(setupIndexedDB)
    const setup = (id = 8) => {
      return render(
        withTestRouter(
          <GearPageTemplate<GearWeaponMelee>
            gearLabel="Melee Weapons"
            resourceKey="melee"
            addGearTableConfig={addMeleeTableConfig}
            listOfGear={meleeData}
            removeGearTableConfig={removeMeleeTableConfig}
          />,
          { query: { id: id.toString() } },
        ),
      )
    }

    it("should have breadcrumbs", async () => {
      const { getByText } = setup()

      await waitFor(() => {
        expect(getByText("Melee Weapons")).toBeInTheDocument()
      })
      expect(getByText("Resources")).toHaveAttribute("href", "/8/resources")
    })

    it("should display the melee weapons", async () => {
      const { getByText } = setup()
      await waitFor(() => {
        expect(getByText("Buy")).toBeInTheDocument()
      })
      meleeData.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument()
      })
    })

    it("purchase melee weapon", async () => {
      const { getByLabelText, getByText } = setup()

      await waitFor(() => {
        expect(getByLabelText("Add Katana")).toBeInTheDocument()
      })
      expect(getByText("8000¥/8000¥")).toBeInTheDocument()

      expect(runnerFromDB(7).resources).toBeUndefined()

      getByLabelText("Add Katana").click()
      expect(getByText("7650¥/8000¥")).toBeInTheDocument()

      await waitFor(() => {
        expect(runnerFromDB(7).resources.melee).toEqual([
          {
            name: "Katana",
            availability: "3",
            cost: 350,
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
                availability: "5",
                cost: 350,
              },
            ],
            weapon: {
              dv: "4P",
              ar: [10, 0, 0, 0, 0],
              skill: "Close Combat",
              specialization: "Blades",
            },
          },
        ])
      })
    })

    it("should display runner melee weapons", async () => {
      const { getByLabelText, getByText } = setup(10)

      await waitFor(() => {
        expect(getByText("Purchased Melee Weapons")).toBeInTheDocument()
      })
      expect(runnerFromDB(9).resources.melee).toHaveLength(2)

      getByLabelText("Remove Katana").click()

      await waitFor(() => {
        expect(runnerFromDB(9).resources.melee).toHaveLength(1)
      })
    })
  })
})
