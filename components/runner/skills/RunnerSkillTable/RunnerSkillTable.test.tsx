import { RunnerSkillTable, Props } from "."
import {
  render,
  within,
  SliderHelper,
  getByLabelText as containerGetByLabelText,
  getByText as globalGetByText,
  userEvent,
  screen,
} from "@/test/testUtils"
import { mockedRunners } from "@/test/mocks"
import { CHANGE_SKILL_RATING, CHANGE_SPECIALIZATION, REMOVE_SKILL } from ".."

describe("<RunnerSkillTable/>", () => {
  const setup = (
    props: Props = {
      runner: mockedRunners[1],
      skillPoints: 20,
      dispatch: jest.fn(),
    },
  ) => ({ ...render(<RunnerSkillTable {...props} />), props })

  it("should display a table with the runner's skills", async () => {
    const { getByText } = setup()

    const conjuringRow = within(getByText("Conjuring").closest("tr"))
    // rating
    const conjuringRating = conjuringRow.getByTestId("Conjuring-rating")
    expect(conjuringRating.querySelector("input")).toHaveValue("6")
    // attribute
    expect(conjuringRow.getByText("Magic")).toBeInTheDocument()
    // specialization
    expect(
      conjuringRow.getByLabelText("Conjuring specialization"),
    ).toHaveDisplayValue("Banishing")

    const sorceryRow = within(getByText("Sorcery").closest("tr"))
    // rating
    const sorceryRating = sorceryRow.getByTestId("Sorcery-rating")
    expect(sorceryRating.querySelector("input")).toHaveValue("5")
    // attribute
    expect(sorceryRow.getByText("Magic")).toBeInTheDocument()
    // specialization
    expect(
      sorceryRow.getByLabelText("Sorcery specialization"),
    ).toHaveDisplayValue("")

    const perceptionRow = within(getByText("Perception").closest("tr"))
    // rating
    const perceptionRating = perceptionRow.getByTestId("Perception-rating")
    expect(perceptionRating.querySelector("input")).toHaveValue("4")
    // attribute
    expect(perceptionRow.getByText("Intuition/Logic")).toBeInTheDocument()
    // specialization
    expect(
      perceptionRow.getByLabelText("Perception specialization"),
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

      await userEvent.click(specInput)

      expect(queryByRole("listbox")).toBeInTheDocument()

      await userEvent.click(
        globalGetByText(queryByRole("listbox"), "Summoning"),
      )

      expect(getByLabelText("Conjuring specialization")).toHaveValue(
        "Summoning",
      )
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

    it("should allow free form specialization", async () => {
      const { getByLabelText, props } = setup()

      const specInput = getByLabelText("Conjuring specialization")
      await userEvent.click(specInput)
      await userEvent.click(
        containerGetByLabelText(specInput.closest("div"), "Clear"),
      )
      await userEvent.click(specInput)
      await userEvent.keyboard("wild{enter}")

      expect(getByLabelText("Conjuring specialization")).toHaveValue("wild")
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

    it("should not error out when a skill is not listed in the skills.json", async () => {
      const { getByLabelText, props } = setup({
        runner: {
          ...mockedRunners[1],
          skills: {
            cooking: {
              rating: 5,
              attribute: { primary: "Agility", secondary: "Intuition" },
            },
          },
        },
        skillPoints: 24,
        dispatch: jest.fn(),
      })

      expect(getByLabelText("cooking specialization")).toBeInTheDocument()

      await userEvent.click(getByLabelText("cooking specialization"))
      await userEvent.keyboard("japanese cuisine{enter}")

      expect(getByLabelText("cooking specialization")).toHaveValue(
        "japanese cuisine",
      )
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
      const { getByRole } = setup()

      expect(getByRole("term")).toHaveTextContent("Skill Points")
      expect(getByRole("definition")).toHaveTextContent("4/20")
    })

    it("should alert the user about bad stuff when they've used too many skill points", () => {
      const { getByRole } = setup({
        runner: mockedRunners[1],
        skillPoints: 12,
        dispatch: jest.fn(),
      })

      const pointsRemaining = getByRole("definition")
      expect(pointsRemaining).toHaveTextContent("-4/12")
      expect(pointsRemaining).toHaveClass("bad-stuff")
    })
  })

  test("runner without aptitude buy with positive qualities should render skills", () => {
    setup({
      runner: mockedRunners[8],
      skillPoints: 20,
      dispatch: jest.fn(),
    })

    expect(
      screen.getByRole("button", { name: "remove Cracking skill" }),
    ).toBeInTheDocument()
  })
})
