import { FC, useMemo } from "react"
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
import {
  ActionPayload,
  CHANGE_SKILL_RATING,
  CHANGE_SKILL_RATING_WITH_KARMA,
  REMOVE_SKILL,
  CHANGE_EXPERTISE,
  SkillPointsToSpend,
} from ".."
import { RemoveButton } from "../../../common"
import { Runner } from "@/types/runner"

export interface Props {
  runner: Runner
  skillPoints: number
  dispatch: DispatchAction<ActionPayload>
  pointsToSpend: SkillPointsToSpend
}

export const RunnerSkillTable: FC<Props> = ({
  runner: { skills, qualities },
  skillPoints,
  dispatch,
  pointsToSpend,
}) => {
  const pointsRemaining = useMemo(
    () =>
      Object.values(skills).reduce((acc, { rating, specialization }) => {
        return acc - rating - (specialization ? 1 : 0)
      }, skillPoints),
    [skills, skillPoints],
  )

  const AptitudeSkill = useMemo(
    () =>
      qualities?.positive?.find(({ name }) => name === "Aptitude")?.selected,
    [qualities?.positive],
  )

  return (
    <>
      <dl>
        <dt aria-label="Skill Points">Skill Points</dt>
        <dd
          aria-label="Skill Points Value"
          className={pointsRemaining < 0 ? "bad-stuff" : ""}
        >
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
              ([
                skillName,
                {
                  rating,
                  karmaRating = 0,
                  attribute,
                  specialization,
                  expertise,
                },
              ]) => {
                const skillNameHyphen = skillName.replace(" ", "-")
                const skillRating = rating + karmaRating
                const skillCanHaveExpertise = skillRating >= 5
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
                        aria-label={`${skillName} rating slider`}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={AptitudeSkill === skillName ? 7 : 6}
                        value={skillRating}
                        data-testid={`${skillNameHyphen}-rating`}
                        onChange={(event, value) =>
                          dispatch({
                            type:
                              pointsToSpend === "Points" ? CHANGE_SKILL_RATING
                              : CHANGE_SKILL_RATING_WITH_KARMA,
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
                        value={specialization}
                        dispatch={dispatch}
                      />
                      {(skillCanHaveExpertise || expertise) && (
                        <SpecializationSelector
                          className={
                            skillCanHaveExpertise ? undefined : "bad-stuff"
                          }
                          skillName={skillName}
                          id={skillNameHyphen}
                          value={expertise}
                          dispatch={dispatch}
                          type={CHANGE_EXPERTISE}
                          labelType="expertise"
                        />
                      )}
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
