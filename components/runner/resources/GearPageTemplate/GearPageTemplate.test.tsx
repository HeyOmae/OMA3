import {
  setupIndexedDB,
  render,
  withTestRouter,
  waitFor,
  runnerFromDB,
  userEvent,
} from "@/test/testUtils"
import meleeData from "@/data/melee"
import { GearPageTemplate, Props } from "."
import { RunnerLayout } from "@/components/layout"
import { screen } from "@/test/testUtils"

import {
  addMeleeTableConfig,
  removeMeleeTableConfig,
} from "../MeleeWeapons/meleeTableConfig"

describe("<GearPageTemplate/>", () => {
  describe("<MeleeWeapons/>", () => {
    beforeAll(setupIndexedDB)
    const setup = (
      id = 8,
      { displayEssence }: Partial<Props<"melee">> = {},
    ) => {
      return render(
        withTestRouter(
          <GearPageTemplate
            gearLabel="Melee Weapons"
            resourceKey="melee"
            addGearTableConfig={addMeleeTableConfig}
            listOfGear={meleeData}
            removeGearTableConfig={removeMeleeTableConfig}
            displayEssence={displayEssence}
          />,
          { query: { id: id.toString() } },
        ),
      )
    }

    it("should tell the user what they bought", async () => {
      const user = userEvent.setup()
      render(
        withTestRouter(
          <RunnerLayout>
            <GearPageTemplate
              gearLabel="Melee Weapons"
              resourceKey="melee"
              addGearTableConfig={addMeleeTableConfig}
              listOfGear={meleeData}
              removeGearTableConfig={removeMeleeTableConfig}
            />
          </RunnerLayout>,
          { query: { id: "10" } },
        ),
      )
      const [weapon] = meleeData
      const meleeOwned = runnerFromDB(9).resources?.melee?.length ?? 0

      await user.click(await screen.findByLabelText(`Add ${weapon.name}`))

      expect(
        await screen.findByText(`Bought ${weapon.name}`),
      ).toBeInTheDocument()
      const purchased = await screen.findAllByLabelText(`Remove ${weapon.name}`)
      expect(document.getElementById("purchased-gear")).toContainElement(
        purchased[purchased.length - 1],
      )

      await user.click(purchased[purchased.length - 1])
      await waitFor(() =>
        expect(runnerFromDB(9).resources?.melee ?? []).toHaveLength(meleeOwned),
      )
    })

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

      await userEvent.click(getByLabelText("Add Katana"))
      expect(getByText("7650¥/8000¥")).toBeInTheDocument()

      await waitFor(() => {
        expect(runnerFromDB(7).resources?.melee).toEqual([
          {
            type: "WEAPON CLOSE COMBAT",
            subtype: "BLADES",
            name: "Katana",
            availability: "3",
            cost: 350,
            reference: [{ book: "SR6 Berlin", page: 247 }],
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
      expect(runnerFromDB(9).resources?.melee).toHaveLength(2)

      await userEvent.click(getByLabelText("Remove Katana"))

      await waitFor(() => {
        expect(runnerFromDB(9).resources?.melee).toHaveLength(1)
      })
    })

    describe("displayEssence", () => {
      it("should display remaining essence if set to true", async () => {
        const { getByText } = setup(10, { displayEssence: true })

        await waitFor(() => {
          expect(getByText("Purchased Melee Weapons")).toBeInTheDocument()
        })
        expect(getByText("Essence")).toBeInTheDocument()
        expect(getByText("2.3")).toBeInTheDocument()
      })

      it("should not display essence if not set", async () => {
        const { queryByText } = setup(10)

        await waitFor(() => {
          expect(queryByText("Purchased Melee Weapons")).toBeInTheDocument()
        })
        expect(queryByText("Essnece")).not.toBeInTheDocument()
      })
    })
  })
})
