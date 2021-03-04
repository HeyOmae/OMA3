import { render, fireEvent } from "@/test/testUtils"
import skillData from "@/data/skills.json"
import { SkillSelect, SkillSelectProps } from "./index"

describe("<SkillSelect/>", () => {
  const setup = () => {
    const props: SkillSelectProps = {
      selectedSkill: skillData[0].name,
      setSkill: jest.fn(),
    }
    return { ...render(<SkillSelect {...props} />), props }
  }
  it("should list the skills", () => {
    const { getByText, getAllByText } = setup()
    fireEvent.mouseDown(getByText(skillData[0].name))

    skillData.forEach(({ name }) => {
      expect(getAllByText(name).length).toBeGreaterThan(0)
    })
  })

  it("should pass the skillName to setSkill function", () => {
    const { getByText, props } = setup()
    const electronics = skillData[7].name
    fireEvent.mouseDown(getByText(skillData[0].name))

    getByText(electronics).click()

    expect(props.setSkill).toHaveBeenCalledWith(electronics)
  })
})
