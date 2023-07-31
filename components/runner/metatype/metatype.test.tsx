import {
  getByLabelText as getContentByLabelText,
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  SliderHelper,
  runnerFromDB,
  userEvent,
  screen,
} from "@/test/testUtils"
import { initRunnerAttributes } from "@/types/runner"
import { Metatype } from "./index"

describe("<Metatype/>", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "3") => {
    const user = userEvent.setup()
    render(withTestRouter(<Metatype />, { query: { id } }))
    return user
  }

  describe("select metatype radio buttons", () => {
    it("should have display a radio buttons for each metatype", async () => {
      setup()

      const metatypeRadio = await screen.findByRole("radiogroup", {
        name: "metatypes",
      })

      expect(metatypeRadio).toHaveTextContent("Human")
      expect(metatypeRadio).toHaveTextContent("Dwarf")
      expect(metatypeRadio).toHaveTextContent("Elf")
      expect(metatypeRadio).toHaveTextContent("Ork")
      expect(metatypeRadio).toHaveTextContent("Troll")

      // if metatype is not selected attributes should not display
      expect(screen.queryByText("Body")).not.toBeInTheDocument()
      expect(screen.queryByText("Agility")).not.toBeInTheDocument()
      expect(screen.queryByText("Reaction")).not.toBeInTheDocument()
      expect(screen.queryByText("Strength")).not.toBeInTheDocument()
      expect(screen.queryByText("Willpower")).not.toBeInTheDocument()
      expect(screen.queryByText("Logic")).not.toBeInTheDocument()
      expect(screen.queryByText("Intuition")).not.toBeInTheDocument()
      expect(screen.queryByText("Charisma")).not.toBeInTheDocument()
      expect(screen.queryByText("Edge")).not.toBeInTheDocument()
    })

    it("should disable human and elf at metatype priority A", async () => {
      setup("11")

      expect(
        await screen.findByRole("radiogroup", { name: "metatypes" }),
      ).toBeInTheDocument()

      expect(screen.getByLabelText("Human")).toBeDisabled()
      expect(screen.getByLabelText("Elf")).toBeDisabled()
      expect(screen.getByLabelText("Dwarf")).not.toBeDisabled()
      expect(screen.getByLabelText("Ork")).not.toBeDisabled()
      expect(screen.getByLabelText("Troll")).not.toBeDisabled()
    })
  })

  it("should save the metatype selection and set attributes to initial state", async () => {
    setup()

    expect(runnerFromDB(2).metatype).toBeUndefined()

    await waitFor(() => {
      screen.getByRole("radiogroup", { name: "metatypes" })
    })
    await userEvent.click(
      getContentByLabelText(
        screen.getByRole("radiogroup", { name: "metatypes" }),
        "Ork",
      ),
    )

    await waitFor(() => {
      expect(runnerFromDB(2).metatype).toEqual("Ork")
    })
    expect(runnerFromDB(2).attributes).toEqual(initRunnerAttributes)

    const metatypeRadio = screen.getByRole("radiogroup", {
      name: "metatypes",
    })
    expect(
      (getContentByLabelText(metatypeRadio, "Ork") as HTMLInputElement).checked,
    ).toBe(true)
  })

  describe("attributes sliders", () => {
    it("should be visible if metatype is selected", async () => {
      setup()

      expect(await screen.findByLabelText("Ork")).toBeInTheDocument()

      await userEvent.click(screen.getByLabelText("Ork"))

      await waitFor(() => {
        expect(runnerFromDB(2).metatype).toEqual("Ork")
      })

      expect(screen.getByText("Body")).toBeInTheDocument()
      expect(screen.getByText("Agility")).toBeInTheDocument()
      expect(screen.getByText("Reaction")).toBeInTheDocument()
      expect(screen.getByText("Strength")).toBeInTheDocument()
      expect(screen.getByText("Willpower")).toBeInTheDocument()
      expect(screen.getByText("Logic")).toBeInTheDocument()
      expect(screen.getByText("Intuition")).toBeInTheDocument()
      expect(screen.getByText("Charisma")).toBeInTheDocument()
      expect(screen.getByText("Edge")).toBeInTheDocument()
    })

    describe("adjustment points", () => {
      it("should update indexedDB", async () => {
        const user = setup()

        expect(runnerFromDB(2).attributes).toEqual(initRunnerAttributes)
        expect(runnerFromDB(2).metatype).toEqual("Ork")

        expect(
          await screen.findByRole("definition", {
            name: "Adjustment Points Value",
          }),
        ).toHaveTextContent("4")
        await user.click(screen.getByRole("radio", { name: "Adjustment" }))
        expect(screen.getByRole("radio", { name: "Adjustment" })).toBeChecked()
        SliderHelper.change(screen.getByTestId("Body-slider"), 3, 1, 9)

        expect(
          await screen.findByRole("definition", {
            name: "Adjustment Points Value",
          }),
        ).toHaveTextContent("2")

        await waitFor(() => {
          expect(runnerFromDB(2).attributes.Body).toEqual({
            adjustment: 2,
            points: 0,
          })
        })
      })

      it("should not be able to go negative", async () => {
        const user = setup()

        // Test to see if you spend adjustment first and then attribute points
        expect(await screen.findByLabelText("Dwarf")).toBeInTheDocument()
        expect(screen.getByText("Select Points to Use")).toBeInTheDocument()

        await user.click(screen.getByLabelText("Dwarf"))
        SliderHelper.change(screen.getByTestId("Willpower-slider"), 4, 1, 7)

        expect(
          screen.getByRole("definition", { name: "Adjustment Points Value" }),
        ).toHaveTextContent("1")

        await user.click(screen.getByLabelText("Attribute"))

        SliderHelper.change(screen.getByTestId("Willpower-slider"), 7, 1, 7)

        expect(
          screen.getByRole("definition", {
            name: "Attribute Points Value",
          }),
        ).toHaveTextContent("9")

        await user.click(screen.getByLabelText("Adjustment"))

        SliderHelper.change(screen.getByTestId("Willpower-slider"), 1, 1, 7)

        await waitFor(() => {
          expect(runnerFromDB(2).attributes.Willpower).toEqual({
            adjustment: 0,
            points: 3,
          })
        })
        expect(
          screen.getByTestId("Willpower-slider").querySelector("input"),
        ).toHaveValue("4")
      })
    })

    describe("spending attribute points", () => {
      it("should set the appropriate attribute on the character", async () => {
        setup()

        expect(await screen.findByLabelText("Troll")).toBeInTheDocument()
        expect(screen.getByText("Select Points to Use")).toBeInTheDocument()

        await userEvent.click(screen.getByLabelText("Troll"))
        await userEvent.click(screen.getByLabelText("Attribute"))

        await waitFor(() => {
          expect(runnerFromDB(2).attributes).toEqual(initRunnerAttributes)
        })
        expect(runnerFromDB(2).metatype).toEqual("Troll")

        expect(
          screen.getByRole("definition", { name: "Attribute Points Value" }),
        ).toHaveTextContent("12")

        SliderHelper.change(screen.getByTestId("Body-slider"), 7, 1, 9)

        expect(
          screen.getByRole("definition", { name: "Attribute Points Value" }),
        ).toHaveTextContent("6")

        await waitFor(() => {
          expect(runnerFromDB(2).attributes.Body).toEqual({
            adjustment: 0,
            points: 6,
          })
        })
      })

      it("should not be able to go negative", async () => {
        const user = setup()

        // Test to see if you spend adjustment first and then attribute points
        expect(await screen.findByLabelText("Elf")).toBeInTheDocument()
        expect(screen.getByText("Select Points to Use")).toBeInTheDocument()

        await user.click(screen.getByLabelText("Attribute"))
        await user.click(screen.getByLabelText("Elf"))
        SliderHelper.change(screen.getByTestId("Agility-slider"), 4, 1, 7)

        expect(
          screen.getByRole("definition", { name: "Attribute Points Value" }),
        ).toHaveTextContent("9")

        await user.click(screen.getByLabelText("Adjustment"))
        SliderHelper.change(screen.getByTestId("Agility-slider"), 7, 1, 7)

        expect(
          screen.getByRole("definition", { name: "Adjustment Points Value" }),
        ).toHaveTextContent("1")

        await user.click(screen.getByLabelText("Attribute"))

        SliderHelper.change(screen.getByTestId("Agility-slider"), 1, 1, 7)

        await waitFor(() => {
          expect(runnerFromDB(2).attributes.Agility).toEqual({
            adjustment: 3,
            points: 0,
          })

          expect(
            screen.getByTestId("Agility-slider").querySelector("input"),
          ).toHaveValue("4")
        })
      })
    })

    it("should set both adjustment and attribute points on the same attribute", async () => {
      const user = setup()

      // Test to see if you spend adjustment first and then attribute points
      expect(await screen.findByLabelText("Dwarf")).toBeInTheDocument()
      expect(screen.getByLabelText("Dwarf")).not.toBeChecked()
      expect(screen.getByText("Select Points to Use")).toBeInTheDocument()

      await user.click(screen.getByLabelText("Dwarf"))
      expect(screen.getByLabelText("Dwarf")).toBeChecked()
      await user.click(screen.getByLabelText("Adjustment"))
      expect(
        screen.getByRole("definition", { name: "Adjustment Points Value" }),
      ).toHaveTextContent("4")
      expect(
        screen.getByRole("definition", { name: "Attribute Points Value" }),
      ).toHaveTextContent("12")

      SliderHelper.change(screen.getByTestId("Willpower-slider"), 3, 1, 7)

      expect(
        screen.getByRole("definition", { name: "Attribute Points Value" }),
      ).toHaveTextContent("12")
      expect(
        screen.getByRole("definition", { name: "Adjustment Points Value" }),
      ).toHaveTextContent("2")

      await user.click(screen.getByLabelText("Attribute"))

      SliderHelper.change(screen.getByTestId("Willpower-slider"), 6, 1, 7)

      expect(
        screen.getByRole("definition", { name: "Attribute Points Value" }),
      ).toHaveTextContent("9")
      expect(
        screen.getByRole("definition", { name: "Adjustment Points Value" }),
      ).toHaveTextContent("2")

      await waitFor(() => {
        expect(runnerFromDB(2).attributes.Willpower).toEqual({
          adjustment: 2,
          points: 3,
        })
      })

      expect(
        screen.getByRole("definition", { name: "Attribute Points Value" }),
      ).toHaveTextContent("9")
      expect(
        screen.getByRole("definition", { name: "Adjustment Points Value" }),
      ).toHaveTextContent("2")

      // Test to see if you spend attribute first and then adjustment
      SliderHelper.change(screen.getByTestId("Strength-slider"), 2, 1, 8)
      await user.click(screen.getByLabelText("Adjustment"))

      expect(
        screen.getByRole("definition", { name: "Attribute Points Value" }),
      ).toHaveTextContent("8")
      expect(
        screen.getByRole("definition", { name: "Adjustment Points Value" }),
      ).toHaveTextContent("2")

      SliderHelper.change(screen.getByTestId("Strength-slider"), 4, 1, 8)

      expect(
        screen.getByRole("definition", { name: "Attribute Points Value" }),
      ).toHaveTextContent("8")
      expect(
        await screen.findByRole("definition", {
          name: "Adjustment Points Value",
        }),
      ).toHaveTextContent("0")

      await waitFor(() => {
        expect(runnerFromDB(2).attributes.Strength).toEqual({
          adjustment: 2,
          points: 1,
        })
      })
    })
  })

  describe("Priority Missing", () => {
    it("should tell the user metatype is not set", async () => {
      setup("1")

      expect(
        await screen.findByText("You need to set the metatype priority"),
      ).toBeInTheDocument()

      expect(
        screen.queryByRole("radiogroup", { name: "metatypes" }),
      ).not.toBeInTheDocument()
    })

    it("should tell the user attributes is not set", async () => {
      setup("4")

      expect(
        await screen.findByRole("radiogroup", { name: "metatypes" }),
      ).toBeInTheDocument()

      expect(screen.queryByText("Body")).not.toBeInTheDocument()
      expect(screen.queryByText("Agility")).not.toBeInTheDocument()
      expect(screen.queryByText("Reaction")).not.toBeInTheDocument()
      expect(screen.queryByText("Strength")).not.toBeInTheDocument()
      expect(screen.queryByText("Willpower")).not.toBeInTheDocument()
      expect(screen.queryByText("Logic")).not.toBeInTheDocument()
      expect(screen.queryByText("Intuition")).not.toBeInTheDocument()
      expect(screen.queryByText("Charisma")).not.toBeInTheDocument()
      expect(screen.queryByText("Edge")).not.toBeInTheDocument()

      expect(
        screen.getByText("You need to set the attributes priority"),
      ).toBeInTheDocument()
    })
  })
})
