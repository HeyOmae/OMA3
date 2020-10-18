import { FC } from "react"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import { CircularProgress, Grid } from "@material-ui/core"
import { Skills as SkillsType } from "../../../types/runner"
import { SkillTable } from "./SkillTable"
import { RunnerSkillTable } from "./RunnerSkillTable"

export const ADD_SKILL = Symbol("ADD_SKILL")
export const REMOVE_SKILL = Symbol("REMOVE_SKILL")

export interface ActionPayload {
  skillToRemove?: string
  skillToAdd?: SkillsType
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
      }
    }
  )

  return runner ? (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <SkillTable dispatch={dispatch} />
      </Grid>
      {runner.skills && (
        <Grid item xs={12} sm={6}>
          <RunnerSkillTable skills={runner.skills} dispatch={dispatch} />
        </Grid>
      )}
    </Grid>
  ) : (
    <CircularProgress />
  )
}

export default Skills
