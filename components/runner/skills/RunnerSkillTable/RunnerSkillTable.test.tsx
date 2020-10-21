import { RunnerSkillTable, Props } from "."
import {
  render,
  within,
  SliderHelper,
  fireEvent,
  getByText as globalGetByText,
} from "../../../../test/testUtils"
import { mockedRunners } from "../../../../test/mocks"
import { CHANGE_SKILL_RATING, CHANGE_SPECIALIZATION, REMOVE_SKILL } from ".."

describe("<RunnerSkillTable/>", () => {
  const setup = (
    props: Props = { skills: mockedRunners[1].skills, dispatch: jest.fn() }
  ) => ({ ...render(<RunnerSkillTable {...props} />), props })

  it("should display a table with the runner's skills", async () => {
    const { getByText } = setup()

    const conjuringRow = within(getByText("conjuring").closest("tr"))
    // rating
    const conjuringRating = await conjuringRow.findByTestId("conjuring-rating")
    expect(conjuringRating.querySelector("input")).toHaveValue("6")
    // attribute
    expect(await conjuringRow.findByText("Magic")).toBeInTheDocument()
    // specialization
    expect(
      await conjuringRow.findByLabelText("conjuring specialization")
    ).toHaveDisplayValue("banishing")

    const sorceryRow = within(getByText("sorcery").closest("tr"))
    // rating
    const sorceryRating = await sorceryRow.findByTestId("sorcery-rating")
    expect(sorceryRating.querySelector("input")).toHaveValue("5")
    // attribute
    expect(await sorceryRow.findByText("Magic")).toBeInTheDocument()
    // specialization
    expect(
      await sorceryRow.findByLabelText("sorcery specialization")
    ).toHaveDisplayValue("")

    const perceptionRow = within(getByText("perception").closest("tr"))
    // rating
    const perceptionRating = await perceptionRow.findByTestId(
      "perception-rating"
    )
    expect(perceptionRating.querySelector("input")).toHaveValue("4")
    // attribute
    expect(
      await perceptionRow.findByText("Intuition/Logic")
    ).toBeInTheDocument()
    // specialization
    expect(
      await perceptionRow.findByLabelText("perception specialization")
    ).toHaveDisplayValue("")
  })

  describe("remove skill button", () => {
    it("should dispatch to remove a skill", () => {
      const { getByLabelText, props } = setup()

      getByLabelText("remove conjuring skill").click()

      expect(props.dispatch).toHaveBeenCalledWith({
        type: REMOVE_SKILL,
        payload: { skillToRemove: "conjuring" },
      })
    })
  })

  it("should adjust skill rating", () => {
    const { getByTestId, props } = setup()

    SliderHelper.change(getByTestId("perception-rating"), 5, 1, 6)

    expect(props.dispatch).toHaveBeenCalledWith({
      type: CHANGE_SKILL_RATING,
      payload: {
        skillToChangeRating: {
          name: "perception",
          rating: 5,
        },
      },
    })
  })

  describe("specialization", () => {
    it("should set specialization from dropdown", async () => {
      const { getByLabelText, props, queryByRole } = setup()
      const specInput = getByLabelText("conjuring specialization")

      expect(queryByRole("listbox")).not.toBeInTheDocument()

      fireEvent.mouseDown(specInput)

      expect(queryByRole("listbox")).toBeInTheDocument()

      fireEvent.click(globalGetByText(queryByRole("listbox"), "summoning"))

      expect(props.dispatch).toHaveBeenCalledWith({
        type: CHANGE_SPECIALIZATION,
        payload: {
          specializationChange: {
            name: "conjuring",
            specialization: "summoning",
          },
        },
      })
    })

    it("should allow free form specialization", () => {
      const { getByLabelText, props } = setup()

      fireEvent.change(getByLabelText("conjuring specialization"), {
        target: { value: "wild" },
      })
      fireEvent.keyDown(getByLabelText("conjuring specialization"), {
        key: "Enter",
      })

      expect(props.dispatch).toHaveBeenCalledWith({
        type: CHANGE_SPECIALIZATION,
        payload: {
          specializationChange: {
            name: "conjuring",
            specialization: "wild",
          },
        },
      })
    })
  })
})
