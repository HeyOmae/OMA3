import React, { FC, useMemo } from "react"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Slider,
} from "@mui/material"
import { SpecializationSelector } from "./SpecializationSelector"
import { DispatchAction } from "@/hooks/useRunnerAccess"
import { ActionPayload, CHANGE_SKILL_RATING, REMOVE_SKILL } from ".."
import { RemoveButton } from "../../../common"
import { Runner } from "@/types/runner"

export interface Props {
  runner: Runner
  skillPoints: number
  dispatch: DispatchAction<ActionPayload>
}

export const RunnerSkillTable: FC<Props> = ({
  runner: { skills, qualities },
  skillPoints,
  dispatch,
}) => {
  const pointsRemaining = useMemo(
    () =>
      Object.values(skills).reduce((acc, { rating, specialization }) => {
        return acc - rating - (specialization ? 1 : 0)
      }, skillPoints),
    [skills, skillPoints],
  )

  const AptitudeSkill = useMemo(
    () => qualities?.positive.find(({ name }) => name === "Aptitude")?.selected,
    [qualities?.positive],
  )

  return (
    <>
      <dl>
        <dt>Skill Points</dt>
        <dd className={pointsRemaining < 0 ? "bad-stuff" : ""}>
          {pointsRemaining}/{skillPoints}
        </dd>
      </dl>
      <TableContainer className="table-container">
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
                const skillNameHyphen = skillName.replace(" ", "-")
                return (
                  <TableRow key={skillName}>
                    <TableCell>
                      <RemoveButton
                        aria-label={`remove ${skillName} skill`}
                        onClick={() =>
                          dispatch({
                            type: REMOVE_SKILL,
                            payload: {
                              skillToRemove: skillName,
                            },
                          })
                        }
                      />
                    </TableCell>
                    <TableCell>{skillName}</TableCell>
                    <TableCell width="30%">
                      <Slider
                        defaultValue={rating}
                        getAriaValueText={(value) => value.toString()}
                        aria-labelledby={`${skillName} rating slider`}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={AptitudeSkill === skillName ? 7 : 6}
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
                    <TableCell width="30%">
                      <SpecializationSelector
                        skillName={skillName}
                        id={skillNameHyphen}
                        specialization={specialization}
                        dispatch={dispatch}
                      />
                    </TableCell>
                  </TableRow>
                )
              },
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
