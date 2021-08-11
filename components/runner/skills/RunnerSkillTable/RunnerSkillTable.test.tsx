import { RunnerSkillTable, Props } from "."
import {
  render,
  within,
  SliderHelper,
  fireEvent,
  getByText as globalGetByText,
  searchRegexInNodes,
} from "../../../../test/testUtils"
import { mockedRunners } from "../../../../test/mocks"
import { CHANGE_SKILL_RATING, CHANGE_SPECIALIZATION, REMOVE_SKILL } from ".."

describe("<RunnerSkillTable/>", () => {
  const setup = (
    props: Props = {
      skills: mockedRunners[1].skills,
      skillPoints: 20,
      dispatch: jest.fn(),
    },
  ) => ({ ...render(<RunnerSkillTable {...props} />), props })

  it("should display a table with the runner's skills", async () => {
    const { getByText } = setup()

    const conjuringRow = within(getByText("Conjuring").closest("tr"))
    // rating
    const conjuringRating = await conjuringRow.findByTestId("Conjuring-rating")
    expect(conjuringRating.querySelector("input")).toHaveValue("6")
    // attribute
    expect(await conjuringRow.findByText("Magic")).toBeInTheDocument()
    // specialization
    expect(
      await conjuringRow.findByLabelText("Conjuring specialization"),
    ).toHaveDisplayValue("Banishing")

    const sorceryRow = within(getByText("Sorcery").closest("tr"))
    // rating
    const sorceryRating = await sorceryRow.findByTestId("Sorcery-rating")
    expect(sorceryRating.querySelector("input")).toHaveValue("5")
    // attribute
    expect(await sorceryRow.findByText("Magic")).toBeInTheDocument()
    // specialization
    expect(
      await sorceryRow.findByLabelText("Sorcery specialization"),
    ).toHaveDisplayValue("")

    const perceptionRow = within(getByText("Perception").closest("tr"))
    // rating
    const perceptionRating = await perceptionRow.findByTestId(
      "Perception-rating",
    )
    expect(perceptionRating.querySelector("input")).toHaveValue("4")
    // attribute
    expect(
      await perceptionRow.findByText("Intuition/Logic"),
    ).toBeInTheDocument()
    // specialization
    expect(
      await perceptionRow.findByLabelText("Perception specialization"),
    ).toHaveDisplayValue("")
  })

  describe("remove skill button", () => {
    it("should dispatch to remove a skill", () => {
      const { getByLabelText, props } = setup()

      getByLabelText("remove Conjuring skill").click()

      expect(props.dispatch).toHaveBeenCalledWith({
        type: REMOVE_SKILL,
        payload: { skillToRemove: "Conjuring" },
      })
    })
  })

  it("should adjust skill rating", () => {
    const { getByTestId, props } = setup()

    SliderHelper.change(getByTestId("Perception-rating"), 5, 1, 6)

    expect(props.dispatch).toHaveBeenCalledWith({
      type: CHANGE_SKILL_RATING,
      payload: {
        skillToChangeRating: {
          name: "Perception",
          rating: 5,
        },
      },
    })
  })

  describe("specialization", () => {
    it("should set specialization from dropdown", async () => {
      const { getByLabelText, props, queryByRole } = setup()
      const specInput = getByLabelText("Conjuring specialization")

      expect(queryByRole("listbox")).not.toBeInTheDocument()

      fireEvent.mouseDown(specInput)

      expect(queryByRole("listbox")).toBeInTheDocument()

      fireEvent.click(globalGetByText(queryByRole("listbox"), "Summoning"))

      expect(props.dispatch).toHaveBeenCalledWith({
        type: CHANGE_SPECIALIZATION,
        payload: {
          specializationChange: {
            name: "Conjuring",
            specialization: "Summoning",
          },
        },
      })
    })

    it("should allow free form specialization", () => {
      const { getByLabelText, props } = setup()

      fireEvent.change(getByLabelText("Conjuring specialization"), {
        target: { value: "wild" },
      })
      fireEvent.keyDown(getByLabelText("Conjuring specialization"), {
        key: "Enter",
      })

      expect(props.dispatch).toHaveBeenCalledWith({
        type: CHANGE_SPECIALIZATION,
        payload: {
          specializationChange: {
            name: "Conjuring",
            specialization: "wild",
          },
        },
      })
    })

    it("should not error out when a skill is not listed in the skills.json", () => {
      const { getByLabelText, props } = setup({
        skills: {
          cooking: {
            rating: 5,
            attribute: { primary: "Agility", secondary: "Intuition" },
          },
        },
        skillPoints: 24,
        dispatch: jest.fn(),
      })

      expect(getByLabelText("cooking specialization")).toBeInTheDocument()

      fireEvent.change(getByLabelText("cooking specialization"), {
        target: { value: "japanese cuisine" },
      })
      fireEvent.keyDown(getByLabelText("cooking specialization"), {
        key: "Enter",
      })

      expect(props.dispatch).toHaveBeenCalledWith({
        type: CHANGE_SPECIALIZATION,
        payload: {
          specializationChange: {
            name: "cooking",
            specialization: "japanese cuisine",
          },
        },
      })
    })
  })

  describe("skill points", () => {
    it("should display the remaining skill points", async () => {
      const { getByText } = setup()

      expect(
        getByText(searchRegexInNodes(/Skill Points:4\/20/)),
      ).toBeInTheDocument()
    })

    it("should alert the user about bad stuff when they've used too many skill points", () => {
      const { getByText } = setup({
        skills: mockedRunners[1].skills,
        skillPoints: 12,
        dispatch: jest.fn(),
      })

      expect(getByText("-4/12")).toHaveClass("bad-stuff")
    })
  })
})
