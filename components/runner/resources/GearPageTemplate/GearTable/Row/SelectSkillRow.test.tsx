import { tools } from "@/data/tools"
import { render, userEvent } from "@/test/testUtils"
import { Props, SelectSkillRow } from "."
import {
  DispatchContext,
  gearTableConfigOptions,
  gearToolsConfigOptionSetSkill,
  UPDATE_GEAR,
} from "../../../util"

describe("<SelectSkillRow/>", () => {
  const setup = () => {
    const props: Props = {
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

  it("should add the selected skill to the tools name", async () => {
    const { getByText, getByLabelText, dispatch } = setup()

    expect(getByText("Astral Kit")).toBeInTheDocument()

    await userEvent.click(getByText("Astral"))
    await userEvent.click(getByText("Engineering"))

    expect(getByText("Engineering Kit")).toBeInTheDocument()

    await userEvent.click(getByLabelText("Add Engineering Kit"))

    expect(dispatch).toHaveBeenCalledWith({
      type: UPDATE_GEAR,
      payload: { ...tools[0], name: "Engineering Kit" },
    })
  })
})
