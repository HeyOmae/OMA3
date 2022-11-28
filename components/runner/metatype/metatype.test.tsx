import {
  getByLabelText as getContentByLabelText,
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  SliderHelper,
  searchRegexInNodes,
  runnerFromDB,
  userEvent,
} from "@/test/testUtils"
import { initRunnerAttributes } from "@/types/runner"
import { Metatype } from "./index"

describe("<Metatype/>", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "3") =>
    render(withTestRouter(<Metatype />, { query: { id } }))

  describe("select metatype radio buttons", () => {
    it("should have display a radio buttons for each metatype", async () => {
      const { getByRole, queryByText } = setup()

      await waitFor(() => {
        const metatypeRadio = getByRole("radiogroup", { name: "metatypes" })

        expect(
          getContentByLabelText(metatypeRadio, "Human"),
        ).toBeInTheDocument()
        expect(
          getContentByLabelText(metatypeRadio, "Dwarf"),
        ).toBeInTheDocument()
        expect(getContentByLabelText(metatypeRadio, "Elf")).toBeInTheDocument()
        expect(getContentByLabelText(metatypeRadio, "Ork")).toBeInTheDocument()
        expect(
          getContentByLabelText(metatypeRadio, "Troll"),
        ).toBeInTheDocument()

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

    it("should disable human and elf at metatype priority A", async () => {
      const { getByRole, getByLabelText } = setup("11")

      await waitFor(() => {
        expect(
          getByRole("radiogroup", { name: "metatypes" }),
        ).toBeInTheDocument()
      })

      expect(getByLabelText("Human")).toBeDisabled()
      expect(getByLabelText("Elf")).toBeDisabled()
      expect(getByLabelText("Dwarf")).not.toBeDisabled()
      expect(getByLabelText("Ork")).not.toBeDisabled()
      expect(getByLabelText("Troll")).not.toBeDisabled()
    })
  })

  it("should save the metatype selection and set attributes to initial state", async () => {
    const { getByRole } = setup()

    expect(runnerFromDB(2).metatype).toBeUndefined()

    await waitFor(() => {
      getByRole("radiogroup", { name: "metatypes" })
    })
    await userEvent.click(
      getContentByLabelText(
        getByRole("radiogroup", { name: "metatypes" }),
        "Ork",
      ),
    )

    await waitFor(() => {
      expect(runnerFromDB(2).metatype).toEqual("Ork")
      expect(runnerFromDB(2).attributes).toEqual(initRunnerAttributes)

      const metatypeRadio = getByRole("radiogroup", { name: "metatypes" })
      expect(
        (getContentByLabelText(metatypeRadio, "Ork") as HTMLInputElement)
          .checked,
      ).toBe(true)
    })
  })

  describe("attributes sliders", () => {
    it("should be visible if metatype is selected", async () => {
      const { getByLabelText, getByText } = setup()
      await waitFor(() => {
        getByLabelText("Ork")
      })
      await userEvent.click(getByLabelText("Ork"))

      await waitFor(() => {
        expect(runnerFromDB(2).metatype).toEqual("Ork")
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

        expect(runnerFromDB(2).attributes).toEqual(initRunnerAttributes)
        expect(runnerFromDB(2).metatype).toEqual("Ork")

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Adjustment Points4/)),
          ).toBeInTheDocument()
          SliderHelper.change(getByTestId("Body-slider"), 3, 1, 9)
        })

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Adjustment Points2/)),
          ).toBeInTheDocument()
        })

        await waitFor(() => {
          expect(runnerFromDB(2).attributes.Body).toEqual({
            adjustment: 2,
            points: 0,
          })
        })
      })

      it("should not be able to go negative", async () => {
        const { getByTestId, getByLabelText, getByText } = setup()

        // Test to see if you spend adjustment first and then attribute points
        await waitFor(() => {
          expect(getByLabelText("Dwarf")).toBeInTheDocument()
          expect(getByText("Select Points to Use")).toBeInTheDocument()
        })

        await userEvent.click(getByLabelText("Dwarf"))
        SliderHelper.change(getByTestId("Willpower-slider"), 4, 1, 7)

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Adjustment Points1/)),
          ).toBeInTheDocument()
        })

        await userEvent.click(getByLabelText("Adjustment"))

        SliderHelper.change(getByTestId("Willpower-slider"), 7, 1, 7)

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Attribute Points9/)),
          ).toBeInTheDocument()
        })

        await userEvent.click(getByLabelText("Attribute"))

        SliderHelper.change(getByTestId("Willpower-slider"), 1, 1, 7)

        await waitFor(() => {
          expect(runnerFromDB(2).attributes.Willpower).toEqual({
            adjustment: 0,
            points: 3,
          })

          expect(
            getByTestId("Willpower-slider").querySelector("input").value,
          ).toEqual("4")
        })
      })
    })

    describe("spending attribute points", () => {
      it("should set the appropriate attribute on the character", async () => {
        const { getByTestId, getByLabelText, getByText } = setup()

        await waitFor(() => {
          expect(getByLabelText("Troll")).toBeInTheDocument()
          expect(getByText("Select Points to Use")).toBeInTheDocument()
        })

        await userEvent.click(getByLabelText("Troll"))
        await userEvent.click(getByLabelText("Adjustment"))

        await waitFor(() => {
          expect(runnerFromDB(2).attributes).toEqual(initRunnerAttributes)
          expect(runnerFromDB(2).metatype).toEqual("Troll")
        })

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Attribute Points12/)),
          ).toBeInTheDocument()
          SliderHelper.change(getByTestId("Body-slider"), 7, 1, 9)
        })

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Attribute Points6/)),
          ).toBeInTheDocument()
        })

        await waitFor(() => {
          expect(runnerFromDB(2).attributes.Body).toEqual({
            adjustment: 0,
            points: 6,
          })
        })
      })

      it("should not be able to go negative", async () => {
        const { getByTestId, getByLabelText, getByText } = setup()

        // Test to see if you spend adjustment first and then attribute points
        await waitFor(() => {
          expect(getByLabelText("Elf")).toBeInTheDocument()
          expect(getByText("Select Points to Use")).toBeInTheDocument()
        })

        await userEvent.click(getByLabelText("Adjustment"))
        await userEvent.click(getByLabelText("Elf"))
        SliderHelper.change(getByTestId("Agility-slider"), 4, 1, 7)

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Attribute Points9/)),
          ).toBeInTheDocument()
        })

        await userEvent.click(getByLabelText("Attribute"))
        SliderHelper.change(getByTestId("Agility-slider"), 7, 1, 7)

        await waitFor(() => {
          expect(
            getByText(searchRegexInNodes(/Adjustment Points1/)),
          ).toBeInTheDocument()
        })

        await userEvent.click(getByLabelText("Adjustment"))

        SliderHelper.change(getByTestId("Agility-slider"), 1, 1, 7)

        await waitFor(() => {
          expect(runnerFromDB(2).attributes.Agility).toEqual({
            adjustment: 3,
            points: 0,
          })

          expect(
            getByTestId("Agility-slider").querySelector("input").value,
          ).toEqual("4")
        })
      })
    })

    it("should set both adjustment and attribute points on the same attribute", async () => {
      const { getByTestId, getByLabelText, getByText } = setup()

      // Test to see if you spend adjustment first and then attribute points
      await waitFor(() => {
        expect(getByLabelText("Elf")).toBeInTheDocument()
        expect(getByText("Select Points to Use")).toBeInTheDocument()
      })

      await userEvent.click(getByLabelText("Elf"))

      SliderHelper.change(getByTestId("Agility-slider"), 3, 1, 7)

      await waitFor(() => {
        expect(
          getByText(searchRegexInNodes(/Adjustment Points2/)),
        ).toBeInTheDocument()
      })

      await userEvent.click(getByLabelText("Adjustment"))

      SliderHelper.change(getByTestId("Agility-slider"), 7, 1, 7)

      await waitFor(() => {
        expect(
          getByText(searchRegexInNodes(/Attribute Points8/)),
        ).toBeInTheDocument()
      })

      await waitFor(() => {
        expect(runnerFromDB(2).attributes.Agility).toEqual({
          adjustment: 2,
          points: 4,
        })
      })

      // Test to see if you spend attribute first and then adjustment
      SliderHelper.change(getByTestId("Charisma-slider"), 2, 1, 8)
      await userEvent.click(getByLabelText("Attribute"))

      await waitFor(() => {
        expect(
          getByText(searchRegexInNodes(/Attribute Points7/)),
        ).toBeInTheDocument()
      })

      SliderHelper.change(getByTestId("Charisma-slider"), 4, 1, 8)

      await waitFor(() => {
        expect(
          getByText(searchRegexInNodes(/Adjustment Points0/)),
        ).toBeInTheDocument()
      })

      await waitFor(() => {
        expect(runnerFromDB(2).attributes.Charisma).toEqual({
          adjustment: 2,
          points: 1,
        })
      })
    })
  })

  describe("Priority Missing", () => {
    it("should tell the user metatype is not set", async () => {
      const { getByText, queryByRole } = setup("1")

      await waitFor(() => {
        expect(
          queryByRole("radiogroup", { name: "metatypes" }),
        ).not.toBeInTheDocument()
        expect(
          getByText("You need to set the metatype priority"),
        ).toBeInTheDocument()
      })
    })

    it("should tell the user attributes is not set", async () => {
      const { getByText, queryByText, getByRole } = setup("4")

      await waitFor(() => {
        expect(
          getByRole("radiogroup", { name: "metatypes" }),
        ).toBeInTheDocument()

        expect(queryByText("Body")).not.toBeInTheDocument()
        expect(queryByText("Agility")).not.toBeInTheDocument()
        expect(queryByText("Reaction")).not.toBeInTheDocument()
        expect(queryByText("Strength")).not.toBeInTheDocument()
        expect(queryByText("Willpower")).not.toBeInTheDocument()
        expect(queryByText("Logic")).not.toBeInTheDocument()
        expect(queryByText("Intuition")).not.toBeInTheDocument()
        expect(queryByText("Charisma")).not.toBeInTheDocument()
        expect(queryByText("Edge")).not.toBeInTheDocument()

        expect(
          getByText("You need to set the attributes priority"),
        ).toBeInTheDocument()
      })
    })
  })
})
