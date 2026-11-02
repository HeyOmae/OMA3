import { defined } from "@/components/util"
import { FC, useMemo, useState } from "react"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import {
  CircularProgress,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material"
import { KNOWN_SKILLS_ID, SkillTable } from "./SkillTable"
import { RunnerSkillTable } from "./RunnerSkillTable"
import PriorityData from "../../../data/priorityTable"
import { PriorityWarning } from "../../priorityWarning"
import { RemainingKarma } from "../resources/GearPageTemplate/RemainingKarma"
import { ActionPayload } from "./skillsActions"
import { skillsReducer } from "./skillsReducer"

// The actions are imported from here by everything that dispatches them
export * from "./skillsActions"

export type SkillPointsToSpend = "Karma" | "Points"

const skillPointsToSpend: SkillPointsToSpend[] = ["Karma", "Points"]

// the radio buttons give back the value as a string
const toSkillPointsToSpend = (value: string) =>
  defined(
    skillPointsToSpend.find((option) => option === value),
    `${value} as points to spend`,
  )

const Skills: FC = () => {
  const [runner, dispatch] = useRunnerAccess<ActionPayload>(skillsReducer)

  const skillPoints = useMemo(() => {
    const skillsPriority = runner?.priority?.skills
    return skillsPriority ? PriorityData.skills[skillsPriority] : undefined
  }, [runner])

  const [pointsToSpend, setPointsToSpend] =
    useState<SkillPointsToSpend>("Points")

  return (
    runner ?
      skillPoints ?
        <Grid container spacing={2}>
          <RemainingKarma runner={runner} />
          <Grid size={{ xs: 12 }} sx={{ order: { xs: -2, md: 0 } }}>
            <RadioGroup
              aria-label="select-points"
              name="select-points"
              value={pointsToSpend}
              onChange={(event, pointsToSpend) =>
                setPointsToSpend(toSkillPointsToSpend(pointsToSpend))
              }
            >
              <Grid container sx={{ alignItems: "center" }} spacing={1}>
                <Grid>
                  <FormControlLabel
                    value="Points"
                    control={<Radio />}
                    label="Skill Points"
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    value="Karma"
                    control={<Radio />}
                    label="Karma"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <h2>Skills to learn</h2>
            <SkillTable dispatch={dispatch} pointsToSpend={pointsToSpend} />
          </Grid>
          {runner.skills && (
            <Grid
              id={KNOWN_SKILLS_ID}
              size={{ xs: 12, md: 8 }}
              // on phones the known skills come before the list to learn from
              sx={{ order: { xs: -1, md: 0 } }}
            >
              <h2>Known skills</h2>
              <RunnerSkillTable
                runner={runner}
                skillPoints={skillPoints}
                dispatch={dispatch}
                pointsToSpend={pointsToSpend}
              />
            </Grid>
          )}
        </Grid>
      : <PriorityWarning requirement="skills" />
    : <CircularProgress />
  )
}

export default Skills
