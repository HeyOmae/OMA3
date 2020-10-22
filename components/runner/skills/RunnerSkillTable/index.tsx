import { FC, useMemo } from "react"
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
  TextField,
} from "@material-ui/core"
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import {
  ActionPayload,
  CHANGE_SKILL_RATING,
  CHANGE_SPECIALIZATION,
  REMOVE_SKILL,
} from ".."
import { Remove } from "@material-ui/icons"
import { Autocomplete } from "@material-ui/lab"
import skillData from "../../../../data/skills.json"

export interface Props {
  skills: Skills
  skillPoints: number
  dispatch: DispatchAction<symbol, ActionPayload>
}

export const RunnerSkillTable: FC<Props> = ({
  skills,
  skillPoints,
  dispatch,
}) => {
  const pointsRemaining = useMemo(
    () =>
      Object.values(skills).reduce((acc, { rating, specialization }) => {
        return acc - rating - (specialization ? 1 : 0)
      }, skillPoints),
    [skills, skillPoints]
  )

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Skill Points:</TableCell>
            <TableCell>
              {pointsRemaining}/{skillPoints}
            </TableCell>
          </TableRow>
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
              const skillNameHyphen = skillName.replace(" ", "-")
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
                      data-testid={`${skillNameHyphen}-rating`}
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
                  <TableCell>
                    <Autocomplete
                      freeSolo
                      value={specialization ?? ""}
                      id={`${skillNameHyphen}-specializations`}
                      options={(
                        skillData.find(({ name }) => name === skillName)
                          ?.specializations ?? []
                      ).map(({ name }) => name)}
                      onChange={(event, spec) =>
                        dispatch({
                          type: CHANGE_SPECIALIZATION,
                          payload: {
                            specializationChange: {
                              name: skillName,
                              specialization: spec,
                            },
                          },
                        })
                      }
                      renderInput={(params) => {
                        return (
                          <TextField
                            {...params}
                            label={`${skillName} specialization`}
                          />
                        )
                      }}
                    />
                  </TableCell>
                </TableRow>
              )
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
