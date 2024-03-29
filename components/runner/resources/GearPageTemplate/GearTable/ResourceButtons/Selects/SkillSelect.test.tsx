import { render, fireEvent, userEvent } from "@/test/testUtils"
import skillData from "@/data/skills.json"
import { SkillSelect, SelectProps } from "./index"

describe("<SkillSelect/>", () => {
  const setup = () => {
    const props: SelectProps = {
      selected: skillData[0].name,
      setSelected: jest.fn(),
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

  it("should pass the skillName to setSkill function", async () => {
    const { getByText, props } = setup()
    const electronics = skillData[7].name
    fireEvent.mouseDown(getByText(skillData[0].name))

    await userEvent.click(getByText(electronics))

    expect(props.setSelected).toHaveBeenCalledWith(electronics)
  })
})
