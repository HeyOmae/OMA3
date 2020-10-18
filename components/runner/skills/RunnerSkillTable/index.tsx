import { FC } from "react"
import { Skills } from "../../../../types/runner"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Slider,
} from "@material-ui/core"
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { ActionPayload, CHANGE_SKILL_RATING, REMOVE_SKILL } from ".."
import { Remove } from "@material-ui/icons"

export interface Props {
  skills: Skills
  dispatch: DispatchAction<symbol, ActionPayload>
}

export const RunnerSkillTable: FC<Props> = ({ skills, dispatch }) => (
  <TableContainer>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Remove</TableCell>
          <TableCell>Skill</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Attribute</TableCell>
          <TableCell>Spec</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(skills).map(
          ([skillName, { rating, attribute, specialization }]) => {
            return (
              <TableRow key={skillName}>
                <TableCell>
                  <IconButton
                    color="secondary"
                    aria-label={`remove ${skillName} skill`}
                    onClick={() =>
                      dispatch({
                        type: REMOVE_SKILL,
                        payload: {
                          skillToRemove: skillName,
                        },
                      })
                    }
                  >
                    <Remove />
                  </IconButton>
                </TableCell>
                <TableCell>{skillName}</TableCell>
                <TableCell>
                  <Slider
                    defaultValue={rating}
                    getAriaValueText={(value) => value.toString()}
                    aria-labelledby={`${skillName} rating slider`}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={6}
                    value={rating}
                    data-testid={`${skillName}-rating`}
                    onChange={(event, value) =>
                      dispatch({
                        type: CHANGE_SKILL_RATING,
                        payload: {
                          skillToChangeRating: {
                            name: skillName,
                            rating: +value,
                          },
                        },
                      })
                    }
                  />
                </TableCell>
                <TableCell>{`${attribute.primary}${
                  attribute.secondary ? `/${attribute.secondary}` : ""
                }`}</TableCell>
                <TableCell>{specialization}</TableCell>
              </TableRow>
            )
          }
        )}
      </TableBody>
    </Table>
  </TableContainer>
)
