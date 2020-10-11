import {
  getByLabelText,
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  SliderHelper,
  searchRegexInNodes,
} from "../../../test/testUtils"
import { initRunnerAttributes } from "../../../types/runner"
import { Metatype } from "./index"

describe("<Metatype/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<Metatype />, { query: { id: "3" } }))

  it("should have a radio buttons with the metatypes", async () => {
    const { getByRole, queryByText } = setup()

    await waitFor(() => {
      const metatypeRadio = getByRole("radiogroup", { name: "metatypes" })

      expect(getByLabelText(metatypeRadio, "Human")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Dwarf")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Elf")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Ork")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Troll")).toBeInTheDocument()

      // if metatype is not selected attributes should not display
      expect(queryByText("Body")).not.toBeInTheDocument()
      expect(queryByText("Agility")).not.toBeInTheDocument()
      expect(queryByText("Reaction")).not.toBeInTheDocument()
      expect(queryByText("Strength")).not.toBeInTheDocument()
      expect(queryByText("Willpower")).not.toBeInTheDocument()
      expect(queryByText("Logic")).not.toBeInTheDocument()
      expect(queryByText("Intuition")).not.toBeInTheDocument()
      expect(queryByText("Charisma")).not.toBeInTheDocument()
      expect(queryByText("Edge")).not.toBeInTheDocument()
    })
  })

  it("should save the metatype selection and set attributes to initial state", async () => {
    const { getByRole } = setup()

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records[2].value.metatype
    ).toBeUndefined()

    await waitFor(() => {
      const metatypeRadio = getByRole("radiogroup", { name: "metatypes" })
      getByLabelText(metatypeRadio, "Ork").click()
    })

    await waitFor(() => {
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records[2].value.metatype
      ).toEqual("Ork")
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records[2].value.attributes
      ).toEqual(initRunnerAttributes)

      const metatypeRadio = getByRole("radiogroup", { name: "metatypes" })
      expect(
        (getByLabelText(metatypeRadio, "Ork") as HTMLInputElement).checked
      ).toBe(true)
    })
  })

  describe("attributes sliders", () => {
    it("should be visible if metatype is selected", async () => {
      const { getByLabelText, getByText } = setup()
      await waitFor(() => {
        getByLabelText("Ork").click()
      })

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.metatype
        ).toEqual("Ork")
      })

      await waitFor(() => {
        expect(getByText("Body")).toBeInTheDocument()
        expect(getByText("Agility")).toBeInTheDocument()
        expect(getByText("Reaction")).toBeInTheDocument()
        expect(getByText("Strength")).toBeInTheDocument()
        expect(getByText("Willpower")).toBeInTheDocument()
        expect(getByText("Logic")).toBeInTheDocument()
        expect(getByText("Intuition")).toBeInTheDocument()
        expect(getByText("Charisma")).toBeInTheDocument()
        expect(getByText("Edge")).toBeInTheDocument()
      })
    })

    describe("adjustment points", () => {
      it("should update indexedDB", async () => {
        const { getByTestId, getByText } = setup()

        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.attributes
        ).toEqual(initRunnerAttributes)
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.metatype
        ).toEqual("Ork")

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Adjustment Points4/))
          ).toBeInTheDocument()
          SliderHelper.change(getByTestId("Body-slider"), 3, 1, 9)
        })

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Adjustment Points2/))
          ).toBeInTheDocument()
        })

        await waitFor(() => {
          expect(
            indexedDB._databases.get("omae").rawObjectStores.get("runners")
              .records.records[2].value.attributes.Body
          ).toEqual({ adjustment: 2, points: 0 })
        })
      })

      it("should not be able to go negative", async () => {
        const { getByTestId, getByLabelText, getByText } = setup()

        // Test to see if you spend adjustment first and then attribute points
        await waitFor(() => {
          expect(getByLabelText("Dwarf")).toBeInTheDocument()
          expect(getByLabelText("Spend Points")).toBeInTheDocument()
        })

        getByLabelText("Dwarf").click()
        SliderHelper.change(getByTestId("Willpower-slider"), 4, 1, 7)

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Adjustment Points1/))
          ).toBeInTheDocument()
        })

        getByLabelText("Spend Points").click()

        SliderHelper.change(getByTestId("Willpower-slider"), 7, 1, 7)

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Attribute Points9/))
          ).toBeInTheDocument()
        })

        getByLabelText("Spend Points").click()

        SliderHelper.change(getByTestId("Willpower-slider"), 1, 1, 7)

        await waitFor(() => {
          expect(
            indexedDB._databases.get("omae").rawObjectStores.get("runners")
              .records.records[2].value.attributes.Willpower
          ).toEqual({ adjustment: 0, points: 3 })

          expect(
            getByTestId("Willpower-slider").querySelector("input").value
          ).toEqual("4")
        })
      })
    })

    it("should set the appropriate attribute on the character", async () => {
      const { getByTestId, getByLabelText, getByText } = setup()

      await waitFor(() => {
        expect(getByLabelText("Troll")).toBeInTheDocument()
        expect(getByLabelText("Spend Points")).toBeInTheDocument()
      })

      getByLabelText("Troll").click()
      getByLabelText("Spend Points").click()

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.attributes
        ).toEqual(initRunnerAttributes)
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.metatype
        ).toEqual("Troll")
      })

      await waitFor(() => {
        expect(
          getByText(searchRegexInNodes(/Attribute Points12/))
        ).toBeInTheDocument()
        SliderHelper.change(getByTestId("Body-slider"), 7, 1, 9)
      })

      await waitFor(() => {
        expect(
          getByText(searchRegexInNodes(/Attribute Points6/))
        ).toBeInTheDocument()
      })

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.attributes.Body
        ).toEqual({ adjustment: 0, points: 6 })
      })
    })

    it("should set both adjustment and attribute points on the same attribute", async () => {
      const { getByTestId, getByLabelText, getByText } = setup()

      // Test to see if you spend adjustment first and then attribute points
      await waitFor(() => {
        expect(getByLabelText("Elf")).toBeInTheDocument()
        expect(getByLabelText("Spend Points")).toBeInTheDocument()
      })

      getByLabelText("Elf").click()

      SliderHelper.change(getByTestId("Agility-slider"), 3, 1, 7)

      await waitFor(() => {
        expect(
          getByText(searchRegexInNodes(/Adjustment Points2/))
        ).toBeInTheDocument()
      })

      getByLabelText("Spend Points").click()

      SliderHelper.change(getByTestId("Agility-slider"), 7, 1, 7)

      await waitFor(() => {
        expect(
          getByText(searchRegexInNodes(/Attribute Points8/))
        ).toBeInTheDocument()
      })

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.attributes.Agility
        ).toEqual({ adjustment: 2, points: 4 })
      })

      // Test to see if you spend attribute first and then adjustment
      SliderHelper.change(getByTestId("Charisma-slider"), 2, 1, 8)
      getByLabelText("Spend Points").click()

      await waitFor(() => {
        expect(
          getByText(searchRegexInNodes(/Attribute Points7/))
        ).toBeInTheDocument()
      })

      SliderHelper.change(getByTestId("Charisma-slider"), 4, 1, 8)

      await waitFor(() => {
        expect(
          getByText(searchRegexInNodes(/Adjustment Points0/))
        ).toBeInTheDocument()
      })

      await waitFor(() => {
        expect(
          indexedDB._databases.get("omae").rawObjectStores.get("runners")
            .records.records[2].value.attributes.Charisma
        ).toEqual({ adjustment: 2, points: 1 })
      })
    })
  })
})
