import { FC, useMemo } from "react"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import { CircularProgress, Grid } from "@material-ui/core"
import { Skills as SkillsType } from "../../../types/Skill"
import { SkillTable } from "./SkillTable"
import { RunnerSkillTable } from "./RunnerSkillTable"
import PriorityData from "../../../data/priorityTable.json"
import { PriorityWarning } from "../../priorityWarning"

export const ADD_SKILL = Symbol("ADD_SKILL")
export const REMOVE_SKILL = Symbol("REMOVE_SKILL")
export const CHANGE_SKILL_RATING = Symbol("CHANGE_SKILL_RATING")
export const CHANGE_SPECIALIZATION = Symbol("CHANGE_SPECIALIZATION")

export interface ActionPayload {
  skillToRemove?: string
  skillToAdd?: SkillsType
  skillToChangeRating?: {
    name: string
    rating: number
  }
  specializationChange?: {
    name: string
    specialization: string
  }
}

const Skills: FC = () => {
  const [runner, dispatch] = useRunnerAccess<symbol, ActionPayload>(
    (runner, { type, payload }) => {
      switch (type) {
        case ADD_SKILL:
          return {
            ...runner,
            skills: {
              ...runner.skills,
              ...payload.skillToAdd,
            },
          }
        case REMOVE_SKILL: {
          const {
            [payload.skillToRemove]: removedSkill,
            ...skills
          } = runner.skills
          return {
            ...runner,
            skills,
          }
        }
        case CHANGE_SKILL_RATING:
          return {
            ...runner,
            skills: {
              ...runner.skills,
              [payload.skillToChangeRating.name]: {
                ...runner.skills[payload.skillToChangeRating.name],
                rating: payload.skillToChangeRating.rating,
              },
            },
          }
        case CHANGE_SPECIALIZATION:
          return {
            ...runner,
            skills: {
              ...runner.skills,
              [payload.specializationChange.name]: {
                ...runner.skills[payload.specializationChange.name],
                specialization: payload.specializationChange.specialization,
              },
            },
          }
      }
    },
  )

  const skillPoints = useMemo(
    () => PriorityData.skills[runner?.priority?.skills],
    [runner],
  )

  return runner ? (
    skillPoints ? (
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <h2>Skills to learn</h2>
          <SkillTable dispatch={dispatch} />
        </Grid>
        {runner.skills && (
          <Grid item sm={12} md={8}>
            <h2>Known skills</h2>
            <RunnerSkillTable
              skills={runner.skills}
              skillPoints={skillPoints}
              dispatch={dispatch}
            />
          </Grid>
        )}
      </Grid>
    ) : (
      <PriorityWarning requirement="skills" />
    )
  ) : (
    <CircularProgress />
  )
}

export default Skills
