import { tools } from "@/data/tools"
import { render, fireEvent } from "@/test/testUtils"
import { SelectSkillRow, SelectSkillProps } from "."
import {
  DispatchContext,
  gearTableConfigOptions,
  gearToolsConfigOptionSetSkill,
} from "../../../util"

describe("<SelectSkillRow/>", () => {
  const setup = () => {
    const props: SelectSkillProps = {
        cols: [
          gearTableConfigOptions.buy,
          gearTableConfigOptions.name,
          gearToolsConfigOptionSetSkill,
        ],
        gear: tools[0],
        index: 0,
      },
      dispatch = jest.fn()
    return {
      ...render(
        <DispatchContext.Provider value={dispatch}>
          <table>
            <tbody>
              <SelectSkillRow {...props} />
            </tbody>
          </table>
        </DispatchContext.Provider>,
      ),
      dispatch,
    }
  }

  it("should add the selected skill to the tools name", () => {
    const { getByText, getByLabelText, dispatch } = setup()

    expect(getByText("Astral Kit")).toBeInTheDocument()

    fireEvent.mouseDown(getByText("Astral"))
    getByText("Engineering").click()

    expect(getByText("Engineering Kit")).toBeInTheDocument()

    getByLabelText("Add Engineering Kit").click()

    expect(dispatch).toBeCalledWith({
      type: undefined,
      payload: { ...tools[0], name: "Engineering Kit" },
    })
  })
})
