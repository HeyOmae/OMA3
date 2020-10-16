import { FC } from "react"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import { CircularProgress, Grid } from "@material-ui/core"
import { Skills as SkillsType } from "../../../types/runner"
import { SkillTable } from "./SkillTable"

export const ADD_SKILL = Symbol("ADD_SKILL")

const Skills: FC = () => {
  const [runner, dispatch] = useRunnerAccess<symbol, SkillsType>(
    (runner, { type, payload }) => {
      switch (type) {
        case ADD_SKILL:
          return {
            ...runner,
            skills: {
              ...runner.skills,
              ...payload,
            },
          }
      }
    }
  )

  return runner ? (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <SkillTable dispatch={dispatch} />
      </Grid>
    </Grid>
  ) : (
    <CircularProgress />
  )
}

export default Skills
