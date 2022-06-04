import { render, userEvent } from "@/test/testUtils"
import skillData from "@/data/skills.json"
import { SpecializationSelector, Props } from "./index"
import { CHANGE_SPECIALIZATION } from "../.."

describe("<SpecializationSelect/>", () => {
  const firearmsSkill = skillData.find(({ name }) => name === "Firearms")
  const setup = (
    props: Props = {
      skillName: "Firearms",
      id: "Firearms",
      specialization: "",
      dispatch: jest.fn(),
    },
  ) => {
    return {
      ...render(<SpecializationSelector {...props} />),
      ...props,
    }
  }
  it("should allow selecting a specializtion", async () => {
    const { getByLabelText, getByText, dispatch } = setup()

    const input = getByLabelText("Firearms specialization")

    await userEvent.click(input)

    firearmsSkill.specializations.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })

    const specToSelect = firearmsSkill.specializations[0].name
    await userEvent.click(getByText(specToSelect))

    expect(dispatch).toHaveBeenCalledWith({
      type: CHANGE_SPECIALIZATION,
      payload: {
        specializationChange: {
          name: "Firearms",
          specialization: specToSelect,
        },
      },
    })
  })

  it("should accept free form text as a specialization", async () => {
    const { getByLabelText, dispatch } = setup()

    const input = getByLabelText("Firearms specialization")

    await userEvent.click(input)
    await userEvent.keyboard("pea shooters{enter}")

    expect(dispatch).toHaveBeenCalledWith({
      type: CHANGE_SPECIALIZATION,
      payload: {
        specializationChange: {
          name: "Firearms",
          specialization: "pea shooters",
        },
      },
    })
  })
})
